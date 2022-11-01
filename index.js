#!/usr/bin/env node
import { v4 as uuid } from 'uuid'
import clipboardy from 'clipboardy'
import minimist from 'minimist'

const args = minimist(process.argv.slice(2));

;(async () => {
    if (!args || !args._.length)
        return console.log('You need to provide an argument. "uuid help" for more info.')
    
    const command = args._[0];

    switch (command) {
        case 'help':
            console.log('uuid gen - Generates a new uuid and copies to clipboard.')
            console.log(' --nohyp (no hyphens)')
            console.log(' -l {number} (only use {number} characters) - works only with --nohyp flag')
            console.log('\r\nuuid val {uuid} - Validates input uuid (not implemented yet).')
            break
        case 'gen':
            let genUuid = uuid()
            if (args.nohyp) {
                genUuid = genUuid.replace(/-/g, '')

                if (args.l) {
                    genUuid = genUuid.substring(0, args.l);
                }
            }

            clipboardy.writeSync(genUuid)
            console.log(`Generated "${genUuid}"\r\nCopied to clipboard.`)
            break
        case 'val':
            console.log('Validation not implemented yet.')
            break
    }
})()
