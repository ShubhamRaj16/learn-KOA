
 import Koa from 'koa';
 import router from './serv/';
 const App = new Koa();

App.use(async (ctx,next) =>{
    await next();
})
App.use(router.routes())
App.listen(3000);
