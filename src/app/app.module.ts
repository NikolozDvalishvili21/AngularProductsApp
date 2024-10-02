import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Optional: if you need common directives

@NgModule({
  declarations: [
    // No declarations for standalone components
  ],
  imports: [
    BrowserModule,
    CommonModule, // Optional: only if you have shared directives
  ],
  providers: [] // Add any services you might need here
})
export class AppModule { }
