import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DataComponent } from './data/data.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { StackedChartComponent } from './charts/stacked-chart/stacked-chart.component';
import { LinebarChartComponent } from './charts/linebar-chart/linebar-chart.component';
import { BoxedplotChartComponent } from './charts/boxedplot-chart/boxedplot-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    StackedChartComponent,
    DataComponent,
    LinebarChartComponent,
    BoxedplotChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [DataComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
