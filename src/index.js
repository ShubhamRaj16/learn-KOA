
// require('babel-register')({
//     presets: ['env'],
// })

import Koa from 'koa';
import serv from './serv/';
// const Koa = require('koa');
const App = new Koa();


App.use(async (ctx,next) =>{
    ctx.body='HEllo'
    await next();
    console.log('Done');
})

App.listen(3000);
