export const ALL = 'Todos';

type Opts<T> = { groupOf: (t: T) => string; active: string; query?: string; text?: (t: T) => string; sort?: (a: T, b: T) => number };

export function applyFilter<T>(items: T[], o: Opts<T>): T[] {
  const q = (o.query ?? '').trim().toLowerCase();
  const out = items.filter((t) => (o.active === ALL || o.groupOf(t) === o.active) && (!q || (o.text?.(t) ?? '').toLowerCase().includes(q)));
  return o.sort ? [...out].sort(o.sort) : out;
}

export function countBy<T>(items: T[], groups: string[], o: Omit<Opts<T>, 'active' | 'sort'>) {
  return Object.fromEntries(groups.map((g) => [g, applyFilter(items, { ...o, active: g }).length])) as Record<string, number>;
}
