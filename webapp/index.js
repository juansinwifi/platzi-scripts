const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const sum = require('./sum');

router.get('/', (ctx, next) => {
  const result = "Hello World";
  return ctx.body = { result };
});

router.get('/add/:a/:b', (ctx, next) => {
  const result = sum(parseFloat(ctx.params.a), parseFloat(ctx.params.b));
  return ctx.body = { result };
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(process.env.PORT || 3000);
