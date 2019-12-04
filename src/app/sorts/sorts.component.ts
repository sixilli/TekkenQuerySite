import { Component, OnInit } from '@angular/core';
import data from '../data/t7_frames.json';

@Component({
  selector: 'app-sorts',
  templateUrl: './sorts.component.html',
  styleUrls: ['./sorts.component.css']
})

export class SortsComponent implements OnInit {

  characterData = data;

  constructor() { }


  ngOnInit() {
  }


}
