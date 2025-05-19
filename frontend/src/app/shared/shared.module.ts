import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ThemeToggleComponent
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ThemeToggleComponent
  ]
})
export class SharedModule { }
