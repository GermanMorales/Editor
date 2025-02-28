import { useRef, useEffect, useState } from 'react';

import { CanvasContext } from '../hooks/useCanvas';
import useResponsiveSize from '../hooks/useResponsiveSize';
import Wave from './Wave';

const Canvas = ({ webData }) => {
  const canvasRef = useRef(null);
  const { width } = useResponsiveSize();
  const [context, setContext] = useState(null);

    // 🛠 Debugging: Log the colors
    useEffect(() => {

    }, [webData]); // Log when webData updates

  useEffect(() => {
    const ctx = canvasRef?.current?.getContext('2d');
    if (ctx) setContext(ctx);
  }, []);

  return (
    <CanvasContext.Provider value={{ context }}>
      <canvas id="canvas" ref={canvasRef} width={width} height={220}></canvas>
      <Wave 
        frontWaveColor={webData?.color1 || "#EC4755"} 
        backWaveColor={webData?.color2 || "#F9A8A8"} 
      />
    </CanvasContext.Provider>
  );
};

export default Canvas;

