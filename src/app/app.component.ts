import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  user_rating = signal<number>(4);
  rating_type = signal<number>(0); // 0 : STARS ; 1: THUMBS

  empty_icon = computed(()=> {
    return this.rating_type() === 0 ? 'star_empty.png' : 'thumb_empty.png';
  });


  filled_icon = computed(()=> {
    return this.rating_type() === 0 ? 'star_filled.png' : 'thumb_filled.png';
  });

  title = 'Simple rating app';

  controlDown: string = "arrow_left.png";
  controlUp: string = "arrow_right.png";

  constructor(){
    effect(() => {
      console.log('user rating has changed to : ', this.user_rating());   
      console.log('rating type has changed to : ', this.rating_type());   
    });
  }


  chooseRating(index: number) : void {
    this.user_rating.set(index + 1);
  }

  rateUp() {
    this.user_rating.update((val) => val === 5 ? 5 : val + 1);
  }
  rateDown() {
    this.user_rating.update((val) => val === 1 ? 1 : val - 1);
  }

  
}
