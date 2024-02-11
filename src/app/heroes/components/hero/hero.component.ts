import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 45;

  get capitalizeName():string {
    return this.name.toUpperCase();
  }

  get startCapitalizeName():string {
    return `${this.name.charAt(0).toUpperCase()}${this.name.slice(1)}`;
  }

  getHeroDescription():string {
    return `${this.name} ${this.age}`
  }

  changeNameHero():void {
    this.name = 'spiderman';
  }

  changeAgeHero():void {
    this.age = 25;
  }

  changeresetHero(): void {
    this.name = 'iroman';
    this.age = 45;
  }
}
