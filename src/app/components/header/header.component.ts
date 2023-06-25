import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router:Router){}
pressCart(){
  console.log('asdf')
  this.router.navigate(['/cart']);

}
pressFavorites(){
  console.log('asdf')
  this.router.navigate(['/favorites']);

}
pressUserPage(){
  console.log('asdf')
  this.router.navigate(['/user-page']);

}
}
