import { Component, DestroyRef, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { EMPTY_FILTER, FilterCriteria, MovieFilter } from '../../models/movie-filter';

@Component({
  selector: 'app-movie-filters',
  imports: [ReactiveFormsModule],
  templateUrl: './movie-filters.html',
  styleUrl: './movie-filters.css',
})
export class MovieFilters implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);

  @Input() genres: string[] = [];
  @Input() years: number[] = [];
  @Input() resultCount = 0;
  @Input() total = 0;

  @Output() filterChange = new EventEmitter<MovieFilter>();

  readonly criteriaOptions: { value: FilterCriteria; label: string }[] = [
    { value: 'all', label: 'Todos los campos' },
    { value: 'title', label: 'Título' },
    { value: 'director', label: 'Director' },
    { value: 'producer', label: 'Productor' },
    { value: 'genre', label: 'Género' },
    { value: 'year', label: 'Año' },
  ];

  readonly form = this.fb.nonNullable.group({
    term: EMPTY_FILTER.term,
    criteria: EMPTY_FILTER.criteria as FilterCriteria,
    genre: EMPTY_FILTER.genre,
    year: this.fb.control<number | null>(EMPTY_FILTER.year),
  });

  get hasFilters(): boolean {
    const { term, criteria, genre, year } = this.form.getRawValue();
    return !!term || criteria !== 'all' || !!genre || year !== null;
  }

  ngOnInit() {
    this.form.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.filterChange.emit(this.form.getRawValue());
    });
  }

  clear() {
    this.form.reset();
  }
}
