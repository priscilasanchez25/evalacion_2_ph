import { Injectable } from '@angular/core';
import { SqliteService } from './sqlite.service';
import { Cita } from '../modelo/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(
    private sqliteServicio: SqliteService
  ) { }

  async agregarCita(cita: Cita) {
    this.sqliteServicio.agregarCita(cita)
  }

  async getCitas(): Promise<Cita[]> {
    return this.sqliteServicio.getCitas()
  }

  async getCitaAleatorea(): Promise<Cita> {
    const citas = await this.getCitas();

    if (!citas || citas.length === 0) {
      throw new Error('No hay citas disponibles');
    }

    // Índice aleatorio entre 0 y length-1
    const indiceAleatorio = Math.floor(Math.random() * citas.length);

    return citas[indiceAleatorio];
  }

  async borrarCita(id: number) {
    if (id != undefined) {
      await this.sqliteServicio.borrarCita(id)
    }
  }
}
