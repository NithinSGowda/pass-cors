# **imageproxy**
**A simple proxy to load CORS blocked images**  

Must be used in an express server environment

```console
$ npm install proxy-image
```

<br/>

## Server Side
```javascript

//Boilerplate
const express = require('express')
const app = express()


//Main
const proxy = require('proxy-image')
app.use('/proxy', proxy);  //You can customise the route name


//Boilerplate
app.listen(process.env.PORT||8080)


```
<br/>
<br/>

## Client Side
<br/>

Before 
```html
<img src="https://corsblockedimage.com/cat.png">
```

After
```html
<img src="/proxy?url='https://corsblockedimage.com/cat.png'">
```


<br/>
<br/>
Thats how easy it is to load a CORS blocked images on your frontend