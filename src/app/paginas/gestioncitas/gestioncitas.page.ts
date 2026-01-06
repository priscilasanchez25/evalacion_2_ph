import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NuevacitaComponent } from "src/app/componentes/nuevacita/nuevacita.component";
import { SqliteService } from 'src/app/servicios/sqlite.service';
import { ColeccioncitasComponent } from "src/app/componentes/coleccioncitas/coleccioncitas.component";
import { CitaService } from 'src/app/servicios/cita.service';
import { Cita } from 'src/app/modelo/cita';
@Component({
  selector: 'app-gestioncitas',
  templateUrl: './gestioncitas.page.html',
  styleUrls: ['./gestioncitas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ColeccioncitasComponent, NuevacitaComponent]
})
export class GestioncitasPage implements OnInit {
  listaCitas:Cita[]=[]

  async actualizarLista($event: string) {
if($event!=null){
 this.listaCitas = await this.citaServicio.getCitas()
  }
}

  constructor(private citaServicio:CitaService, private sqliteService:SqliteService) { }

  async ngOnInit() {
     console.log("ListaDeComprasComponent::ngOnInit - DbService::iniciarPlugin()")    
    await this.sqliteService.iniciarPlugin() 
  }

}
