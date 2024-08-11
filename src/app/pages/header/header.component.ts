import { Component, HostListener } from '@angular/core';

import { HeaderImg } from '../../interfaces/header.interface';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  headerImgArr: HeaderImg[] = [
    {
      class: 'image-header kids1',
      url: '/assets/images/KIDS.png',
      alt: 'KIDS 1',
    },
    {
      class: 'image-header big-title',
      url: '/assets/images/BIG TITLE.png',
      alt: 'TITLE',
    },
    {
      class: 'image-header kids2',
      url: '/assets/images/KIDS2.png',
      alt: 'KIDS 2',
    },
  ];
  subHeaderImg: HeaderImg = {
    class: 'sub-Header',
    url: '/assets/images/MAIN TEXT.png',
    alt: 'MAIN HEADER TEXT',
  };
  textRows: { text: string; isBold: boolean }[] = [
    {
      text: '!הוזמנתם לכיתה של הילדים לספר מה אנחנו עושים ברפאל? נפלא',
      isBold: false,
    },
    {
      text: 'כאן תמצאו את כל מה שצריך כדי להעביר חוויה לימודית ייחודית ובלתי נשכחת',
      isBold: false,
    },
    { text: '?איפה מתחילים', isBold: true },
    {
      text: 'תורידו לכם את כל החומרים הנדרשים - את המצגת, דפי העבודה והחוברת המותאמת לשכבת הגיל, כמו גם את החומרים הכלליים: באנר והזמנת הווטסאפ',
      isBold: false,
    },
    {
      text: 'המדריך להורה הוא המקום הכי טוב להתחיל בו כדי להבין איך מעבירים את הפעילות, במה נדרש להצטייד ואיך כל מה שהורדם מתחבר',
      isBold: false,
    },
    {
      text: 'חדש - אפשרות להפעיל את המצגת בפורמט ווב ישירות מהדפדפן',
      isBold: true,
    },
  ];

  isDesktop: boolean = true;
  //check if the user use desktop or mobile
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isDesktop = window.innerWidth > 768;
  }
}
