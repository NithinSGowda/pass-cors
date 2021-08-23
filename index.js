request = require('request');
var express = require('express');
var router = express.Router();
const fs = require('fs')

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

router.get('/api', async (req, res) => {
    data=req.query
    if(data.url){
        n=1
        uri = ''
        for(param in data){
            if(n==1){
                uri+=data[param]
            }else{
                uri+=`&${param}=${data[param]}`
            }
            n+=1
        }
        // console.log(uri);
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Credentials', true)
        try{
            url = new URL(uri)
            var options = {
                'method': 'GET',
                'url': url
            };
            request(options, function (error, response) {
                if (error) throw new Error(error);
                res.send(response.body);
            });

        }catch(err){
          console.log(err);
        }
    }else{
        res.setHeader("Content-Type","application/json")
        res.json({
            "error": "404",
            "desc": "Enter URL in the format /proxy/api?url='yourURLHere'"
        })
    }
    
})

router.get('/', async (req, res) => {
    data=req.query
    if(data.url){
        n=1
        uri = ''
        for(param in data){
            if(n==1){
                uri+=data[param]
            }else{
                uri+=`&${param}=${data[param]}`
            }
            n+=1
        }
        // console.log(uri);
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Credentials', true)
        try{
            url = new URL(uri)
            var ext = url.pathname.split('.')
            filename=`\\${makeid(10)}.${ext[ext.length - 1]}`
            request(uri).pipe(fs.createWriteStream(__dirname + filename)).on('close', ()=>{
                res.sendFile(__dirname+filename,()=>{
                    fs.unlinkSync(__dirname+filename)
                })
            });
        }catch(err){
          console.log(err);
        }
    }else{
        res.setHeader("Content-Type","application/json")
        res.json({
            "error": "404",
            "desc": "Enter URL in the format /proxy?url='yourURLHere'"
        })
    }
    
})

module.exports = router;