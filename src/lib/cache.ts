import NodeCache from 'node-cache';
import type {NewsData} from '../types/types';


const cache=new NodeCache();

function get(key:string):NewsData[]{
    ///@ts-ignore
    return cache.get(key);
}

function set(key:string,value:any,ttl:string|number|undefined):boolean{
    if(!ttl) ttl=3600;
    return cache.set(key,value,ttl);
}

function has(key:string):boolean{
    return cache.has(key);
}

export{get,set,has};