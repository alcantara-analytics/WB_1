const map: Record<string, string> = {
  book: '▤',
  flask: '⌬',
  board: '▦',
  inbox: '⌑',
  event: '◫',
  team: '◉',
  report: '!',
  arrow: '↗',
  search: '⌕',
  check: '✓',
  clock: '◷',
  back: '←',
  file: '▧',
  spark: '✦'
};

export function Icon({ name }: { name: string }) {
  return <span className="icon" aria-hidden="true">{map[name] ?? '•'}</span>;
}
