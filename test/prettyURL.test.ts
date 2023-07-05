import prettyURL from '../src/lib/prettyUrl';
import GNews from "../src/index";
import {expect} from "chai";

describe("prettyUrl function test",()=>{
    var gnewsData:any;
    it('load gnews data should return array without prettyUrl',function (done) {
        this.timeout(30000);
        GNews({searchQuery:"nasdaq"})
        .then((news)=>{
            gnewsData=news;
            expect(news).to.be.a('array');
            done()
        })
        .catch(err=>{done(err)})
    });

    it('passing gnews data should return array with prettyUrl',function (done) {
        this.timeout(3000);
        prettyURL([gnewsData[1]])
        .then((data)=>{
            const isUrl:String=data[0]['articleUrl'];
            expect(isUrl).to.be.a('string');
            expect(isUrl.startsWith('https://')).to.be.equal(true);
            done()
        })
        .catch(err=>{done(err)});
    })

    it('passing gnews data should return array with prettyUrl (again)',function (done) {
        this.timeout(3000);
        prettyURL([gnewsData[3]])
        .then((data)=>{
            const isUrl:String=data[0]['articleUrl'];
            expect(isUrl).to.be.a('string');
            expect(isUrl.startsWith('https://')).to.be.equal(true);
            done()
        })
        .catch(err=>{done(err)});
    })
})