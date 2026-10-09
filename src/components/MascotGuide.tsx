import { useState } from 'react';
import type { Route } from '../hooks/useHashRoute';

type Props = { navigate: (to: Route) => void };

export function MascotGuide({ navigate }: Props) {
  const [open, setOpen] = useState(false);
  return <div className={`mascot-guide ${open ? 'open' : ''}`}>
    {open && <div className="mascot-guide-copy">
      <strong>¿Qué necesitas?</strong>
      <button onClick={() => navigate('/examenes')}>Exámenes</button>
      <button onClick={() => navigate('/propuestas')}>Propuestas</button>
      <button onClick={() => navigate('/participa')}>Participar</button>
    </div>}
    <button className="mascot-guide-button" onClick={() => setOpen(v => !v)} aria-label="Abrir guía de Lista 11" aria-expanded={open}>
      <img src="/mascota-colibri.webp" alt="" />
    </button>
  </div>;
}
