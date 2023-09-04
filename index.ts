import axios from 'axios';
import yargs from 'yargs';

interface ZipData {
    places: {
        state: string;
        'place name': string;
    }[];
}

interface WeatherData {
    main: {
        temp: number;
    };
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
const apiKey = process.env.OPENWEATHERMAP_API_KEY;

if (!apiKey) {
    console.error('OPENWEATHERMAP_API_KEY environment variable not set');
    process.exit(1);
}

axios
    .get<ZipData>(`https://api.zippopotam.us/us/${zip}`)
    .then((response) => {
        const { state, 'place name': city } = response.data.places[0];
        console.log(`City: ${city}, State: ${state}`);

        return axios.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${apiKey}&units=imperial`);
    })
    .then((response) => {
        const temperature = response.data.main.temp;
        console.log(`Temperature: ${temperature}°F`);
    })
    .catch((error) => {
        console.error(`Error fetching data: ${error.message}`);
    });