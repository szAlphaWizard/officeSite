const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require("./controller");

const templating = require('./templating');

const rest = require('./rest');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

const isProduction = process.env.NODE_ENV === 'production';

if (! isProduction){
    let staticFiles = require("./static-files");
    app.use(staticFiles('/static', __dirname + '/static'));
}
 
app.use(bodyParser());

app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

app.use(rest.restify());

app.use(controller());

app.listen(3000);
console.log('app start at port 3000...');

