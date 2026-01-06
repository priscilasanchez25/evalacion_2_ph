import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent, IonItem, IonLabel, IonInput, IonButton, IonText, IonIcon } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CitaService } from 'src/app/servicios/cita.service';
import { Cita } from 'src/app/modelo/cita';

@Component({
  selector: 'app-nuevacita',
  templateUrl: './nuevacita.component.html',
  styleUrls: ['./nuevacita.component.scss'],
  standalone: true,
  imports: [IonText, FormsModule, IonButton, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard],
})
export class NuevacitaComponent implements OnInit {
  cita: Cita = { id: 0, frase: "", autor: "" };
  constructor(private citaService: CitaService) { }

  async ngOnInit() {
  }

  async onCrearCita() {

    await this.citaService.agregarCita(this.cita);
    this.onCitaCreada.emit(this.cita.frase)
  }

  @Output() onCitaCreada = new EventEmitter<string>()

}
