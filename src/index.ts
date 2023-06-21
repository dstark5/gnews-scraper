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
   if(cache.has(options.searchQuery)&&options.cache){ 
    return cache.get(options.searchQuery);
   }else{
     var newsWithoutPrettyUrl=await scrapper(options);
     if(options.prettyUrl){
       var newsWithPrettyUrl=await prettyURL(newsWithoutPrettyUrl);
       if(options.cache) cache.set(options.searchQuery,newsWithPrettyUrl,options.cacheTTL);
       return newsWithPrettyUrl;
     }else{
       if(options.cache) cache.set(options.searchQuery,newsWithoutPrettyUrl,options.cacheTTL);
       return newsWithoutPrettyUrl;
     }
   }
}