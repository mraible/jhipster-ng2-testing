import { NgModule } from '@angular/core';
import { MissingTranslationHandler } from 'ng2-translate/ng2-translate';

import {
    BlogSharedLibsModule,
    TruncateCharactersPipe,
    TruncateWordsPipe,
    CapitalizePipe,
    FilterPipe,
    OrderByPipe,
    JhiTranslate,
    JhiMissingTranslationHandler,
    JhiLanguageService,
    FindLanguageFromKeyPipe,
    KeysPipe,
    MaxbytesValidator,
    MinbytesValidator,
    ShowValidationDirective,
    JhiItemCountComponent,
    alertServiceProvider,
    JhiAlertComponent,
    JhiAlertErrorComponent,
    PaginationUtil,
    ParseLinks,
    DataUtils,
    DateUtils,
    EventManager
} from './';

@NgModule({
    imports: [
        BlogSharedLibsModule
    ],
    declarations: [
        TruncateCharactersPipe,
        TruncateWordsPipe,
        OrderByPipe,
        FilterPipe,
        CapitalizePipe,
        KeysPipe,
        JhiTranslate,
        FindLanguageFromKeyPipe,
        JhiAlertComponent,
        JhiAlertErrorComponent,
        JhiItemCountComponent,
        MaxbytesValidator,
        MinbytesValidator,
        ShowValidationDirective
    ],
    providers: [
        JhiLanguageService,
        { provide: MissingTranslationHandler, useClass: JhiMissingTranslationHandler },
        alertServiceProvider(),
        PaginationUtil,
        ParseLinks,
        DataUtils,
        DateUtils,
        EventManager
    ],
    exports: [
        BlogSharedLibsModule,
        TruncateCharactersPipe,
        TruncateWordsPipe,
        OrderByPipe,
        FilterPipe,
        CapitalizePipe,
        KeysPipe,
        JhiTranslate,
        FindLanguageFromKeyPipe,
        JhiAlertComponent,
        JhiAlertErrorComponent,
        JhiItemCountComponent,
        MaxbytesValidator,
        MinbytesValidator,
        ShowValidationDirective
    ]
})
export class BlogSharedCommonModule {}
