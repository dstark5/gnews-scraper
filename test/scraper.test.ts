import scraper from '../src/lib/scraper';
import {expect} from "chai";

describe('scraper function test', function () {
    it('scraper should return array',function (done) {
        this.timeout(30000);
        scraper({searchQuery:"nasdaq"})
        .then((news)=>{
            expect(news).to.be.a('array');
            done()
        })
        .catch(err=>{done(err)})
    });

    it('scraper should return array(again)',function (done) {
        this.timeout(30000);
        scraper({searchQuery:"twitter"})
        .then((news)=>{
            expect(news).to.be.a('array');
            done()
        })
        .catch(err=>{done(err)})
    });
})