
 import Koa from 'koa';
 import serv from './serv/';
 // const Koa = require('koa');
 const App = new Koa();

App.use(async (ctx,next) =>{
    ctx.body ="step1";
    console.log (1);    
    const start = Date.now();    
    // await new Promise(resolve => {
    //     setTimeout(() => {
    //       console.log (resolve);
    //       ctx.body+="step2";
    //     }, 2000)
    // })('2');

    await next();
    console.log('3');
    ctx.body+="step3";
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
})


App.use(async (ctx, next) => {
    // const start = Date.now();
    // await next();
    // const ms = Date.now() - start;
    // console.log(`${ctx.method} ${ctx.url} - ${ms}`);
  });

App.listen(3000);
