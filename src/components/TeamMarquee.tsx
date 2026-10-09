import { team } from '../data/team';

export function TeamMarquee() {
  const repeated = [...team, ...team];

  return <section className="team-marquee" aria-label="Equipo Lista 11">
    <div className="team-marquee-label" aria-hidden="true">EQUIPO · LISTA 11 · EQUIPO · LISTA 11</div>
    <div className="team-marquee-mask">
      <div className="team-marquee-track">
        {repeated.map((person, index) => <figure className="team-marquee-item" key={`${person.name}-${index}`}>
          <img src={person.image} alt={`${person.name}, ${person.career}`} loading={index < team.length ? 'eager' : 'lazy'} />
          <figcaption>
            <strong>{person.name}</strong>
            <span>{person.career}</span>
          </figcaption>
        </figure>)}
      </div>
    </div>
  </section>;
}
