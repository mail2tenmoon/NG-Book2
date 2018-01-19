import { YouTubeSearchService, YOUTUBE_API_URL, YOUTUBE_API_KEY } from './you-tube-search.service';

export const youTubeSearchInjectables: Array<any> = [
    { provide: YouTubeSearchService, useClass: YouTubeSearchService },
    { provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY },
    { provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL }
];
