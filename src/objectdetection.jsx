import React, { useEffect, useRef, useState } from 'react';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';
import heatmap from 'heatmap.js';

const ObjectDetection = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [predictions, setPredictions] = useState([]);
  const [isWebcamStarted, setIsWebcamStarted] = useState(false);
  const [heatmapInstance, setHeatmapInstance] = useState(null);

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUser Media({ video: true });
      videoRef.current.srcObject = stream;
      setIsWebcamStarted(true);
    } catch (error) {
      console.error('Error accessing webcam:', error);
    }
  };

  const stopWebcam = () => {
    const stream = videoRef.current.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsWebcamStarted(false);
  };

  const predictObject = async () => {
    const model = await cocoSsd.load();
    const predictions = await model.detect(videoRef.current);
    setPredictions(predictions);
    updateHeatmap(predictions);
  };

  const updateHeatmap = (predictions) => {
    if (heatmapInstance) {
      predictions.forEach(prediction => {
        const { bbox } = prediction;
        heatmapInstance.addData({
          x: bbox[0] + bbox[2] / 2,
          y: bbox[1] + bbox[3] / 2,
          value: 1
        });
      });
    }
  };

  useEffect(() => {
    if (isWebcamStarted) {
      const hmap = heatmap.create({
        container: document.getElementById('heatmapContainer'),
        radius: 40,
        maxOpacity: .6,
        scaleRadius: true,
        useLocalExtrema: true
      });
      setHeatmapInstance(hmap);
      const interval = setInterval(predictObject, 500);
      return () => clearInterval(interval);
    }
  }, [isWebcamStarted]);

  return (
    <div>
      <button onClick={isWebcamStarted ? stopWebcam : startWebcam}>
        {isWebcamStarted ? "Stop" : "Start"} Webcam
      </button>
      <video ref={videoRef} autoPlay muted width="640" height="480" />
      <canvas ref={canvasRef} width="640" height="480" />
      <div id="heatmapContainer" style={{ position: 'absolute', top: 0, left: 0, width: '640px', height: '480px' }} />
      {predictions.length > 0 && (
        <div>
          {predictions.map((prediction, index) => (
            <div key={index} style={{
              position: 'absolute',
              left: `${prediction.bbox[0]}px`,
              top: `${prediction.bbox[1]}px`,
              width: `${prediction.bbox[2]}px`,
              height: `${prediction.bbox[3]}px`,
              border: '2px solid red'
            }}>
              {prediction.class} - {Math.round(prediction.score * 100)}%
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ObjectDetection;
