const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Home page');
        return;
    }
    if(req.url === '/about'){
        res.end('About page');
        return;
    }
    res.end(`
    <h3>Oooops!!</h3>
    <p>No such page</p>
    <a href="/">Go back home</a>
    `);
})

server.listen(5000);