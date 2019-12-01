// @flow
import type { Event } from '~/domains/events/types';

const getRandom = (from: number, to: number) => Math.floor(Math.random() * to) + from;

const createCoordinates = (baseLat: number, baseLng: number) => ({
    latitude: baseLat + getRandom(0, 100) / 10000,
    longitude: baseLng + getRandom(0, 100) / 10000,
});

const createEvent = (index: number) => {
    return {
        id: index,
        title: `Event ${index}`,
        description: 'Some description of the event',
        location: 'Porto, Portugal',
        timestamp: 1549717008861,
        latlng: createCoordinates(41.14247, -8.617921),
        content: `Lorem ipsum dolor amet +1 stumptown fam craft beer meggings. Gentrify fingerstache butcher fam locavore edison bulb viral air plant brooklyn. Irony shoreditch green juice thundercats messenger bag meditation sriracha bespoke. 
            
Crucifix af cred taxidermy succulents distillery chicharrones everyday carry kombucha poutine air plant migas keytar messenger bag. Neutra tofu gastropub poke offal humblebrag try-hard poutine hell of tattooed hexagon copper mug master cleanse iPhone roof party. 
            
Offal knausgaard yr, shoreditch fashion axe gentrify live-edge lyft helvetica swag. Small batch thundercats flexitarian shaman sriracha edison bulb tumeric echo park coloring book readymade pop-up. 
            
Asymmetrical umami normcore bicycle rights kitsch deep v cardigan intelligentsia next level actually plaid. 
            
Pop-up etsy pug, chartreuse wolf vinyl you probably haven't heard of them health goth poke knausgaard. Air plant pickled normcore tumeric. Green juice freegan master cleanse chia tumblr, biodiesel schlitz palo santo man braid pop-up. Tacos ennui dreamcatcher, kale chips prism brunch XOXO wayfarers butcher raclette poke mixtape. 
            
Celiac gentrify farm-to-table polaroid, 8-bit bitters shaman locavore sustainable fam. Cloud bread pitchfork chambray vape, readymade authentic beard la croix trust fund. 
            
Listicle tilde enamel pin, tattooed vinyl aesthetic beard. Pok pok lyft trust fund succulents kickstarter meh. Offal cliche yr ethical af, everyday carry tousled locavore deep v vinyl. 
            
Readymade small batch poke brooklyn irony tousled health goth fam you probably haven't heard of them everyday carry lumbersexual cold-pressed four dollar toast austin artisan.`,
    };
};

export const events: Array<Event> = [...Array(5).keys()].map((index: number) => createEvent(index));
