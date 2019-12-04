import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'drawers-child',
  templateUrl: 'drawers.component.html',
  styleUrls: ['drawers.component.css'],
})

export class DrawersComponent {
  characters = new FormControl();
  characterList: string[] = ['Akuma', 'Alisa', 'Anna', 'Armor King', 'Asuka', 'Bob',
                            'Claudio', 'Devil Jin', 'Dragunov', 'Eddy', 'Eliza', 'Feng',
                            'Geese', 'Gigas', 'Heihachi', 'Hwoarang', 'Jack-7', 'Jin',
                            'Josie', 'Julia', 'Katarina', 'Kazumi', 'Kazuya', 'King',
                            'Kuma', 'Lars', 'Law', 'Lee', 'Lei', 'Leo', 'Lili',
                            'Lucky Chloe', 'Marduck', 'Master Raven', 'Miguel',
                            'Negan', 'Nina', 'Noctis', 'Paul', 'Shaheen', 'Steve',
                            'Xiaoyu', 'Yoshimitsu'];

  //sorts = new FormControl();
  //sortList: string[] = ['Default', 'Low to High: Block Frame', 'Low to High: Hit Frame', 'Low to High: Counter-Hit Frame',
  //                      'High to Low: Block Frame', 'High to Low: Hit Frame', 'High to Low: Counter-Hit Frame']

  @Output() update = new EventEmitter<string>();

  updateFrames(c: string) {
    this.update.emit(c)
  }
}