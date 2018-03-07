const directory = '.././icons/';
const fs = require( 'fs' );


const buildDictionary = () => {
    return new Promise ( ( resolve, reject ) => {
        fs.readdir( directory, ( err, files ) => {
            if ( err ) {
                reject( err );
            }
            let dict = {}   
            files.forEach( file => {
                let key = file.split( '.' )[ 0 ];
                dict[ key ] = `.././icons/${file}`;
            });
            resolve( dict );
        });
    })

}
async function importDictionary () {
    try {
        let dict = await buildDictionary();
        fs.writeFileSync( '../dict.json', JSON.stringify( dict,  null, 4 ) );
    }
    catch ( err ) { 
        console.log( err );
    }
}
importDictionary()
// console.log(dict)