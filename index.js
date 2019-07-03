const initApp = require('./lib/app');

const PORT = 4001;

/**
 *
 */
initApp().then(
    app => app.listen({ port: PORT })
).then(
    ({ url }) => console.log(`listening at ${url}`)
);
