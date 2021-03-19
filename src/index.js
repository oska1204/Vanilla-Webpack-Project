import '/src/styles/index.scss';

const allFiles = (ctx => {
    let keys = ctx.keys();
    let values = keys.map(ctx);
    return keys.reduce((o, k, i) => { o[k] = values[i]; return o; }, {});
})(require.context('./images', true, /.*/));

document.body.innerHTML += '<blockquote>you there';
