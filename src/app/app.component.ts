import { Component, OnInit } from '@angular/core';
import { Kapitel } from './kapitel';
import { Kapiteln } from './kapitel-list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  })
  
  
export class AppComponent implements OnInit {
  kapitelList: Kapitel[] = Kapiteln;
  kapitelSelected: Kapitel|undefined;
  ngOnInit() {
   console.table(this.kapitelList);
   // Diese Kode kann nicht mehr verwendet werden
   //this.selectKapitel(this.kapitelList[0])
  }
  // number wird hier case 
  //selectKapitel(event: MouseEvent){
   
   //const index: number = +(event.target as HTMLInputElement).value;
   selectKapitel(kapitelid: String){ 
    //const id = +kapitelid;kapitelSelected
    const kapitel: Kapitel|undefined = this.kapitelList.find(kapitel => kapitel.id == +kapitelid )
    if(kapitel){
      console.log(`Sie haben auf Kapitel ` + (kapitel.name)+ ` geklickt`  ) ;  
      this.kapitelSelected = kapitel;
    } else {
    console.log(`Ihr Kapitel existiert nicht!`);
    this.kapitelSelected = kapitel;
    }
     
  }
}
