import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonGrid, IonRow, IonCol, IonItem, IonList, IonToggle, ToggleChangeEventDetail } from "@ionic/angular/standalone";
import { IonToggleCustomEvent } from '@ionic/core';
import { ConfiguracionService } from 'src/app/servicios/configuracion.service';
 
@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.scss'],
  standalone: true,
  imports: [FormsModule, IonToggle, IonList, IonItem, IonCardContent, IonCardHeader, IonCardTitle, IonCard],
})
export class ConfiguracionComponent implements OnInit {


  habilitarBorrado: any;

  constructor(private configuracionService: ConfiguracionService) { }

  async ngOnInit() {
        console.log("ConfiguracionComponent::ngOnInit")

    this.habilitarBorrado = await this.configuracionService.habilitarBorrado()
  }

    ionChange($event: IonToggleCustomEvent<ToggleChangeEventDetail<any>>) {
    this.configuracionService.setHabilitarBorrado(this.habilitarBorrado)
  }


}
