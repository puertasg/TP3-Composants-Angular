import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { InterpolateComponent } from './interpolate/interpolate.component';
import { BindingComponent } from './binding/binding.component';
import { VariablelocaleComponent } from './variablelocale/variablelocale.component';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    InterpolateComponent,
    BindingComponent,
    VariablelocaleComponent,
    IfComponent,
    ForComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
