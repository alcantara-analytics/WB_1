import type { Route } from '../hooks/useHashRoute';

const WHATSAPP_CHANNEL = 'https://whatsapp.com/channel/0029Vb9ahMe1iUxSZg3YNp3F';

type Props = { navigate: (to: Route) => void };

export function Footer({ navigate }: Props) {
  return <footer>
    <div className="footer-brand"><span className="badge11">11</span><p>Una plataforma digital construida para la facultad.</p></div>
    <div><b>Explora</b><button onClick={() => navigate('/examenes')}>Herramientas</button><button onClick={() => navigate('/recursos')}>Recursos</button><button onClick={() => navigate('/eventos')}>Eventos</button></div>
    <div><b>Proyecto</b><button onClick={() => navigate('/propuestas')}>Propuestas</button><button onClick={() => navigate('/equipo')}>Equipo</button><button onClick={() => navigate('/transparencia')}>Transparencia</button></div>
    <div className="footer-contact-v14"><b>Contacto</b><a href={WHATSAPP_CHANNEL} target="_blank" rel="noreferrer">Canal de WhatsApp ↗</a></div>
    <small>Sitio desarrollado para fines de representación estudiantil.</small>
  </footer>;
}
