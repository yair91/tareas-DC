import { Directive, ElementRef, HostListener, inject } from '@angular/core';

const FALLBACK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="450" viewBox="0 0 300 450">' +
      '<rect width="300" height="450" fill="#1f2433"/>' +
      '<text x="150" y="225" fill="#8b93a7" font-family="sans-serif" font-size="20" text-anchor="middle">Sin poster</text>' +
      '</svg>',
  );

@Directive({
  selector: 'img[appPosterFallback]',
})
export class PosterFallback {
  private readonly img = inject(ElementRef<HTMLImageElement>);

  @HostListener('error')
  onError() {
    const element = this.img.nativeElement as HTMLImageElement;
    if (element.src !== FALLBACK) {
      element.src = FALLBACK;
    }
  }
}
