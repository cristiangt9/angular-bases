import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/mainPage/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/addCharacter/addCharacter.component';



@NgModule({
  exports: [MainPageComponent],
  declarations: [MainPageComponent, ListComponent, AddCharacterComponent],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class DbzModule { }
