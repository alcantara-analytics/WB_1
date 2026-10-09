import { useEffect, useState } from 'react';

export type Route = '/' | '/examenes' | '/recursos' | '/propuestas' | '/participa' | '/equipo' | '/transparencia' | '/eventos';

const validRoutes: Route[] = ['/', '/examenes', '/recursos', '/propuestas', '/participa', '/equipo', '/transparencia', '/eventos'];

function readRoute(): Route {
  const raw = window.location.hash.replace(/^#/, '') || '/';
  return validRoutes.includes(raw as Route) ? (raw as Route) : '/';
}

export function useHashRoute() {
  const [route, setRoute] = useState<Route>(readRoute());

  useEffect(() => {
    const onHashChange = () => {
      setRoute(readRoute());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (to: Route) => {
    if (readRoute() === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.location.hash = to;
  };

  return { route, navigate };
}
