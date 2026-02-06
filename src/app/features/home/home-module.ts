import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHomeContainer } from './components/app-home-container/app-home-container';
import { AppFooterContainer } from '../../core/components/app-footer-container/app-footer-container';
import { AppHeaderContainer } from '../../core/components/app-header-container/app-header-container';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [AppHomeContainer],
  imports: [
    CommonModule, AppFooterContainer, AppHeaderContainer, TranslateModule
  ],
  exports: [AppHomeContainer]
})
export class HomeModule { }
