import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { APP_CONFIG, APP_CONFIG_VALUE } from './app/app.config';
import { routes  } from './app/app.routes';
import { provideRouter } from '@angular/router';
bootstrapApplication(AppComponent, {
  providers: [
    { provide: APP_CONFIG, useValue: APP_CONFIG_VALUE },
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
