import { useEffect, useRef, useState } from 'react';
import type { Route } from '../hooks/useHashRoute';
import { Icon } from '../components/Icon';
import { MascotStage } from '../components/MascotStage';
import { TeamMarquee } from '../components/TeamMarquee';
import { getUpcomingEvents } from '../data/events';

type Props = { navigate: (to: Route) => void };

const destinations: { route: Route; icon: string; place: string; title: string; text: string }[] = [
  { route: '/examenes', icon: 'book', place: 'HERRAMIENTAS', title: 'Lo que se viene', text: 'Banco de exámenes, horarios, trámites y más.' },
  { route: '/recursos', icon: 'flask', place: 'LABORATORIO', title: 'Recursos académicos', text: 'Sílabos, resúmenes y herramientas.' },
  { route: '/propuestas', icon: 'board', place: 'PIZARRA', title: 'Propuestas', text: 'Problema, respuesta y ejecución.' },
  { route: '/participa', icon: 'inbox', place: 'CANAL', title: 'Únete a Lista 11', text: 'Contacto, novedades y canal oficial.' },
  { route: '/eventos', icon: 'event', place: 'RADAR', title: 'Eventos y datathones', text: 'Data science, IA, economía y oportunidades.' },
  { route: '/equipo', icon: 'team', place: 'SALÓN', title: 'Equipo', text: 'Conoce a quienes están detrás.' }
];

const upcomingEvents = getUpcomingEvents();
const eventPreview = [
  ...upcomingEvents.filter(event => event.area === 'Estadística').slice(0, 3),
  ...upcomingEvents.filter(event => event.area === 'Economía').slice(0, 3)
];

