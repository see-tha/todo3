import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo3';
  
  list:any[]=[];
  
  EnterSubmit(item:String,bo:any)
    {
      
      if(item!="")
this.list.push({name:item});
bo.value=""

}
  remove(i:number)
  {
this.list.splice(i,1);
  }


}
