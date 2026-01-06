import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  private readonly HABILITAR_BORRADO_KEY:string = "HABILITAR_BORRADO"

  constructor() { }

    async habilitarBorrado():Promise<boolean> {
    const resultado = await Preferences.get({key: this.HABILITAR_BORRADO_KEY})
    return resultado.value != null && resultado.value == "1"
  }

  async setHabilitarBorrado(ordenar:boolean) {
    await Preferences.set({
      key: this.HABILITAR_BORRADO_KEY,
      value: ordenar ? "1": "0"
    })
  }
}
