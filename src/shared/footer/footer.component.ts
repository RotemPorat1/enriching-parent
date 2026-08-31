import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  animateFooter = false;
  showSuperuserPopup = false;

  openSuperuserPopup() {
    this.showSuperuserPopup = true;
  }

  closeSuperuserPopup() {
    this.showSuperuserPopup = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const footerElement = document.querySelector('.footer');
    if (footerElement) {
      const rect = footerElement.getBoundingClientRect();
      const viewHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
      );
      if (rect.top <= viewHeight) {
        this.animateFooter = true;
      }
    }
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
