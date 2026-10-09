import { PageHeader } from '../components/PageHeader';
import type { Route } from '../hooks/useHashRoute';

type Props = { navigate: (to: Route) => void };

const items = [
  { title: 'Repositorio académico', status: 'En ejecución', progress: 65, update: '5 oct 2026' },
  { title: 'Canal de incidencias', status: 'En diseño', progress: 35, update: '5 oct 2026' },
  { title: 'Agenda de oportunidades', status: 'Lista para lanzar', progress: 90, update: '5 oct 2026' }
];

export function Transparency({ navigate }: Props) {
  return <main className="page-main">
    <PageHeader eyebrow="TRANSPARENCIA" title="Lo que prometemos, se sigue." description="Estados, avances y próximos hitos en una vista separada y fácil de consultar." navigate={navigate}/>
    <section className="content-shell">
      <div className="tracking-list">{items.map(item => <article className="tracking-card" key={item.title}>
        <div><small>GESTIÓN</small><h3>{item.title}</h3><p>Estado: <b>{item.status}</b></p></div>
        <div className="progress"><span><b>{item.progress}%</b> avance</span><div><i style={{width:`${item.progress}%`}}/></div><small>Última actualización · {item.update}</small></div>
      </article>)}</div>
      <div className="timeline"><span className="eyebrow">EJEMPLO DE TIMELINE</span><h2>Así se vería una gestión.</h2>{['Se recibió la propuesta','Se coordinó con dirección','Se aprobó un piloto','Se ejecutó','Se evaluaron resultados'].map((text,i) => <div className="timeline-row" key={text}><b>{String(i+1).padStart(2,'0')}</b><span>{text}</span></div>)}</div>
    </section>
  </main>;
}
