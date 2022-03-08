import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'essity-demo1';
  public ratingList:Array<any> = 
  [
    {class:'classRed'},
 
    {class:'classWhite'},
    {class:'classGreen'},
    {class:'classBlack'},
    {class:'classYellow'},
  ]
  public sizes:Array<any> = [
    {sizeDescription:'This is the price for XL', price:'$ 4.6' ,value:true},
    {sizeDescription:'This is the price for XXL', price:'$ 7.6' ,value:false},

  ]
}
