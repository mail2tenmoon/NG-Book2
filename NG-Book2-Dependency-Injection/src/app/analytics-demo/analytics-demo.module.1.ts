import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsService } from '../services/analytics.service';
import { AnalyticsImplementation, Metric } from './analytics-demo.interface';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        {
            provide: AnalyticsService,
            useFactory() {
                const loggingImplementation: AnalyticsImplementation = {
                    recordEvent: (metric: Metric): void => {
                        console.log('The metric is:', metric);
                    }
                };

                return new AnalyticsService(loggingImplementation);
            }
        }
    ],
    declarations: []
})
export class AnalyticsDemoModule { }
