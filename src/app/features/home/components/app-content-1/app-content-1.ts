import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-content-1',
  templateUrl: './app-content-1.html',
  styleUrl: './app-content-1.scss',
  standalone: false
})
export class AppContent1 {
  private readonly translate = inject(TranslateService);
  public currentLang: string;

  constructor() {
    // Inicializamos el idioma actual basado en lo que el servicio tenga activo
    this.currentLang = this.translate.currentLang || 'es';
  }
}
