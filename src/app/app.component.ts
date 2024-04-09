import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./modules/components/nav-bar/nav-bar.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { CarroselComponent } from './modules/components/carrosel/carrosel.component';
import { FormularioComponent } from './modules/components/formulario/formulario.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, NavBarComponent, MatToolbarModule, MatIconModule, MatCardModule, CarroselComponent, FormularioComponent ]
})
export class AppComponent {
  title = 'projeto-ingles';
}
