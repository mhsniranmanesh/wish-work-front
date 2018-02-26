import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from './components/App.js';

const app = express();

app.use(express.static("public"));
app.get("*" , (req, res) =>{
    res.send(`
<!DOCTYPE html>
<html>
<head lang="fa">
    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <!--<link rel="shortcut icon" url=http://http://wishwork.ir/static/img/tab-img.png/>-->
    <link rel="apple-touch-icon" sizes="57x57" href="static/img/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="static/img/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="static/img/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="static/img/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="static/img/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="static/img/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="static/img/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="static/img/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="static/img/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="static/img/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="static/img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="static/img/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="static/img/favicon-16x16.png">
    <link rel="manifest" href="static/img/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="wish work">
    <script src="/bundle.js" defer></script>
    <title>ویش ورک | Wish Work</title>
</head>
<body class="fixed-nav" id="page-top" dir="rtl">
<div id='root'>${renderToString(<App/>)}</div>
</body>
</html>
`);
});

app.listen(process.env.PORT || 3000, () =>{
    console.log("server is listening")
})

