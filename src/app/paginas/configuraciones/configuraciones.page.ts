import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConfiguracionComponent } from "src/app/componentes/configuracion/configuracion.component";

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ConfiguracionComponent]
})
export class ConfiguracionesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
