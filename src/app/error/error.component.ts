import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, RouterModule],
})
export class ErrorComponent {
  router = inject(Router);

  constructor() {
    this.handleRefreshEvent();
  }

  handleRefreshEvent() {
    this.router.events
      .pipe(
        // Filter only navigation end events
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        ),
        filter(
          (event) => event.id === 1 && event.url === event.urlAfterRedirects
        )
      )
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
      });
  }
}
