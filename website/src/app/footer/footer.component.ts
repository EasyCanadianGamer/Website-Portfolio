import { Component, OnInit} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent  implements OnInit {
  logoUrl = '../assets/images/logo.png';
  constructor() { }
  ngOnInit(): void {
    
  }

}
