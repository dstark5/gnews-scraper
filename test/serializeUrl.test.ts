import serializeURL from '../src/lib/serializeUrl';
import {expect} from "chai";

describe("serializeUrl function test",()=>{
    it("should return serialized url",(done)=>{
        const url=serializeURL({searchQuery:"nasdaq"})
        expect(url).to.be.a('string').equal('https://news.google.com/search?q=nasdaq');
        done()
    })

    it("should return serialized url with queryparams",(done)=>{
        const url=serializeURL({searchQuery:"nasdaq",queryParams: {hl:"en-US",gl:"US",ceid:"US:en"}})
        expect(url).to.be.a('string').equal('https://news.google.com/search?q=nasdaq&hl=en-US&gl=US&ceid=US%3Aen');
        done()
    })

    it("should return serialized url with timeframe",(done)=>{
        const url=serializeURL({searchQuery:"nasdaq",timeframe:'7d'})
        expect(url).to.be.a('string').equal('https://news.google.com/search?q=nasdaq%20when%3A7d');
        done()
    })
})