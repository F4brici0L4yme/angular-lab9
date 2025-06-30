import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import appRouting from './app/app-routing/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [appConfig.providers, appRouting],
});
