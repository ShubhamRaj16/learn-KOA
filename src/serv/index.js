import Router from 'koa-router';

const router = new Router();



router.get('/', async (ctx,next) => {
    ctx.body = {
        status: 'success',
        message: 'hello, world!',
        output:"dfgdfgdf"
    };
    await next();
})
router.get('/home', async (ctx,next) => {
    ctx.body = {
        status: 'success',
        message: 'HOme!'
    };
    await next();
});
export default router;
