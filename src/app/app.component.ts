import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(() => {
      this.actualGames = [{
        name: 'Gears of War 5',
        price: 800,
        release: new Date('2019-09-14')
      },
      {
        name: 'GTA V',
        price: 1000,
        release: new Date()
      }]
    },500);
  }

  actualGames;

  newGames = []

  commonCharacterCount(s1: string, s2:string): number {
    // s1 = "aabcc" and s2 = "adcaa
    let count = 0;
      for(let f=0;f<s1.length;f++){
        for(let c=0;c<s2.length;c++){
          if(s1[f]==s2[c]){
            count++
            break;
        }
        }
      }
    return  count;
  }
 
}
