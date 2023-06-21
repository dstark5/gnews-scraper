import type {Options,Params} from '../types/types';

export default function serializeURL(config:Options):string{
    var params:Params={};
    params.q=config.timeframe?`${config.searchQuery} when:${config.timeframe}`:config.searchQuery;
    if(config.queryParams!=undefined){
        Object.keys(config.queryParams).map(key=>{
            if(key=='hl'||key=="gl"||key=="ceid"){
                //@ts-ignore
                params[key]=config.queryParams[key];
            }
        })
    }
    const url:string= 'https://news.google.com/search?';
    const query:string=Object.entries(params).map(([key, val]) => `${key}=${encodeURIComponent(val)}`).join('&');
    return url+query;
}