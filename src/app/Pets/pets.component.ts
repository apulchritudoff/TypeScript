import { Component, OnInit } from '@angular/core';
import { Pets } from '../Pets';

import { PETS } from '../mock-pets';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets = PETS;

  selectedPet?: Pets;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(pet: Pets): void {
    this.selectedPet = pet;
  }


}
