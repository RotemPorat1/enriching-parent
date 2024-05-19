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
  footerTxt =
    ':לשאלות, הערות, הארות הנכם מוזמנים לפנות למשרד משאבי האנוש החטיבתי או לתיבה';
  linkTxt = '> תקשורת רפאל <';
  animateFooter = false;

  //add class animation to footer when the user scroll down to the footer viewPort
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
}
