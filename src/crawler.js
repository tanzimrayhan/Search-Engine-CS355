var request = require('request');
var cheerio = require('cheerio');
var url = require('url-parse');
var mysql=require('mysql');
var START_URL = "https://www.w3schools.com/";
var SEARCH_WORD = "project";
var MAX_PAGES_TO_VISIT = 10;
var pageId=1000;
var express=require ('express');
var path=require ('path');
var app=express();
var body=require('body-parser');
const port=process.env.PORT||5000;

app.get("/", (req, res) => {
  res.status(200).send("WHATABYTE: Food For Devs");
});

app.post("/search", (body,req,res)=>{
  console.log(req.body.searchWord);
  res.send("Got a word");
})

var pagesVisited = {};
var numPagesVisited = 0;
var pagesToVisit = [];
var url = new URL(START_URL);
var baseUrl = url.protocol + "//" + url.hostname;

var conn=mysql.createConnection({
  host:'149.4.211.180',
  user:'ahri8918',
  password:'23498918',
  database:'ahri8918'
})

conn.connect((err)=>{
  if(err) {
    //console.log(err);
    throw err;
  }  
 console.log("Connected to db");
})


pagesToVisit.push(START_URL);
crawl();

function crawl() {
  if (numPagesVisited >= MAX_PAGES_TO_VISIT) {
    console.log("Reached the max limit of number of pages to visit");
    return;
  }

  var nextPage = pagesToVisit.pop();
  if (nextPage in pagesVisited) {
    crawl();
  }
  else {
    visitPage(nextPage, crawl);
  }
}

function visitPage(url, callback) {
  //Adding page to our set to maintain consistency
  pagesVisited[url] = true;
  numPagesVisited++;

  //Making the req
  
  request(url, function (error, response, body) {

    // Check status code (200 is HTTP OK)
    console.log("Status code: " + response.statusCode);
    if (response.statusCode !== 200) {

      callback();
      return;
    }
    if (response.statusCode === 200) {
      // Parse the document body
      console.log("Visiting page " + url);
      var $ = cheerio.load(body);
      pageId++;
      /*conn.query('INSERT INTO Page (pageId, url, title) VALUES ('+pageId+','+url+','+$('title').text()+')' , (err, res) => {
        if(err) throw err;
      
        console.log('Last insert ID:', res.insertId);
      })*/
     

      /*var isWordFound = searchForWord($, SEARCH_WORD);
      if (isWordFound) {
        console.log("Word " + SEARCH_WORD + " found at page " + url);
      }
      else {
        collectInternalLinks($);
        callback();
      }*/
      console.log("Page title:  " + $('title').text());
      var bodyText = $('html > body').text().toLowerCase();
  $('html > body').each(function (i, element) {
    const $element = $(element);
    var str=$element.text();
    str=str.replace("\n","");
    str = str.replace(/^\s*$[\n\r]{1,}/gm, '')
    
      
      
    
    //console.log(str);
  })

  //collectInternalLinks($);
   //   callback();
  //console.log(bodyText);
    }
  });
}





/*function searchForWord($, word) {
  var bodyText = $('html > body').text().toLowerCase();
  $('html > body').each(function (i, element) {
    const $element = $(element);
    var str=$element.text();
    str=str.replace("\n","");

    
    console.log(str);
  })
  //console.log(bodyText);
  return (bodyText.indexOf(word.toLowerCase()) !== -1);
}*/

function collectInternalLinks($) {
  var relativeLinks = $("a[href^='/']");
  console.log("Found " + relativeLinks.length + " relative links on page");
  relativeLinks.each(function () {
    pagesToVisit.push(baseUrl + $(this).attr('href'));
  });
}

conn.end((err) => {
  if(err){
    throw err;
  }
  console.log("DB connection closed")
  
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});