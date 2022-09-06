import { Component, OnInit } from '@angular/core';
import { Kapiteln } from './kapitel-list';
@Component({
  selector: 'app-root',
  template: `
  
      <h1>
        Struktur der Vorlesung
      </h1> `
  })
  
  
export class AppComponent implements OnInit {
  kapitelList = Kapiteln;
  
  ngOnInit() {
   console.table(this.kapitelList);
  }
}
