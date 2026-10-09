import { PageHeader } from '../components/PageHeader';
import { getUpcomingEvents } from '../data/events';
import type { Route } from '../hooks/useHashRoute';

type Props = { navigate: (to: Route) => void; notify: (message: string) => void };

export function Events({ navigate, notify }: Props) {
  const upcoming = getUpcomingEvents();
  const stats = upcoming.filter(event => event.area === 'Estadística');
  const econ = upcoming.filter(event => event.area === 'Economía');

  const renderGroup = (title: string, subtitle: string, items: typeof upcoming) => <section className="agenda-group">
    <div className="section-heading inline-head agenda-head">
      <div>
        <span className="eyebrow">{subtitle}</span>
        <h2>{title}</h2>
      </div>
      <p>Solo mostramos actividades próximas. Cuando una fecha pasa, deja de aparecer automáticamente.</p>
    </div>

    <div className="agenda-list">
      {items.map((event, index) => <article className="agenda-item" key={`${event.area}-${event.title}`}>
        <div className="agenda-index">{String(index + 1).padStart(2, '0')}</div>
        <div className="agenda-body">
          <div className="agenda-labels">
            <span>{event.dateLabel}</span>
            <span>{event.kind}</span>
          </div>
          <h3>{event.title}</h3>
          <p>{event.note}</p>
        </div>
        <div className="agenda-side">
          <strong>{event.place}</strong>
          <div className="agenda-actions">
            <a href={event.url} target="_blank" rel="noreferrer">Ir al enlace ↗</a>
            <button onClick={() => notify(`Revísalo luego: ${event.title}`)}>Guardar referencia</button>
          </div>
        </div>
      </article>)}
    </div>
  </section>;

  return <main className="page-main">
    <PageHeader eyebrow="RADAR" title="Eventos y oportunidades" description="Actividades futuras de data science, IA, estadística, economía y finanzas que todavía puedes aprovechar." navigate={navigate}/>
    <section className="content-shell">
      {renderGroup('Data science, IA y estadística', 'ESTADÍSTICA / ANALÍTICA', stats)}
      {renderGroup('Economía y agenda profesional', 'ECONOMÍA / PROFESIÓN', econ)}
      <div className="page-cta page-cta-split">
        <div>
          <span className="eyebrow">RADAR VIVO</span>
          <h3>Sin eventos vencidos.</h3>
          <p>El listado se filtra por fecha para priorizar únicamente actividades que siguen siendo útiles para el estudiante.</p>
        </div>
        <div className="cta-stack-actions">
          <button className="secondary" onClick={() => navigate('/participa')}>Canal de Lista 11</button>
          <button className="ghost" onClick={() => navigate('/examenes')}>Ver herramientas ↗</button>
        </div>
      </div>
    </section>
  </main>;
}