export function Home({ navigate }: Props) {
  const [reduceMotion, setReduceMotion] = useState(false);
  const scrollHeroRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);
  const hintRef = useRef<HTMLButtonElement | null>(null);
  const accessRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion = () => setReduceMotion(motion.matches);
    syncMotion();
    motion.addEventListener?.('change', syncMotion);

    let raf = 0;
    const update = () => {
      raf = 0;
      const hero = scrollHeroRef.current;
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const travel = Math.max(hero.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));

      // Keep the navigation visually integrated with the cinematic hero until
      // the complete scroll story is almost finished. This avoids the header
      // suddenly turning white while the access panel is still over the photo.
      document.body.dataset.scrolled = progress > 0.94 ? 'true' : 'false';

      const mascotLift = -progress * 32;
      const mascotScale = 1 + progress * 0.035;
      const mascotOpacity = Math.max(.68, 1 - progress * .22);
      hero.style.setProperty('--mascot-shift', `${mascotLift.toFixed(1)}px`);
      hero.style.setProperty('--mascot-scale', String(mascotScale.toFixed(3)));
      hero.style.setProperty('--mascot-opacity', String(mascotOpacity.toFixed(3)));

      const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
      const smooth = (edge0: number, edge1: number, value: number) => {
        const t = clamp01((value - edge0) / Math.max(edge1 - edge0, 0.0001));
        return t * t * (3 - 2 * t);
      };

      // Dos etapas simples y separadas: portada -> panel de accesos.
      // Se elimina el mensaje intermedio para evitar cualquier superposición.
      const copyOpacity = 1 - smooth(0.10, 0.27, progress);
      const accessReveal = smooth(0.40, 0.54, progress);

      hero.style.setProperty('--access-opacity', String(accessReveal.toFixed(3)));
      hero.style.setProperty('--access-y', `${((1 - accessReveal) * 22).toFixed(1)}px`);
      hero.style.setProperty('--access-scale', String((0.988 + accessReveal * 0.012).toFixed(3)));

      if (accessRef.current) {
        accessRef.current.style.pointerEvents = accessReveal > 0.94 ? 'auto' : 'none';
        accessRef.current.setAttribute('aria-hidden', accessReveal > 0.08 ? 'false' : 'true');
      }

      const scale = reduceMotion ? 1 : 1.0 + progress * 0.075;
      const tx = reduceMotion ? 0 : -0.03 - progress * 0.34;
      const ty = reduceMotion ? 0 : progress * .14;
      imageRef.current?.style.setProperty('transform', `translate3d(${tx}%, ${ty}%, 0) scale(${scale})`);

      if (copyRef.current) {
        copyRef.current.style.opacity = String(copyOpacity);
        copyRef.current.style.visibility = copyOpacity < 0.02 ? 'hidden' : 'visible';
        copyRef.current.style.pointerEvents = copyOpacity > 0.5 ? 'auto' : 'none';
        copyRef.current.style.transform = reduceMotion ? 'none' : `translate3d(0, ${progress * -14}px, 0)`;
      }

      if (hintRef.current) {
        const hintOpacity = 1 - smooth(0.04, 0.18, progress);
        hintRef.current.style.opacity = String(hintOpacity);
        hintRef.current.style.visibility = hintOpacity < 0.02 ? 'hidden' : 'visible';
      }

    };

    const onScroll = () => { if (!raf) raf = window.requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      motion.removeEventListener?.('change', syncMotion);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
      delete document.body.dataset.scrolled;
    };
  }, [reduceMotion]);

  const goAccess = () => {
    const hero = scrollHeroRef.current;
    if (!hero) return;
    const target = hero.offsetTop + Math.max(0, hero.offsetHeight - window.innerHeight) * 0.48;
    window.scrollTo({ top: target, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return <main>
    <section ref={scrollHeroRef} className="scroll-panorama section-dark hero-v7 hero-v9 hero-v11" aria-label="Entrada panorámica a la FIEECS">
      <div className="scroll-panorama-sticky">
        <div className="scroll-panorama-media" aria-hidden="true">
          <img ref={imageRef} className="scroll-panorama-image" src="/fieecs-home.jpg" alt="" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-vignette" />
        <div className="hero-grid-lines" aria-hidden="true" />

        <div ref={copyRef} className="hero-content panorama-copy scroll-copy hero-copy-v7">
          <div className="hero-campus-tag"><span className="hero-dot" /> FIEECS · UNI</div>
          <div className="kicker">LISTA <strong>11</strong> · REPRESENTACIÓN ESTUDIANTIL</div>
          <h1>Entra a tu facultad.</h1>
          <p>Recursos, propuestas, herramientas y participación estudiantil en una plataforma pensada para Ingeniería Estadística e Ingeniería Económica.</p>
          <div className="hero-actions hero-actions-v7">
            <button className="primary hero-primary" onClick={goAccess}>Explorar <span>↘</span></button>
            <button className="ghost" onClick={() => navigate('/propuestas')}>Propuestas ↗</button>
            <button className="ghost hero-compact-action" onClick={() => navigate('/examenes')}>Herramientas ↗</button>
          </div>
        </div>

        <MascotStage className="hero-mascot" />


        <div ref={accessRef} id="explora-panel" className="hero-access-shell home-access-v7" aria-hidden="true">
          <div className="section-heading home-heading-v7 home-heading-inline">
            <div><span className="eyebrow">TU FACULTAD, A UN CLIC</span><h2>¿Qué necesitas hoy?</h2></div>
            <p>Entra directo a la sección que necesitas y vuelve cuando quieras.</p>
          </div>

          <div className="portal-list hero-portal-list">
            {destinations.map((item, index) => <button key={item.route} className="portal-link" onClick={() => navigate(item.route)}>
              <span className="portal-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="portal-icon"><Icon name={item.icon}/></span>
              <span className="portal-copy"><small>{item.place}</small><strong>{item.title}</strong><em>{item.text}</em></span>
              <span className="portal-arrow">↗</span>
            </button>)}
          </div>
        </div>

        <div className="hero-caption">
          <span>FACULTAD DE INGENIERÍA ECONÓMICA, ESTADÍSTICA Y CIENCIAS SOCIALES</span>
          <b>UNI · LIMA</b>
        </div>
        <button ref={hintRef} className="scroll-hint" onClick={goAccess}>DESLIZA PARA ENTRAR <span>↓</span></button>
      </div>
    </section>

    <section className="team-home-v7">
      <div className="team-home-heading">
        <span className="eyebrow">PERSONAS, NO CARGOS</span>
        <h2>Conoce a Lista 11.</h2>
        <button className="text-link" onClick={() => navigate('/equipo')}>Ver equipo completo ↗</button>
      </div>
      <TeamMarquee />
    </section>

    <section className="home-radar-shell">
      <div className="home-radar-head">
        <div>
          <span className="eyebrow">AL FINAL DEL RECORRIDO</span>
          <h2>Radar de eventos, datathones y agenda útil.</h2>
        </div>
        <p>Una selección rápida para que no tengas que salir de la página solo para encontrar oportunidades relacionadas con estadística, IA y economía.</p>
      </div>

      <div className="home-radar-list">
        {eventPreview.map((event, index) => <article className="home-radar-item" key={`${event.area}-${event.title}`}>
          <span className="home-radar-no">{String(index + 1).padStart(2, '0')}</span>
          <div className="home-radar-copy">
            <small>{event.area} · {event.kind}</small>
            <h3>{event.title}</h3>
            <p>{event.note}</p>
          </div>
          <div className="home-radar-meta">
            <b>{event.dateLabel}</b>
            <span>{event.place}</span>
            <a href={event.url} target="_blank" rel="noreferrer">Abrir ↗</a>
          </div>
        </article>)}
      </div>

      <div className="home-radar-actions">
        <button className="secondary" onClick={() => navigate('/eventos')}>Ver agenda completa</button>
        <button className="ghost" onClick={() => navigate('/examenes')}>Ver herramientas ↗</button>
      </div>
    </section>

    <section className="transparency-band-v7">
      <div>
        <span>TRANSPARENCIA / SEGUIMIENTO</span>
        <h3>Lo que prometemos, se sigue.</h3>
      </div>
      <p>Avances, gestiones y resultados en una página dedicada.</p>
      <button className="line-action" onClick={() => navigate('/transparencia')}>Abrir seguimiento <b>↗</b></button>
    </section>

    <section className="final-cta section-dark home-final compact-final final-v7">
      <div className="final-num">11</div>
      <div className="final-content"><span>UNA FACULTAD HECHA PARA QUIENES LA VIVEN.</span><h2>Conoce. Participa. Construye.</h2><p>Lista 11 · FIEECS UNI</p><div><button className="white-btn" onClick={() => navigate('/propuestas')}>Conocer propuestas</button><button className="outline-white" onClick={() => navigate('/participa')}>Participar ↗</button></div></div>
    </section>
  </main>;
}
