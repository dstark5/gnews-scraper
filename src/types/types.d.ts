export type ElementType=string|undefined|null;

export interface NewsData {
    title: string;
    articleUrl: string;
    sourceName: string;
    imageUrl: string;
    time: string;
}

export interface Options {
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
}

export interface Params{
    q?:string;
    hl?:string;
    gl?:string;
    ceid?:string;
}