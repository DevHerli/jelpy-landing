import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-container',
  imports: [],
  templateUrl: './app-header-container.html',
  styleUrl: './app-header-container.scss',
  standalone: true
})
export class AppHeaderContainer {

  public currentLang: string;
  private readonly translate = inject(TranslateService);
  constructor() {

    this.currentLang = this.translate.currentLang || 'es';
  }

  public switchLang(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;

    if (lang) {
      this.translate.use(lang);
      this.currentLang = lang;
      localStorage.setItem('jelpy_lang', lang);
      console.log(`Language switched to: ${lang}`); // Log para debug en desarrollo
    }
  }


  public openLenguaje(): void {
    // Aquí podrías poner lógica para abrir un modal de idiomas personalizado
  }
}
