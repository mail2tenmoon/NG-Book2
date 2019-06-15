import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';
import { AnalyticsImplementation, Metric } from './analytics-demo.interface';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        { provide: 'API_URL', useValue: 'http://devserver.com' },
        {
            provide: AnalyticsService,
            deps: [HttpClient, 'API_URL'],
            useFactory(http: HttpClient, apiUrl: string) {
                const loggingImplementation: AnalyticsImplementation = {
                    recordEvent: (metric: Metric): void => {
                        console.log('The metric is:', metric);
                        console.log('sending to:', apiUrl);
                    }
                };
                return new AnalyticsService(loggingImplementation);
            }
        },
    ],
    declarations: []
})
export class AnalyticsDemoModule { }
