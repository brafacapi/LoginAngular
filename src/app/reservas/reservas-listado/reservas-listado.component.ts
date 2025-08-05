import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ReservasApiClientService } from '../reservas-api-client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservas-listado',
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './reservas-listado.component.html',
  styleUrl: './reservas-listado.component.css'
})
export class ReservasListadoComponent {

constructor(public api: ReservasApiClientService){}

}


