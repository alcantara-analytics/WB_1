export type Proposal = {
  id: number;
  title: string;
  category: string;
  problem: string;
  solution: string;
  implementation: string[];
  impact: 'Alto' | 'Medio';
  term: string;
  scope: string;
  indicator: string;
};

export type UtilityFeature = {
  title: string;
  track: string;
  phase: string;
  summary: string;
  benefit: string;
  when: string;
};

export type TeamMember = {
  name: string;
  role: string;
  career: string;
  cycle: string;
  quote: string;
  image: string;
};

export type EventItem = {
  area: 'Estadística' | 'Economía';
  kind: string;
  title: string;
  place: string;
  date: string;
  dateLabel: string;
  note: string;
  url: string;
};
