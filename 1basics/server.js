console.log('welcome boy');
//to import http module
const http = require('http');
const fs = require('fs');
//to create a server
const server = http.createServer((req,res)=>{
switch (req.url) {
    case '/':
       res.setHeader('Content-Type', 'text/html')
       res.write(
        '<html><form method="post" action="/test"><input name="name" type="text"></input><input type="submit"></input> </form></html>'
        )
       res.end();    

        break;
    case '/test':
        const body = [];
        // To compile request stream of body, data listener fires this event
        req.on('data', (chunk)=>{
            console.log(chunk)
            body.push(chunk);
        });
        //on end
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const name = parsedBody.split('=')[1];
            fs.writeFileSync('log.txt', name);
        });
     res.setHeader('Content-Type', 'text/html')

        res.statusCode = 302;
        res.setHeader('location', '/')
        res.write('I am in a Test Page, go to <a href="/">home</a>')    
        res.end();    
        break;

    default:
        res.setHeader('Content-Type', 'text/html')
        res.write('Page not found')
        
        break;
}


});

server.listen(6262);