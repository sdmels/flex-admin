import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'flexAdmin';
  variableFlexWidth: string;
  hideColumn: boolean;

  ngOnInit() {
    this.hideColumn = true;
    this.variableFlexWidth = '20%';
  }

  toggleHide() {
    this.hideColumn = !this.hideColumn;
  }
}
