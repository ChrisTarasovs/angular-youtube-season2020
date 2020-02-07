import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
 footerMenu = [
    'Home',
    'Private Policy',
    'T&C'
  ]
  constructor() { }

  ngOnInit() {
  }

}
