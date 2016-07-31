import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
    // Initialize Firebase app
    defaultFirebase({
      apiKey: "<your-key>",
      authDomain: "<your-project-authdomain>",
      databaseURL: "<your-database-URL>",
      storageBucket: "<your-storage-bucket>"
    })
  ]);
