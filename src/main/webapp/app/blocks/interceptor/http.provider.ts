import { Injector } from '@angular/core';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { HttpInterceptor } from './http.interceptor';
import { AuthInterceptor } from './auth.interceptor';
import { AuthExpiredInterceptor } from './auth-expired.interceptor';

export const customHttpProvider = () => ({
    provide: Http,
    useFactory: (
        backend: XHRBackend,
        defaultOptions: RequestOptions,
        localStorage : LocalStorageService,
        sessionStorage : SessionStorageService,
        injector: Injector
    ) => new HttpInterceptor(
        backend,
        defaultOptions,
        [
            new AuthInterceptor(localStorage, sessionStorage),
            new AuthExpiredInterceptor(injector)
            //other interceptors can be added here
        ]
    ),
    deps: [
        XHRBackend,
        RequestOptions,
        LocalStorageService,
        SessionStorageService,
        Injector
    ]
});
