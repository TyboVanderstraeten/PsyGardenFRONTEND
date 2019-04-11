import { Component, OnInit, Input } from '@angular/core';
import { Genre } from 'src/app/models/genre.model';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  @Input() public genre: Genre;

  constructor() { }

  ngOnInit() {
  }

}
