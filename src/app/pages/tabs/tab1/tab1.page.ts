import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../../components/explore-container/explore-container.component';

@Component({
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> Tab 1 </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <div
        style="display: flex; flex-direction: column; gap:10px; padding:10px"
      >
        <a routerLink="/auth/login" routerLinkActive="active">/auth/login</a>
        <a routerLink="/auth/sign-up" routerLinkActive="/auth/sign-up"
          >/auth/sign-up</a
        >
      </div>

      <div
        style="display: flex; flex-direction: column; gap:10px; padding:10px"
      >
        <a routerLink="/tabs/tab2" routerLinkActive="active">/tabs/tab2</a>
      </div>

      <div
        style="display: flex; flex-direction: column; gap:10px; padding:10px"
      >
        <a routerLink="/onboarding" routerLinkActive="active">/onboarding</a>
      </div>

      <app-explore-container name="Tab 1 page"></app-explore-container>
    </ion-content>
  `,
})
export class Tab1Page implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {}
  ngOnDestroy() {}

  ionViewWillEnter() {
    console.log('🚀 Tab1 ~ ionViewWillEnter');
  }

  ionViewWillLeave() {
    console.log('🚀 Tab1 ~ ionViewWillLeave');
  }
}
