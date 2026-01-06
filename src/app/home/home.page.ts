import { Component, OnInit, ViewChild } from '@angular/core'
import { IonButtons, IonButton, IonIcon, 
         IonHeader, IonToolbar, IonTitle, IonContent } 
                    from '@ionic/angular/standalone'
 import { addIcons } from 'ionicons'
import { settingsOutline } from 'ionicons/icons'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ RouterModule, IonHeader, IonToolbar, IonTitle, IonContent, 
            ],
})
export class HomePage implements OnInit {
   

  constructor() {
    addIcons({
      settingsOutline
    })
  }
  ngOnInit(): void {
     
  }
  ionViewWillEnter():void {
  
  }
}
