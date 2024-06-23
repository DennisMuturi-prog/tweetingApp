import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app'
import { environment } from '../environments/environment';
import {getAuth, provideAuth} from '@angular/fire/auth'
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideAnimationsAsync(),
      provideFirebaseApp(()=>initializeApp(environment.firebaseConfig)),
      provideAuth(()=>getAuth()),
      provideFirestore(()=>getFirestore())
  ]
};
