import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonItem,
  IonLabel,
  IonList, IonButton, IonIcon } from "@ionic/angular/standalone";

import { CitaService } from 'src/app/servicios/cita.service';
import { Cita } from 'src/app/modelo/cita';
import { SqliteService } from 'src/app/servicios/sqlite.service';

@Component({
  selector: 'app-coleccioncitas',
  templateUrl: './coleccioncitas.component.html',
  styleUrls: ['./coleccioncitas.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, CommonModule, IonList, IonLabel, IonItem],
})
export class ColeccioncitasComponent implements OnInit {

  
    
   @Input() listaCitas: Cita[] = [];

  constructor(
    private citaService: CitaService,
    private sqliteService: SqliteService
  ) {}

  async ngOnInit() {
    await this.sqliteService.iniciarPlugin();
    await this.actualizar();
  }

  async borrarCita(id: number) {
    await this.citaService.borrarCita(id);
    console.log("Eliminar ID: ",id)
    await this.actualizar();
  }

   async actualizar() {
    this.listaCitas = await this.citaService.getCitas();
  }
}
