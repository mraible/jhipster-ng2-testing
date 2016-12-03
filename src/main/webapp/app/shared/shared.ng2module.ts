import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import {
    BlogSharedLibsModule,
    BlogSharedCommonModule,
    CSRFService,
    AuthService,
    AuthServerProvider,
    Base64,
    AccountService,
    StateStorageService,
    LoginService,
    LoginModalService,
    Principal,
    HasAuthorityDirective,
    HasAnyAuthorityDirective,
    JhiLoginModalComponent
} from './';

@NgModule({
    imports: [
        BlogSharedLibsModule,
        BlogSharedCommonModule
    ],
    declarations: [
        JhiLoginModalComponent,
        HasAuthorityDirective,
        HasAnyAuthorityDirective
    ],
    providers: [
        CookieService,
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        Base64,
        AuthServerProvider,
        AuthService
    ],
    entryComponents: [JhiLoginModalComponent],
    exports: [
        BlogSharedCommonModule,
        JhiLoginModalComponent,
        HasAuthorityDirective,
        HasAnyAuthorityDirective
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class BlogSharedModule {}
