import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges{
  title = 'BananasApp';
  ngOnInit(){

  }
  ngOnChanges(props){
    console.log('props', props)
  }
}
