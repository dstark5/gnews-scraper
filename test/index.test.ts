import GNews from "../src/index";
import {expect} from "chai";

describe('Gnews without pretty url', function () {
    var gnewsData:any;
    it('should return array',function (done) {
        this.timeout(30000);
        GNews({searchQuery:"nasdaq"})
        .then((news)=>{
            gnewsData=news;
            expect(news).to.be.a('array');
            done()
        })
        .catch(err=>{done(err)})
    });
    it('array should contain object',function (done) {
        expect(gnewsData[1]).to.be.a('object');
        done()
    });
    it('should have article url of "news.google.com"',function (done) {
        const isUrl:String=gnewsData[1]['articleUrl'];
        expect(isUrl).to.be.a('string');
        expect(isUrl.startsWith('https://news.google.com')).to.be.equal(true);
        done()
    });
});

describe('Gnews with pretty url', function (){
    var gnewsData:any;
    it('should return array with pretty url',function (done) {
        this.timeout(90000);
        GNews({searchQuery:"nasdaq",prettyUrl:true})
        .then((news)=>{
            gnewsData=news;
            expect(news).to.be.a('array');
            done()
        })
        .catch(err=>{done(err)})
    });
    it('array should contain object',function (done) {
        expect(gnewsData[1]).to.be.a('object');
        done()
    });
    it('should have article url',function (done) {
        const isUrl:String=gnewsData[1]['articleUrl'];
        expect(isUrl).to.be.a('string');
        expect(isUrl.startsWith('https://')).to.be.equal(true);
        done()
    });
});

describe('Gnews with cache and prettyURL:false', function (){
    it('should return array without pretty url',function (done) {
        this.timeout(30000);
        GNews({searchQuery:"nasdaq",cache:true})
        .then((news)=>{
            expect(news).to.be.a('array');
            done()
        })
        .catch(err=>{done(err)})
    });
    it('should return array from cache',function (done) {
        this.timeout(1000);
        GNews({searchQuery:"nasdaq",cache:true})
        .then((news)=>{
            expect(news).to.be.a('array');
            done()
        })
        .catch(err=>{done(err)})
    });
    it('should return array from cache (again)',function (done) {
        this.timeout(1000);
        GNews({searchQuery:"nasdaq",cache:true})
        .then((news)=>{
            expect(news).to.be.a('array');
            done()
        })
        .catch(err=>{done(err)})
    });
});

describe('Gnews with cache and prettyURL:true', function (){
    it('should return array with pretty url',function (done) {
        this.timeout(90000);
        GNews({searchQuery:"nasdaq",prettyUrl:true,cache:true})
        .then((news)=>{
            expect(news).to.be.a('array');
            done()
        })
        .catch(err=>{done(err)})
    });
    it('should return array from cache',function (done) {
        this.timeout(1000);
        GNews({searchQuery:"nasdaq",prettyUrl:true,cache:true})
        .then((news)=>{
            expect(news).to.be.a('array');
            done()
        })
        .catch(err=>{done(err)})
    });
    it('should return array from cache (again)',function (done) {
        this.timeout(1000);
        GNews({searchQuery:"nasdaq",prettyUrl:true,cache:true})
        .then((news)=>{
            expect(news).to.be.a('array');
            done()
        })
        .catch(err=>{done(err)})
    });
});