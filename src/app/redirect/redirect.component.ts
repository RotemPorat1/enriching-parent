import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class RedirectComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    const { token } = this.route.snapshot.queryParams;
    // Handle the redirect
    this.authService.handleRedirect(token);
    // Navigate home
    this.router.navigateByUrl('/');
  }
}