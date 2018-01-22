var fn_index = async (ctx, next) => {
    ctx.render('index.html', {title: 'Welcome'});
};

var fn_signin = async (ctx, next) => {
    var
        email = ctx.request.body.email || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (email === 'admin@example.com' && password === '12345') {
        ctx.render('sligin-ok.html', {title: 'sign in ok', name:'julian'})
    } else {
        ctx.render('signin-failed.html', {title: 'sign in failed'});
    }
}

module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
}