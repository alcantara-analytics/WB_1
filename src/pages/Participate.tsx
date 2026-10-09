import { PageHeader } from '../components/PageHeader';
import type { Route } from '../hooks/useHashRoute';

type Props = { navigate: (to: Route) => void; notify?: (message: string) => void };

const WHATSAPP_CHANNEL = 'https://whatsapp.com/channel/0029Vb9ahMe1iUxSZg3YNp3F';

export function Participate({ navigate }: Props) {
  return <main className="page-main">
    <PageHeader eyebrow="CONTACTO" title="Súmate a Lista 11." description="Sin formularios de prueba: usa nuestro canal oficial para seguir novedades, propuestas y actividades." navigate={navigate}/>
    <section className="content-shell contact-page-v14">
      <div className="contact-main-v14">
        <span className="eyebrow">CANAL OFICIAL</span>
        <h2>Todo lo importante, en un solo lugar.</h2>
        <p>Sigue el canal de WhatsApp de Lista 11 para enterarte de novedades de campaña, propuestas, eventos, herramientas y avisos para la FIEECS.</p>
        <a className="whatsapp-cta-v14" href={WHATSAPP_CHANNEL} target="_blank" rel="noreferrer">
          <span>Unirme al canal de WhatsApp</span>
          <b>↗</b>
        </a>
      </div>

      <aside className="contact-side-v14">
        <div>
          <small>01</small>
          <strong>Novedades</strong>
          <p>Actualizaciones de Lista 11 sin depender de mensajes reenviados.</p>
        </div>
        <div>
          <small>02</small>
          <strong>Agenda útil</strong>
          <p>Eventos, datathones, oportunidades y herramientas para ambas carreras.</p>
        </div>
        <div>
          <small>03</small>
          <strong>Seguimiento</strong>
          <p>Información sobre propuestas y gestiones que se vayan impulsando.</p>
        </div>
      </aside>
    </section>
  </main>;
}
