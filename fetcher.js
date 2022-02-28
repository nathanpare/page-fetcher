const fs = require('fs')
const request = require('request');
let url = process.argv[2];
let path = process.argv[3];
const pageFetcher = function(url, path) {
  request(url, (error, response, body) => {
    if (error) {
      console.log("request error", error); 
      return;
    }
    fs.writeFile(path, body, (error) => {
      if (error) {
        console.log("writefile error", error);
      } else {
        console.log(`Downloaded and saved ${body.length} to ${path}`)
      }
    })
  })  
}
pageFetcher(url, path);