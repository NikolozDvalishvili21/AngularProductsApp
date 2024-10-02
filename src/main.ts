import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Ensure this is the path to your AppComponent

bootstrapApplication(AppComponent).catch(err => console.error(err));
