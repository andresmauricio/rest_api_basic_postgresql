const app = require('./server');

async function main() {
    await app.listen(4600);
    console.log('server on port 4600');
}

main();