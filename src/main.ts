import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { AppMainModule } from './app/Home/App.MainModule';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppMainModule)
  .catch(err => console.error(err));
