const http=require('http');
const url = require('url');

const hostname="127.0.0.1";
const port="6661"

const server= http.createServer((req,res)=>{
    const urlPath=url.parse((req.url),true);
    let pathname=urlPath.pathname;
    if(pathname==="/login"){
        if(req.method=="POST"){
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader("Access-Control-Allow-Origin","*");
        res.end(JSON.stringify({'status':"success"}));
    }

  else if(req.method==="OPTIONS"){
    res.statusCode=200;
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Request-Method","POST","OPTIONS");
    res.setHeader("Access-Control-Allow-Headers","content-type");
    res.end(JSON.stringify({'statusCode':"success","message":"done"}));

  }
  else{
    res.statusCode=405;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin","*");
    res.end(JSON.stringify({'statusCode':`Request ${req.method} is not allowed`}));

  }}
  else{
    res.statusCode=404;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader("Access-Control-Allow-Origin","*");
    res.end("Page not found");

  }

}).listen(port,()=>{
    console.log(`Server is started:http://${hostname}:${port}`);
})