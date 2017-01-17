import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ActionSheetPage } from "../pages/action-sheet/action-sheet";
import { CardsPage } from "../pages/cards/cards";
import { FabPage } from "../pages/fab/fab";
import { InputPage } from "../pages/input/input";
import { ThumbnailListPage } from "../pages/list/list";
import { SlidesPage } from "../pages/slides/slides";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'Action Sheet', component: ActionSheetPage },
      { title: 'Cards', component: CardsPage },
      { title: 'FAB', component: FabPage },
      { title: 'Input', component: InputPage },
      { title: 'List', component: ThumbnailListPage },    
      { title: 'Slides', component: SlidesPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
