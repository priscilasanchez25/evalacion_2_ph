import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButtons, IonButton, IonFab, IonFabButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel } from '@ionic/angular/standalone';
import { Router, RouterModule } from "@angular/router";
 import { SqliteService } from 'src/app/servicios/sqlite.service';
import { ConfiguracionService } from 'src/app/servicios/configuracion.service';
import { Cita } from 'src/app/modelo/cita';
import { CitaService } from 'src/app/servicios/cita.service';
 
@Component({
  selector: 'app-citas',
  templateUrl: './citainicial.page.html',
  styleUrls: ['./citainicial.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonFab, RouterModule,
    IonButtons, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCardContent, IonCardTitle, IonCard, IonCardHeader]
})
export class CitainicialPage implements OnInit {
  irAGestionCitas() {
    this.router.navigate(['/gestioncitas'], { replaceUrl: true });
  }

  constructor(private router:Router, private sqliteService: SqliteService, private configuracionService: ConfiguracionService, private citaService: CitaService) { }
  habilitar: any;
  cita!: Cita;

  async ngOnInit() {
    console.log("citaspage::ngOnInit - sqliteService::iniciarPlugin()")
    await this.sqliteService.iniciarPlugin()
    this.habilitar = await this.configuracionService.habilitarBorrado()
    this.cita = await this.citaService.getCitaAleatorea()
    if (this.cita==null){
      this.cita = {id:0,frase:"No existen citas", autor:"sin autor"}
    }
  }

  async borrarCita(id: number) {
    await this.citaService.borrarCita(id)
  }



}

