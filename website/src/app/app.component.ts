import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { AboutComponent } from './about/about.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, RouterLinkActive, NavComponent, MatGridListModule, 
    AboutComponent, MatDividerModule, MatListModule, MatCardModule, FooterComponent, ProjectsComponent,
 ContactsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';
}
