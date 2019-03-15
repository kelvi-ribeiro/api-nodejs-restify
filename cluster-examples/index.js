const restify = require('restify')

const app = restify.createServer()
app.use(restify.plugins.queryParser())

app.get('/',(req, resp, next)=>{
        setTimeout(() => {
            resp.json({pid:process.pid,echo:req.query})
        }, 500);
    
})

app.listen(4000,()=>{
    console.log('listening on port 4000')
})