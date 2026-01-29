import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPruebaCard } from './cards/app-prueba-card/app-prueba-card';
import { AppMainContainer } from './containers/app-main-container/app-main-container';
import { PagesModule } from '../pages/pages-module';
import { AppIconfontGrid } from './app-iconfont-grid/app-iconfont-grid';

const components = [
  AppPruebaCard,
  AppMainContainer,
  AppIconfontGrid
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule

  ]
})
export class ComponentsModule { }
