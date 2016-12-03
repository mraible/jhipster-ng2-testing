
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule, RootModule } from 'ui-router-ng2';
import { Ng2Webstorage, LocalStorageService, SessionStorageService } from 'ng2-webstorage';


import { BlogSharedModule } from './shared';
import { BlogAdminModule } from './admin/admin.ng2module'; //TODO these couldnt be used from barrels due to an error
import { BlogAccountModule } from './account/account.ng2module';

import { appState } from './app.state';
import { HomeComponent, homeState } from './home';
import { JhiRouterConfig } from './blocks/config/router.config';
import { localStorageConfig } from './blocks/config/localstorage.config';
import { customHttpProvider } from './blocks/interceptor/http.provider';

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent,
    errorState,
    accessdeniedState
} from './layouts';
import { HelloWorldComponent } from './helloWorld.component';


localStorageConfig();

let routerConfig = {
    configClass: JhiRouterConfig,
    useHash: true,
    states: [
        appState,
        homeState,
        errorState,
        accessdeniedState
    ]
};

@NgModule({
    imports: [
        BrowserModule,
        UIRouterModule.forRoot(routerConfig),
        Ng2Webstorage,
        BlogSharedModule,
        BlogAdminModule,
        BlogAccountModule
    ],
    declarations: [
        JhiMainComponent,
        HomeComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent,
        HelloWorldComponent
    ],
    providers: [
        ProfileService,
        { provide: Window, useValue: window },
        { provide: Document, useValue: document },
        customHttpProvider()
    ],
    bootstrap: [ JhiMainComponent ]
})
export class BlogAppModule {}
