const initApp = require('./src/gateway');
const config = require('./config');

/**
 *
 */
initApp()
.then((app) => app.listen({ port: config.PORT }))
.then(({ url }) => {
    console.log(`listening at ${url}`);
})
.catch((error) => {
    console.error('Init server crashed', error);
});
