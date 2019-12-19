var request = require('request');
var cheerio = require('cheerio');
var url = require('url-parse');
var mysql = require('mysql');
var START_URL = "https://www.google.com";
var SEARCH_WORD = "project";
var MAX_PAGES_TO_VISIT = 10;
var pageId = 1000;
var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors');
var searchOnDB;
var bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
var url = new URL(START_URL);
var baseUrl = url.protocol + "//" + url.hostname;

var pagesVisited = {};
var numPagesVisited = 0;
var pagesToVisit = [];



app.use(cors());

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json())

var conn = mysql.createConnection({
  host: '149.4.211.180',
  user: 'ahri8918',
  password: '23498918',
  database: 'ahri8918',
  charset: 'utf8mb4'
})

app.get("/", (req, res) => {
  res.status(200).send("WHATABYTE: Food For Devs");
});

app.post("/index", (req, res) => {
  var site2Search = JSON.stringify(req.body.word);
  console.log(site2Search);
  
  if (START_URL !== "") {
   
    url = new URL(START_URL);
    baseUrl = url.protocol + "//" + url.hostname;
    
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
  
  
  
          var statement = "INSERT INTO Page (pageId,url,title,description, lastModified, lastIndexed, timeToIndex) VALUES (?,?,?,?,?,?,?)"
          conn.query(statement, [pageId, url, $('title').text(), "", "2019-03-25 06:32:32", "2019-03-25 06:32:32", "2019-03-25 06:32:32"], (err, res) => {
            if (err) {
              console.log(err);
              throw err;
            }
            console.log('Last insert ID:', res.insertId);
          })
  
          console.log("Page title:  " + $('title').text());
          //var bodyText = $('html > body').text().toLowerCase();
          //console.log(bodyText)
          $('html > body').each(function (i, element) {
            const $element = $(element);
            var str = $element.text() + " ";
            //str=str.replace("\n","");
            str = str.replace(/^\s*$[\n\r]{1,}/gm, '')
  
  
  
            var words = str.split(" ");
            for (var i = 0; i < words.length - 1; i++) {
              words[i] += " ";
            }
  
  
  
            for (var i = 0; i < words.length; i++) {
              var temp = words[i];
              var statement = "INSERT INTO word (wordId,wordName) VALUES (?,?)"
              conn.query(statement, [i, temp], (err, res) => {
                if (err) {
                  console.log(err);
                  throw err;
                }
  
              })
  
            }
            console.log('Last insert ID:  Insertion Finish!!!!');
  
            console.log(words);
          })
  
          //collectInternalLinks($);
          //  callback();
        }
      });
    }
  }
  res.status(200).send("Got a site");
 
  return res.status(200).send("Got a site");
})










function collectInternalLinks($) {
  var relativeLinks = $("a[href^='/']");
  console.log("Found " + relativeLinks.length + " relative links on page");
  relativeLinks.each(function () {
    pagesToVisit.push(baseUrl + $(this).attr('href'));
  });
}



app.post("/search", (req, res) => {
  searchOnDB = JSON.stringify(req.body.word);
  console.log(searchOnDB);
  return res.status(200).send("Got a word");



})





app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});