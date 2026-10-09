import { useState } from 'react';
import type { Route } from '../hooks/useHashRoute';

type Props = { route: Route; navigate: (to: Route) => void };

const links: { label: string; route: Route }[] = [
  { label: 'Inicio', route: '/' },
  { label: 'Herramientas', route: '/examenes' },
  { label: 'Propuestas', route: '/propuestas' },
  { label: 'Contacto', route: '/participa' },
  { label: 'Equipo', route: '/equipo' }
];

export function Navbar({ route, navigate }: Props) {
  const [open, setOpen] = useState(false);
  const go = (to: Route) => { setOpen(false); navigate(to); };

  return <>
    <header className={`nav nav-v7 ${route === '/' ? 'home-nav' : ''}`}>
      <button className="brand brand-v7" onClick={() => go('/')} aria-label="Ir al inicio">
        <img src="/mascota-colibri.webp" alt="" aria-hidden="true" />
        <span>LISTA <b>11</b></span>
      </button>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {links.map(link => <button key={link.route} className={route === link.route ? 'active' : ''} onClick={() => go(link.route)}>{link.label}</button>)}
        <button className={route === '/transparencia' ? 'active' : ''} onClick={() => go('/transparencia')}>Transparencia</button>
      </nav>
      <button className="vote-btn vote-btn-v7" onClick={() => go('/propuestas')}>Vota Lista 11 <span>↗</span></button>
      <button className="menu-btn" onClick={() => setOpen(v => !v)} aria-label="Abrir menú" aria-expanded={open}>{open ? '×' : '☰'}</button>
    </header>
    {open && <div className="mobile-menu">
      {[...links, { label: 'Recursos', route: '/recursos' as Route }, { label: 'Eventos', route: '/eventos' as Route }, { label: 'Transparencia', route: '/transparencia' as Route }].map(link =>
        <button key={link.route} className={route === link.route ? 'active' : ''} onClick={() => go(link.route)}>{link.label}</button>
      )}
    </div>}
  </>;
}
