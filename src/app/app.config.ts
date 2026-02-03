import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/**
 * Olvida el 'new TranslateHttpLoader'. 
 * En versiones nuevas, si la clase pide un token, es mejor 
 * instanciarla pasando los parámetros que espera el constructor moderno.
 */
export function HttpLoaderFactory(http: HttpClient) {
  // Pasamos un objeto de configuración vacío si es necesario, 
  // pero la clave es que HttpClient sea el único parámetro real si la firma cambió.
  return new TranslateHttpLoader(http, './i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'es',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    )
  ]
};