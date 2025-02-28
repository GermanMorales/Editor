import { useEffect } from 'react';
import { useCanvasContext } from '../hooks/useCanvas';
import useResponsiveSize from '../hooks/useResponsiveSize';
import WaveObj from '../utils/wave';

const hexToRgba = (hex, alpha = 0.1) => {

  hex = hex.replace(/^#/, '');

  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const Wave = ({frontWaveColor, backWaveColor}) => {
  const { context } = useCanvasContext();
  const { width } = useResponsiveSize();
  const height = 600;
  let frequency = 0.013;

  useEffect(() => {
    if (!context) return;
    const waves = {
      frontWave: new WaveObj([0.0211, 0.028, 0.015], hexToRgba(frontWaveColor, 0.1)),
      backWave: new WaveObj([0.0122, 0.018, 0.005], hexToRgba(backWaveColor, 0.1))
    };

    const render = () => {
      context.clearRect(0, 0, width, height);
      Object.values(waves).forEach((wave) => {
        wave.draw(context, width, height, frequency);
      });
      frequency += 0.013;
      requestAnimationFrame(render);
    };

    render();
  }, [context, width, height, frontWaveColor, backWaveColor]); // ✅ Added color dependencies

  return null;
};

export default Wave;
