import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ButtonContext } from './../../interfaces/button-context.interface';

import { environment } from '../../../environments/environment';

import { HttpClient } from '@angular/common/http';

import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-context',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  templateUrl: './context.component.html',
  styleUrl: './context.component.scss',
})
export class ContextComponent {
  http = inject(HttpClient);

  apiUrl = environment.apiUrl;
  contextArr: ButtonContext[] = [
    // {
    //   id: 'div1',
    //   url: `/assets/images/1_1.png`,
    //   action: () => this.openWebPresentation(),
    // },
    {
      id: 'div1',
      url: '/assets/images/1_2.png',
      toolTip: 'מצגת להפעלה ישירה או הורדה למחשב נייד, ביתי או כיתתי',
      action: () =>
        this.openPowerPointPresentation(
          'https://rafaelcoil.sharepoint.com/:p:/r/DocLib26/%D7%9E%D7%A2%D7%A8%D7%9A%20%D7%90%27-%D7%93%27/%D7%9E%D7%A6%D7%92%D7%AA%20%D7%94%D7%95%D7%A8%D7%94%20%D7%9E%D7%A2%D7%A9%D7%99%D7%A8_%D7%90-%D7%93.pptx?d=w39f5763c752f47499730073a743c25dc&csf=1&web=1&e=eiCZVI'
        ),
    },
    {
      id: 'div2',
      url: '/assets/images/1_3.png',
      toolTip: '.דפים להדפסה: איור טנק ומפה',
      action: () => this.downloadPDF('assets/a-d/work_page'),
    },
    {
      id: 'div3',
      url: '/assets/images/1_4.png',
      action: () => this.downloadPDF(`assets/a-d/parent_guide`),
    },
    // {
    //   id: 'div3',
    //   url: '/assets/images/2_1.png',
    //   action: () => this.openWebPresentation(),
    // },
    {
      id: 'div4',
      url: '/assets/images/2_2.png',
      toolTip: 'מצגת להפעלה ישירה או הורדה למחשב נייד, ביתי או כיתתי',
      action: () =>
        this.openPowerPointPresentation(
          'https://rafaelcoil.sharepoint.com/:p:/r/DocLib26/%D7%9E%D7%A2%D7%A8%D7%9A%20%D7%94%27-%D7%95%27/%D7%9E%D7%A6%D7%92%D7%AA%20%D7%94%D7%95%D7%A8%D7%94%20%D7%9E%D7%A2%D7%A9%D7%99%D7%A8_%D7%94-%D7%95.pptx?d=w345b7da718ac4081a22889983a1669f7&csf=1&web=1&e=MsQwDW'
        ),
    },
    {
      id: 'div5',
      url: '/assets/images/2_3.png',
      toolTip: 'דפים להדפסה: איור טנק ומפה',
      action: () => this.downloadPDF('assets/e-f/work_page'),
    },
    {
      id: 'div6',
      url: '/assets/images/2_4.png',
      action: () => this.downloadPDF('assets/e-f/parent_guide'),
    },
    {
      id: 'div7',
      url: '/assets/images/3_1.png',
      toolTip: 'שלבים לבניית משגר ניסיון והפעלתו',
      action: () => this.downloadPDF('assets/launcher_instructions'),
    },
    {
      id: 'div8',
      url: '/assets/images/3_2.png',
      toolTip: 'באנר אותו תוכלו להלביש על תמונה כיתתית שתצלמו למזכרת',
      action: () => this.downloadImage(`assets/banner.png`),
    },
    {
      id: 'div9',
      url: '/assets/images/3_3.png',
      toolTip: 'שלבים ליצירת תמונת מזכרת ממותגת',
      action: () => this.downloadImage(`assets/banner_usage_instructions.jpg`),
    },
    {
      id: 'div10',
      url: '/assets/images/3_4.png',
      action: () => this.sendWhatsAppInvitation(),
    },
    {
      id: 'div11',
      url: '/assets/images/3_5.png',
      toolTip: 'במידה ונותר זמן תוכלו להשתמש באתגר הטריוויה',
      action: () => console.log('empty for now'),
    },
    {
      id: 'div12',
      url: '/assets/images/3_6.png',
      toolTip: 'מסמך מתעדכן של תשובות לשאלות שאתם שאלתם',
      action: () => console.log('empty for now'),
    },
  ];

  //slice the array to four arrays array for each column
  rightColumnContext: ButtonContext[] = this.contextArr.slice(0, 3);
  middleRightColumnContext: ButtonContext[] = this.contextArr.slice(3, 6);
  middleLeftColumnContext: ButtonContext[] = this.contextArr.slice(6, 9);
  leftColumnContext: ButtonContext[] = this.contextArr.slice(9, 12);

  openWebPresentation() {
    const url = '/assets/presentation/index.html';
    window.open(url, '_blank');
  }

  downloadPDF(pdfUrl: string) {
    this.http
      .get(`${this.apiUrl}/${pdfUrl}.pdf`, { responseType: 'blob' })
      .subscribe((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = pdfUrl.split('/').pop() + '.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      });
  }

  downloadImage(imageUrl: string) {
    const url = `${this.apiUrl}/${imageUrl}`; // Construct the URL
    this.http.get(url, { responseType: 'blob' }).subscribe((blob) => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = imageUrl.split('/').pop(); // Extract the filename from the URL
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(objectUrl);
    });
  }

  // openPdf(pdfUrl: string) {
  //   const url = `${this.apiUrl}/${pdfUrl}.pdf`; // Construct the URL
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.target = '_blank';
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  // }
  // openImg(imgUrl: string) {
  //   const url = `${this.apiUrl}/${imgUrl}`; // Construct the URL
  //   console.log(url);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.target = '_blank';
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  // }

  sendWhatsAppInvitation() {
    let message = encodeURIComponent('ברוכים הבאים להורה מעשיר');
    let url = `https://wa.me/?text=${message}`;
    window.open(url, '_blank'); // Open WhatsApp URL in new window/tab
  }
  openPowerPointPresentation(url: string) {
    window.open(url, '_blank');
  }
}
