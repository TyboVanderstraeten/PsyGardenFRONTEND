import { Component, OnInit, Input } from '@angular/core';
import { Genre } from '../genre.model';
import { GenreDataService } from '../genre-data.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  @Input() public genre: Genre;

  constructor(private _genreDataService: GenreDataService) { }

  ngOnInit() {
  }

  editGenre(genreId: Number) {
    var name = prompt("Enter name:");
    this._genreDataService.editGenre(genreId, new Genre(name))
      .subscribe();
    window.location.reload();
  }

  removeGenre(genreId: Number) {
    this._genreDataService.removeGenre(genreId)
      .subscribe();
    window.location.reload();
  }

}
