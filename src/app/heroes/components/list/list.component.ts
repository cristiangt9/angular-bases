import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesName: string[] = [
    'Spiderman',
    'Iroman',
    'Hulk',
    'She Hulk',
    'Thor'
  ];

  public lastHeroe: string|undefined = '';

  removeLastHero(): void {
    this.lastHeroe = this.heroesName.length ? this.heroesName.pop(): '';
  }
}
