export type FilterCriteria = 'all' | 'title' | 'director' | 'producer' | 'genre' | 'year';

export interface MovieFilter {
  term: string;
  criteria: FilterCriteria;
  genre: string;
  year: number | null;
}

export const EMPTY_FILTER: MovieFilter = {
  term: '',
  criteria: 'all',
  genre: '',
  year: null,
};
