import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  openPdf() {
    window.open("./assets/CVPDF.pdf", "_blank");
  }
  goToSite() {
    window.open('https://portafolio-manuel-app.vercel.app/', '_blank');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
