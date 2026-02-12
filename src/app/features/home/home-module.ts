import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHomeContainer } from './components/app-home-container/app-home-container';
import { AppFooterContainer } from '../../core/components/app-footer-container/app-footer-container';
import { AppHeaderContainer } from '../../core/components/app-header-container/app-header-container';
import { TranslateModule } from '@ngx-translate/core';
import { AppJelpyBenefits } from './components/app-jelpy-benefits/app-jelpy-benefits';
import { AppSection1 } from './components/app-section-1/app-section-1';
import { AppContent1 } from './components/app-content-1/app-content-1';
import { AppFeatures } from "./components/app-features/app-features";
import { AppHowDoesItWork } from './components/app-how-does-it-work/app-how-does-it-work';
import { AppIntroVideo } from "./components/app-intro-video/app-intro-video";
import { AppJelpyBenefits2 } from "./components/app-jelpy-benefits-2/app-jelpy-benefits-2";
import { AppContent2 } from "./components/app-content-2/app-content-2";
import { AppBrands } from "./components/app-brands/app-brands";
import { AppFaq } from "./components/app-faq/app-faq";
import { AppContent3 } from "./components/app-content-3/app-content-3";
import { AppReviews } from "./components/app-reviews/app-reviews";
import { AppContactUs } from "./components/app-contact-us/app-contact-us";



@NgModule({
  declarations: [AppHomeContainer, AppJelpyBenefits, AppBrands, AppContactUs, AppContent1, AppContent2, AppContent3, AppFaq, AppFeatures, AppHowDoesItWork, AppIntroVideo, AppJelpyBenefits2, AppReviews, AppSection1], //DEclaraciones son los componentes propios del modulo, 
  imports: [
    //Modulos
    CommonModule,
    TranslateModule,
    //Standalone
    AppFooterContainer,
    AppHeaderContainer,
  ],
  exports: [AppHomeContainer] // Son los compopnentes que otros modulos pueden hacer uso al importar
})
export class HomeModule { }
