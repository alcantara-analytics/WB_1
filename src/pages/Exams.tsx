import { useMemo, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Icon } from '../components/Icon';
import { exams } from '../data/exams';
import type { Route } from '../hooks/useHashRoute';

type Props = { navigate: (to: Route) => void; notify: (message: string) => void };

export function Exams({ navigate, notify }: Props) {
  const [track, setTrack] = useState('Todos');
  const visible = useMemo(() => track === 'Todos' ? exams : exams.filter(item => item.track === track), [track]);

  return <main className="page-main">
    <PageHeader eyebrow="HERRAMIENTAS" title="Lo que se viene" description="Herramientas viables que queremos dejar instaladas para la facultad si gana Lista 11." navigate={navigate}/>
    <section className="content-shell">
      <div className="chips">
        {['Todos', 'Académico', 'Trámites', 'Empleabilidad', 'Vida estudiantil'].map(option =>
          <button key={option} className={track === option ? 'active' : ''} onClick={() => setTrack(option)}>{option}</button>
        )}
      </div>

      <div className="utility-stack">
        {visible.map((item, index) => <article className="utility-row" key={`${item.title}-${index}`}>
          <div className="utility-row-head">
            <span className="utility-row-no">{String(index + 1).padStart(2, '0')}</span>
            <div className="utility-row-tags">
              <small>{item.track}</small>
              <span>{item.phase}</span>
            </div>
          </div>
          <div className="utility-row-body">
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <div className="utility-benefit utility-benefit-row"><Icon name="spark"/><span>{item.benefit}</span></div>
          </div>
          <div className="utility-row-side">
            <strong>{item.when}</strong>
            <button onClick={() => notify(`Lista 11 priorizará: ${item.title}`)}>Priorizar ↗</button>
          </div>
        </article>)}
      </div>

      <div className="page-cta page-cta-split">
        <div>
          <span className="eyebrow">ENFOQUE</span>
          <h3>No vender humo: construir cosas útiles.</h3>
          <p>La idea es dejar soluciones concretas para matrícula, trámites, empleabilidad y vida académica, no solo una página bonita.</p>
        </div>
        <div className="cta-stack-actions">
          <button className="primary" onClick={() => navigate('/propuestas')}>Ver propuestas relacionadas</button>
          <button className="ghost" onClick={() => navigate('/eventos')}>Ver eventos ↗</button>
        </div>
      </div>
    </section>
  </main>;
}
