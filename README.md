# **pass-cors**
**A simple proxy to load CORS blocked files**  

Must be used in an express server environment

```console
$ npm i pass-cors
```
<br/>

- Can be Used with any file type
- Just two lines of integration
- Eliminate third party proxy server dependency
- No need of a separate server to be hosted just for proxy
- This will function as a part of your current server and opens up a custom path set by the user
<br/>
<br/>

## Server Side
```javascript

//Boilerplate
const express = require('express')
const app = express()


//Main
const proxy = require('pass-cors')
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

<script src="https://corsblockedscript.com/sometool.js"></script>

<link href="https://corsblockedcss.com/style.css" rel="stylesheet">

```

After
```html
<img src="/proxy?url=https://corsblockedimage.com/cat.png">

<script src="/proxy?url=https://corsblockedscript.com/sometool.js"></script>

<link href="/proxy?url=https://corsblockedcss.com/style.css" rel="stylesheet">
```

<br/>
Thats how easy it is to load a CORS blocked elements on your frontend
