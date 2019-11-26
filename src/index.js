import app from './app';

async function main() {
    await app.listen(4000);
    console.log('Server en puerto 4000');
}

main();