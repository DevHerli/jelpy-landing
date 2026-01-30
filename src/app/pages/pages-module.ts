import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home-page/home-page';
import { ComponentsModule } from '../components/components-module';

const components = [
  HomePage
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
