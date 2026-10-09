import { PageHeader } from '../components/PageHeader';
import { TeamMarquee } from '../components/TeamMarquee';
import { team } from '../data/team';
import type { Route } from '../hooks/useHashRoute';

type Props = { navigate: (to: Route) => void };

export function Team({ navigate }: Props) {
  return <main className="page-main team-page-v7">
    <PageHeader eyebrow="SALÓN" title="Personas, no cargos." description="Una lista se reconoce por las personas que dan la cara. Conoce al equipo detrás de Lista 11." navigate={navigate}/>

    <section className="team-page-intro">
      <span>FIEECS · 2026–2027</span>
      <h2>Distintas experiencias. Una misma facultad.</h2>
    </section>

    <TeamMarquee />

    <section className="team-credits-v7">
      {team.map((person, index) => <article key={person.name} className="team-credit-row">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <strong>{person.name}</strong>
        <em>{person.career}</em>
        <p>{person.quote}</p>
      </article>)}
    </section>
  </main>;
}
