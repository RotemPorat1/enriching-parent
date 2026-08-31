import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ButtonContext } from './../../interfaces/button-context.interface';

import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-context',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  templateUrl: './context.component.html',
  styleUrl: './context.component.scss',
})
export class ContextComponent {
  contextArr: ButtonContext[] = [
    {
      id: 'div1',
      url: 'assets/images/1_2.png',
      toolTip: 'מצגת להורדה ישירה למחשב',
      action: () => this.downloadFile('a-d/a-d_presentation.pptx'),
    },
    {
      id: 'div2',
      url: 'assets/images/1_3.png',
      toolTip: 'דפים להורדה והדפסה - איור טנק ומפה',
      action: () => this.downloadFile('a-d/a-d_work-page.pdf'),
    },
    {
      id: 'div3',
      url: 'assets/images/1_4.png',
      toolTip: 'המקום להתחיל בו, מערך שיעור מפורט להורדה והדפסה',
      action: () => this.downloadFile('a-d/a-d_parent-guide.pdf'),
    },
    {
      id: 'div4',
      url: 'assets/images/2_2.png',
      toolTip: 'מצגת להורדה ישירה למחשב',
      action: () => this.downloadFile('e-f/e-f_presentation.pptx'),
    },
    {
      id: 'div5',
      url: 'assets/images/2_3.png',
      toolTip: 'דפים להורדה והדפסה - איור טנק ומפה',
      action: () => this.downloadFile('e-f/e-f_work-page.pdf'),
    },
    {
      id: 'div6',
      url: 'assets/images/2_4.png',
      toolTip: 'המקום להתחיל בו, מערך שיעור מפורט להורדה והדפסה',
      action: () => this.downloadFile('e-f/e-f_parent-guide.pdf'),
    },
    {
      id: 'div7',
      url: 'assets/images/3_1.png',
      toolTip: 'סרטון שלב אחר שלב לבניית משגר והפעלתו',
      action: () =>
        this.openInNewTab(
          'https://drive.google.com/file/d/1Kipldqc0jQC33uIAQme6DnSu1F4NuP9q/view'
        ),
    },
    {
      id: 'div8',
      url: 'assets/images/3_2.png',
      toolTip: 'באנר אותו תוכלו להלביש על תמונה כיתתית שתצלמו למזכרת',
      action: () => this.downloadFile('general/general_banner.png'),
    },
    {
      id: 'div9',
      url: 'assets/images/3_3.png',
      toolTip: 'שלבים ליצירת תמונת מזכרת ממותגת',
      action: () => this.downloadFile('general/banner-use.jpg'),
    },
    {
      id: 'div10',
      url: 'assets/images/3_4.png',
      toolTip: 'הזמנה מעוצבת אותה תוכלו לשלוח בוואטסאפ הכיתתי לקראת המפגש',
      action: () => this.downloadFile('general/general_whatsapp.jpg'),
    },
    {
      id: 'div11',
      url: 'assets/images/3_5.png',
      toolTip: 'דף עבודה להורדה, שלב בונוס במידה ונותר לכם זמן',
      action: () => this.downloadFile('general/general_trivia.pdf'),
    },
    {
      id: 'div12',
      url: 'assets/images/3_6.png',
      toolTip: 'מסמך מתעדכן של תשובות לשאלות שאתם שאלתם',
      action: () => this.downloadFile('general/general_qa.pdf'),
    },
  ];

  rightColumnContext: ButtonContext[] = this.contextArr.slice(0, 3);
  middleRightColumnContext: ButtonContext[] = this.contextArr.slice(3, 6);
  middleLeftColumnContext: ButtonContext[] = this.contextArr.slice(6, 9);
  leftColumnContext: ButtonContext[] = this.contextArr.slice(9, 12);

  downloadFile(path: string) {
    const url = 'assets/' + path;
    const a = document.createElement('a');
    a.href = url;
    a.download = path.split('/').pop()!;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  openInNewTab(url: string) {
    window.open(url, '_blank');
  }
}
