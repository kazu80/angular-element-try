import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HelloComponent} from './hello/hello.component';
import { FooComponent } from './foo/foo.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HelloComponent,
        FooComponent
    ],
    bootstrap: [AppComponent],
    entryComponents: [HelloComponent]
})
export class AppModule { }
