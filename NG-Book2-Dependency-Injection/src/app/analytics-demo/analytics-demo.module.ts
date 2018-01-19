import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsService } from '../services/analytics.service';

import {
    HttpModule,
    Http
} from '@angular/http';
import { AnalyticsImplementation, Metric } from './analytics-demo.interface';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [
        { provide: 'API_URL', useValue: 'http://devserver.com' },
        {
            provide: AnalyticsService,
            deps: [Http, 'API_URL'],
            useFactory(http: Http, apiUrl: string) {
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
