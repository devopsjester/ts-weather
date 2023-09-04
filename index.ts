import axios from 'axios';
import yargs from 'yargs';

interface ZipData {
    places: {
        state: string;
        'place name': string;
    }[];
}

const argv = yargs(process.argv.slice(2))
    .command('$0', 'get city and state from a zip code', (yargs) => {
        yargs.option('zip', {
            alias: 'z',
            describe: 'zip code to lookup',
            type: 'string',
            demandOption: true
        })
    })
    .help()
    .argv;

const zip = argv.zip as string;

axios
    .get<ZipData>(`https://api.zippopotam.us/us/${zip}`)
    .then((response) => {
        const { state, 'place name': city } = response.data.places[0];
        console.log(`City: ${city}, State: ${state}`);
    })
    .catch((error) => {
        console.error(`Error fetching data: ${error.message}`);
    });