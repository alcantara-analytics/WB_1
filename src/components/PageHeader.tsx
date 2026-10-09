import { Icon } from './Icon';
import type { Route } from '../hooks/useHashRoute';

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  navigate: (to: Route) => void;
  dark?: boolean;
};

export function PageHeader({ eyebrow, title, description, navigate, dark }: Props) {
  return <section className={`page-hero ${dark ? 'page-hero-dark' : ''}`}>
    <div className="page-hero-inner">
      <div className="page-hero-topline-v14">
        <button className="back-link" onClick={() => navigate('/')}><Icon name="back"/> Volver al hall</button>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  </section>;
}
