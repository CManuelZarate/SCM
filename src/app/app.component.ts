import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SupplyChainManagement';
  constructor(private router: Router ) { }
  ruta(){
    
    
    if(this.router.url=== "/"){
      return false;
    }else{
      return true;
    }
  }
}
