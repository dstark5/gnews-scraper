import scrapper from './lib/scraper.js';
import prettyURL from './lib/prettyUrl.js';
import * as cache from './lib/cache.js';
import type {NewsData} from './types/types';

export default async function GNews(options:{
    searchQuery: string;
    prettyUrl?: boolean;
    timeframe?: '1h' | '1d' | '7d' | '1y';
    cache?: boolean;
    cacheTTL?: string|number;
    queryParams?: {
        hl?: string;
        gl?: string;
        ceid?: string;
    };
  }): Promise<NewsData[]>{
   if(cache.has(options)&&options.cache){ 
    return cache.get(options);
   }else{
     var newsWithoutPrettyUrl=await scrapper(options);
     if(options.prettyUrl){
       var newsWithPrettyUrl=await prettyURL(newsWithoutPrettyUrl);
       if(options.cache) cache.set(options,newsWithPrettyUrl,options.cacheTTL);
       return newsWithPrettyUrl;
     }else{
       if(options.cache) cache.set(options,newsWithoutPrettyUrl,options.cacheTTL);
       return newsWithoutPrettyUrl;
     }
   }
}