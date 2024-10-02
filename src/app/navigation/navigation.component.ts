import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for directives if needed

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule], // Include CommonModule to use directives like *ngIf, *ngFor if needed
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent { }
