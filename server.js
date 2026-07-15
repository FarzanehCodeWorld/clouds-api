
const express = require('express');
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 8000;
app.use(cors())

let cloudTypes = {
    'Cirrus': {

        'level': 'High Clouds',
        'level height': '16,500-45,000 feet',
        'features': 'Cirrus clouds are delicate, feathery clouds that are made mostly of ice crystals. Their wispy shape comes from wind currents which twist and spread the ice crystals into strands.',
        'Weather prediction': 'A change is on its way!',
        //  'image':
    },
    'Cirrocumulus': {

        'level': 'High Clouds',
        'level height': '16,500-45,000 feet',
        'features': 'Cirrocumulus clouds are thin, sometimes patchy, sheet-like clouds. They sometimes look like they’re full of ripples or are made of small grains.',
        'Weather prediction': 'Fair, but cold. However, if you live in a tropical region, these clouds could be a sign of an approaching hurricane!',
        //  'image':
    },
    'Altocumulus': {

        'level': 'Mid-level Clouds',
        'level height': '6,500-23,000  feet',
        'features': 'Altocumulus clouds have several patchy white or gray layers, and seem to be made up of many small rows of fluffy ripples. They are lower than cirrus clouds, but still quite high. They are made of liquid water, but they don’t often produce rain.',
        'Weather prediction': 'Fair',
        //  'image':
    },
    'Altostratus': {

        'level': 'Mid-level Clouds',
        'level height': '6,500-23,000 feet',
        'features': 'Altostratus clouds are gray or blue-gray mid-level clouds composed of ice crystals and water droplets. The clouds usually cover the entire sky.',
        'Weather prediction': 'Be prepared for continuous rain or snow!',
        //  'image':
    },
    'Nimbostratus': {
        'level': 'Mid-level Clouds',
        'level height': '6,500-23,000 feet',
        'features': 'Nimbostratus clouds are dark, gray clouds that seem to fade into falling rain or snow. They are so thick that they often blot out the sunlight.',
        'Weather prediction': 'Gloomy with continuous rain or snow',
        //  'image':
    },
    'Cumulus': {
        'level': 'Low Clouds',
        'level height': 'less than 6,500 feet',
        'features': 'Cumulus clouds look like fluffy, white cotton balls in the sky. They are beautiful in sunsets, and their varying sizes and shapes can make them fun to observe!',
        'Weather prediction': 'Fair',
        //  'image':''
    },
    'Stratus': {
        'level': 'Low Clouds',
        'level height': 'less than 6,500 feet',
        'features': 'Stratus cloud often look like thin, white sheets covering the whole sky. Since they are so thin, they seldom produce much rain or snow. Sometimes, in the mountains or hills, these clouds appear to be fog.',
        'Weather prediction': 'Fair, but gloomy',
        //  'image':
    },
    'Stratocumulus': {
        'level': 'Low Clouds',
        'level height': 'less than 6,500 feet',
        'features': 'Cumulonimbus clouds grow on hot days when warm, wet air rises very high into the sky. From far away, they look like huge mountains or towers.',
        'Weather prediction': 'Look out for rain, hail, and tornadoes!'
        //  'image':
    },
    'Cumulonimbus': {

        'features': 'Orographic clouds get their shape from mountains or hills that force the air to move over or around them. They can also be formed by sea breezes and often appear as lines where two air masses meet.',
        'Weather prediction': ' An early sign that the conditions might be right to form afternoon thunderstorms!',
        //  'image':
    },
    'Lenticular': {

        'features': 'Lenticular clouds are shaped like lenses or almonds or...flying saucers! They may get their shape from hilly terrain or just the way the air is rising over flat terrain.',
        'Weather prediction': 'NOne',
        //  'image':
    },
    'Contrails': {
        'features': 'Contrails are made by high-flying jet airplanes. They are still clouds, though, because they are made of water droplets condensed from the water vapor in the exhaust of the jet engines.',
        'Weather prediction': 'Contrails can provide information about the layers of moisture in the sky.',
        //  'image':
    },
    'Mammatus': {
        'features': 'Mammatus clouds are actually altocumulus, cirrus, cumulonimbus, or other types of clouds that have these pouch-like shapes hanging out of the bottom. The pouches are created when cold air within the cloud sinks down toward the Earth.',
        'Weather prediction': 'Severe weather might be on its way!',
        'image': ''
    }

}
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/styles.css')
})


app.get('/api/:name', (request, response) => {
    const clouodName = request.params.name;
    if (cloudTypes[clouodName])
        response.json(cloudTypes[clouodName])
})


app.listen(PORT, '0.0.0.0', () => {
    console.log(`The server is running on ${PORT}.Better go catch it`)
})