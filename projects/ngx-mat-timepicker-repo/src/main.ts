import { provideZoneChangeDetection } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { NgxMatTimepickerAppModule } from "./app/app.module";


platformBrowserDynamic()
    .bootstrapModule(NgxMatTimepickerAppModule, { applicationProviders: [provideZoneChangeDetection()], })
    .catch(err => console.error(err));
