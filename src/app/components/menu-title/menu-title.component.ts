import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-title',
  standalone: true, 
  imports: [RouterLink],
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css'] 
})
export class MenuTitleComponent { }
