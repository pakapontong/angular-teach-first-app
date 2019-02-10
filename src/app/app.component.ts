import { Component } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Card[] = []; //เป็น array ของ card

  get sorted(): Card[]{
    console.log('access');
    return this.cards.sort( (a, b) => b.votes - a.votes);

  }


  onclick(firstname:HTMLInputElement,lastname:HTMLInputElement){
    //console.log(firstname.value+" "+lastname.value)
    const card = new Card(firstname.value,lastname.value,0);
    this.cards.push(card); //.push ยัดค่าไว้ใน array ค่าจะไปต่อท้าย 
    console.log(this.cards);
    firstname.value = '';
    lastname.value = '';
  }
}
