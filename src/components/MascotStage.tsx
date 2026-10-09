import { useEffect, useRef } from 'react';

type Props = {
  className?: string;
  compact?: boolean;
};

export function MascotStage({ className = '', compact = false }: Props) {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const shellRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const shell = shellRef.current;
    if (!stage || !shell) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    const setTilt = (x: number, y: number) => {
      if (reduce.matches) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        shell.style.setProperty('--tilt-x', `${(-y * 4.6).toFixed(2)}deg`);
        shell.style.setProperty('--tilt-y', `${(x * 6.2).toFixed(2)}deg`);
        shell.style.setProperty('--wing-shift', `${(x * 5).toFixed(1)}px`);
      });
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      setTilt(Math.max(-1, Math.min(1, x)), Math.max(-1, Math.min(1, y)));
    };

    const reset = () => setTilt(0, 0);
    stage.addEventListener('pointermove', onPointerMove);
    stage.addEventListener('pointerleave', reset);

    return () => {
      cancelAnimationFrame(frame);
      stage.removeEventListener('pointermove', onPointerMove);
      stage.removeEventListener('pointerleave', reset);
    };
  }, []);

  return <div ref={stageRef} className={`mascot-stage ${compact ? 'mascot-stage-compact' : ''} ${className}`} aria-label="Colibrí, mascota de Lista 11">
    <div className="mascot-orbit mascot-orbit-a" aria-hidden="true" />
    <div className="mascot-orbit mascot-orbit-b" aria-hidden="true" />
    <div ref={shellRef} className="mascot-shell">
      <img className="mascot-depth mascot-depth-back" src="/mascota-colibri.webp" alt="" aria-hidden="true" />
      <img className="mascot-depth mascot-depth-mid" src="/mascota-colibri.webp" alt="" aria-hidden="true" />
      <img className="mascot-image mascot-image-back" src="/mascota-colibri.webp" alt="" aria-hidden="true" />
      <img className="mascot-image mascot-image-front" src="/mascota-colibri.webp" alt="Colibrí azul y morado de Lista 11" />
      <span className="mascot-glint" aria-hidden="true" />
    </div>
    <span className="mascot-shadow" aria-hidden="true" />
  </div>;
}
