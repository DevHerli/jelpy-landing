import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home-page/home-page';
import { ComponentsModule } from '../components/components-module';
import { TranslateModule } from '@ngx-translate/core';
import { AppHeaderContainer } from "../core/components/app-header-container/app-header-container";
import { AppFooterContainer } from "../core/components/app-footer-container/app-footer-container";

const components = [
  HomePage
];

@NgModule({
  declarations: [...components],
  exports: [...components, TranslateModule],
  imports: [
    CommonModule,
    ComponentsModule,
    TranslateModule,
    AppHeaderContainer,
    AppFooterContainer
  ]
})
export class PagesModule { }
