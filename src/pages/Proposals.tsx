import { useMemo, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { proposals } from '../data/proposals';
import type { Route } from '../hooks/useHashRoute';

type Props = { navigate: (to: Route) => void; notify: (message: string) => void };

const categories = ['Todas', 'Acompañamiento', 'Matrícula', 'Gestión académica', 'Transparencia', 'Representación', 'Oportunidades'];

export function Proposals({ navigate, notify }: Props) {
  const [filter, setFilter] = useState('Todas');
  const [selected, setSelected] = useState<number | null>(null);
  const visible = useMemo(() => filter === 'Todas' ? proposals : proposals.filter(p => p.category === filter), [filter]);
  const detail = selected ? proposals.find(p => p.id === selected) : null;

  return <main className="page-main proposals-page proposals-v8">
    <PageHeader
      eyebrow="AGENDA DEL TERCIO"
      title="Propuestas que sí se pueden gestionar."
      description="Cada propuesta parte de un problema concreto y distingue qué puede hacer el Tercio, qué requiere coordinación con la facultad y cómo se dará seguimiento."
      navigate={navigate}
      dark
    />

    <section className="proposal-principles-v8">
      <div><span>01</span><strong>Representar</strong><p>Llevar problemas colectivos con evidencia, no solo comentarios sueltos.</p></div>
      <div><span>02</span><strong>Gestionar</strong><p>Proponer, solicitar, coordinar y escalar ante la instancia que realmente puede resolver.</p></div>
      <div><span>03</span><strong>Dar seguimiento</strong><p>Publicar qué se pidió, qué respondió la facultad y qué sigue pendiente.</p></div>
    </section>

    <section className="content-shell proposal-shell-v8">
      <div className="proposal-filter-v8" aria-label="Filtrar propuestas">
        {categories.map(f => <button key={f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>{f}</button>)}
      </div>

      <div className="proposal-board-v8">
        {visible.map(p => <article className="proposal-row-v8" key={p.id}>
          <span className="proposal-number-v8">{String(p.id).padStart(2, '0')}</span>
          <div className="proposal-main-v8">
            <span className="proposal-category-v8">{p.category}</span>
            <h3>{p.title}</h3>
            <p>{p.problem}</p>
          </div>
          <div className="proposal-side-v8">
            <div><small>IMPACTO</small><strong>{p.impact}</strong></div>
            <div><small>CUÁNDO</small><strong>{p.term}</strong></div>
            <button onClick={() => setSelected(p.id)}>Ver cómo se haría <b>↗</b></button>
          </div>
        </article>)}
      </div>
    </section>

    {detail && <div className="modal-backdrop" onMouseDown={() => setSelected(null)}>
      <article className="proposal-modal proposal-modal-v8" onMouseDown={e => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setSelected(null)}>×</button>
        <span className="eyebrow">PROPUESTA {String(detail.id).padStart(2, '0')} · {detail.category}</span>
        <h2>{detail.title}</h2>

        <div className="proposal-detail-grid-v8">
          <div className="detail-block"><small>EL PROBLEMA</small><p>{detail.problem}</p></div>
          <div className="detail-block"><small>QUÉ PROPONEMOS</small><p>{detail.solution}</p></div>
        </div>

        <div className="detail-block"><small>PLAN DE ACCIÓN</small><ol className="proposal-steps-v8">{detail.implementation.map((step, i) => <li key={step}><span>{String(i + 1).padStart(2, '0')}</span><p>{step}</p></li>)}</ol></div>

        <div className="proposal-scope-v8">
          <div><small>QUÉ SÍ PUEDE HACER EL TERCIO</small><p>{detail.scope}</p></div>
          <div><small>CÓMO LO VAMOS A MEDIR</small><p>{detail.indicator}</p></div>
        </div>

        <div className="modal-meta modal-meta-v8">
          <span><b>{detail.impact}</b><small>Impacto</small></span>
          <span><b>{detail.term}</b><small>Inicio / frecuencia</small></span>
        </div>
        <button className="primary wide" onClick={() => notify(`Registramos tu interés en: ${detail.title}`)}>Me interesa esta propuesta</button>
      </article>
    </div>}
  </main>;
}
