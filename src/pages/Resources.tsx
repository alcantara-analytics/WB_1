import { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Icon } from '../components/Icon';
import type { Route } from '../hooks/useHashRoute';

const groups = [
  { name: 'Sílabos', text: 'Documentos por curso y periodo.', items: 18 },
  { name: 'Formularios', text: 'Fórmulas y hojas de apoyo.', items: 12 },
  { name: 'Resúmenes', text: 'Material compartido por estudiantes.', items: 24 },
  { name: 'Separatas', text: 'Lecturas y ejercicios organizados.', items: 16 },
  { name: 'Software', text: 'Herramientas y enlaces útiles.', items: 9 },
  { name: 'Bibliografía', text: 'Libros y referencias recomendadas.', items: 20 }
];

type Props = { navigate: (to: Route) => void; notify: (message: string) => void };

export function Resources({ navigate, notify }: Props) {
  const [selected, setSelected] = useState('Todos');
  const visible = selected === 'Todos' ? groups : groups.filter(x => x.name === selected);

  return <main className="page-main">
    <PageHeader eyebrow="LABORATORIO" title="Recursos académicos" description="Material organizado por categoría. Selecciona una y la vista cambia sin convertir todo en una página interminable." navigate={navigate}/>
    <section className="content-shell">
      <div className="chips"><button className={selected === 'Todos' ? 'active' : ''} onClick={() => setSelected('Todos')}>Todos</button>{groups.map(g => <button className={selected === g.name ? 'active' : ''} key={g.name} onClick={() => setSelected(g.name)}>{g.name}</button>)}</div>
      <div className="resource-page-grid">{visible.map((g,i) => <button className="resource-card" key={g.name} onClick={() => notify(`Demo: abrir ${g.name}`)}><span>0{i+1}</span><Icon name="file"/><h3>{g.name}</h3><p>{g.text}</p><b>{g.items} recursos · Abrir ↗</b></button>)}</div>
    </section>
  </main>;
}
