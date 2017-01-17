import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ActionSheetPage } from "../pages/action-sheet/action-sheet";
import { CardsPage } from "../pages/cards/cards";
import { FabPage } from "../pages/fab/fab";
import { InputPage } from "../pages/input/input";
import { ThumbnailListPage } from "../pages/list/list";
import { SlidesPage } from "../pages/slides/slides";

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ActionSheetPage,
    CardsPage,
    FabPage,
    InputPage,
    ThumbnailListPage,
    SlidesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ActionSheetPage,
    CardsPage,
    FabPage,
    InputPage,
    ThumbnailListPage,
    SlidesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
