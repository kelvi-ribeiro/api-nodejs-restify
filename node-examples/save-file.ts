import * as fs from 'fs';
import * as yargs from 'yargs'

const argv = yargs
        .alias('f','filename')
        .alias('c','content')
        .demandOption('filename')
        .demandOption('content')
        .argv

fs.writeFile(argv.filename as string,argv.content,(err)=>{
    if(err) throw err;
    console.log(`Arquivo ${argv.filename} foi salvo com sucesso`);
})


