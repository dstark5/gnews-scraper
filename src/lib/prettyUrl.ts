import got from 'got';
import * as cheerio from 'cheerio';
import pLimit from 'p-limit';
import type {NewsData} from '../types/types';

const limit = pLimit(5);

export default async function prettyURL(newsData:NewsData[]){
    return await Promise.all(newsData.map(newsWithGoogleUrl => {
       return limit(async()=>{
            try{
                var res=await got(newsWithGoogleUrl.articleUrl);
                const $ = cheerio.load(res.body)
                var link = $('c-wiz a[rel=nofollow]').attr('href');
                if(link){ newsWithGoogleUrl.articleUrl=link; };
                return newsWithGoogleUrl;
            }catch(err){
                return newsWithGoogleUrl;
            }
        })
    }))
}