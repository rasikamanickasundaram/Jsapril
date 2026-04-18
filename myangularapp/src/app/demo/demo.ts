import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Interface
export interface Music {
  id: number;
  title: string;
  artist: string;
  genre: string;
  coverUrl: string;
  isFavorite: boolean;
}

@Component({
  selector: 'app-demo',
  imports: [FormsModule],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {
  musicList: Music[] = [];
  inputValue: string = '';
  finalList: Music[] = [];

  constructor() {
    this.getMusicList();
  }

  getMusicList(): void {
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

    this.finalList = [...this.musicList];
  }

  searchMusic(): void {
    if (!this.inputValue) {
      this.finalList = [...this.musicList];
    } else {
      this.finalList = this.musicList.filter(
        (musicItem: Music) =>
          musicItem. 
        title.toLowerCase().includes(this.inputValue.toLowerCase())
      );
    }
  }
}