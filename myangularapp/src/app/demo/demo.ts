// import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  imports: [],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {
  musicList: any = [];
  // displayValue: any = 0;
  // displayValueTwo: any = 0;
  constructor() {
    this.getMusicList();
    // this.displayValue = this.musicList[0].id;
    // this.displayValueTwo = this.musicList[1].id;
    // console.log(
    //   `This is my Firstnum: ${this.displayValue}, This is my secound value: ${this.displayValueTwo} `,
    // );
  }
  getMusicList() {
    this.musicList = [
      {
        id: 1,
        title: 'Midnight City',
        artist: 'M83',
        genre: 'Synthpop',
        coverUrl: 'https://picsum.photos/id/225/200/200',
        isFavorite: false,
      },
      {
        id: 2,
        title: '',
        artist: 'The Weeknd',
        genre: 'R&B',
        coverUrl: 'https://picsum.photos/id/101/200/200',
        isFavorite: true,
      },
      {
        id: 3,
        title: 'Levitating',
        artist: 'Dua Lipa',
        genre: 'Pop',
        coverUrl: 'https://picsum.photos/id/152/200/200',
        isFavorite: false,
      },
      {
        id: 4,
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        genre: 'Rock',
        coverUrl: 'https://picsum.photos/id/281/200/200',
        isFavorite: true,
      },
    ];
  }
}
