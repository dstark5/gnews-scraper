import NodeCache from 'node-cache';
import crypto from 'node:crypto';
import type {NewsData,Options} from '../types/types';


const cache=new NodeCache();

function key(keys:Options):string{
    const keyString=JSON.stringify(keys);
    const key=crypto.createHash('md5').update(keyString).digest('hex').toString();
    return key;
}

function get(keys:Options):NewsData[]{
    const dataKey=key(keys);
    ///@ts-ignore
    return cache.get(dataKey);
}

function set(keys:Options,value:any,ttl:string|number|undefined):boolean{
    const dataKey=key(keys);
    if(!ttl) ttl=3600;
    return cache.set(dataKey,value,ttl);
}

function has(keys:Options):boolean{
    const dataKey=key(keys);
    return cache.has(dataKey);
}

export{get,set,has};