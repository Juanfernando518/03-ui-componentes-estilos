import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { SimpsonsService } from '../simpsons/services/SimpsonsService';
import { PaginationService } from '../simpsons/services/PaginationService';
import { PaginationComponent } from "../simpsons/PaginationComponent/PaginationComponent";
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap, map } from 'rxjs';
import { HeroSimpsonsComponent } from "../simpsons/components/hero-simpsons/hero-simpsons";
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-simpsons-page',
  standalone: true,
  imports: [CommonModule, RouterModule, PaginationComponent, HeroSimpsonsComponent, BreadcrumbsComponent],
  templateUrl: './simpsons-page.html',
})
export class SimpsonsPageComponent {

  private simpsonsService = inject(SimpsonsService);
  paginationService = inject(PaginationService);

  private route = inject(ActivatedRoute);

  /** -------------------------------------------------------
   *  1) Recurso reactivo: cambia cuando ?page= cambia
   * ------------------------------------------------------*/
  simpsonsResource = toSignal(
    this.route.queryParamMap.pipe(
      map(params => Number(params.get('page')) || 1),
      switchMap(page => this.simpsonsService.getCharacters(page))
    ),
    { initialValue: null }
  );

  /** -------------------------------------------------------
   *  2) Total de personajes (se obtiene desde la API)
   * ------------------------------------------------------*/
  simpsonsCount = signal(0);

  /** -------------------------------------------------------
   *  3) Total de páginas (calculado)
   * ------------------------------------------------------*/
  totalPages = signal(0);

  constructor() {
    // Cada vez que simpsonsResource cambia → recalculamos stats
    effect(() => {
      const data = this.simpsonsResource();

      if (!data) return;

      // API entrega count, pages, items, etc.
      this.simpsonsCount.set(data.count ?? 0);

      const pages = Math.ceil((data.count ?? 0) / 10); // tú decides cuántos items por page
      this.totalPages.set(pages);
    });
  }
}
