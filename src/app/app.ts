import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HomeModule } from './features/home/home-module';

// Declaramos PAQUETES para que no marque error de TypeScript al usar los scripts del index.html
declare var PAQUETES: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, HomeModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  protected readonly title = signal('jelpy-landing');

  constructor(private readonly translate: TranslateService) {
    // Definimos los idiomas disponibles para Jelpy
    this.translate.addLangs(['es', 'en']);

    // Establecemos el idioma por defecto
    this.translate.setDefaultLang('es');

    // Intentamos usar el idioma del navegador, si no, usamos español
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/en|es/) ? browserLang : 'es');
  }

  /**
   * Una vez que la vista carga, inicializamos las animaciones
   * que vienen en los scripts de tu index.html.
   */
  ngAfterViewInit(): void {
    if (typeof PAQUETES !== 'undefined') {
      new PAQUETES().init();
    }
  }
}