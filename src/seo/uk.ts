export const cities = [

    //United Kingdom
    //England
    { city: 'Bath', state: 'Somerset', country: 'England' },
    { city: 'Birmingham', state: 'West Midlands', country: 'England' },
    { city: 'Bradford', state: 'West Yorkshire', country: 'England' },
    { city: 'Brighton and Hove', state: 'East Sussex', country: 'England' },
    { city: 'Bristol', state: 'Bristol', country: 'England' },
    { city: 'Cambridge', state: 'Cambridgeshire', country: 'England' },
    { city: 'Canterbury', state: 'Kent', country: 'England' },
    { city: 'Carlisle', state: 'Cumbria', country: 'England' },
    { city: 'Chelmsford', state: 'Essex', country: 'England' },
    { city: 'Chester', state: 'Cheshire', country: 'England' },
    { city: 'Chichester', state: 'West Sussex', country: 'England' },
    { city: 'Colchester', state: 'Essex', country: 'England' },
    { city: 'Coventry', state: 'West Midlands', country: 'England' },
    { city: 'Derby', state: 'Derbyshire', country: 'England' },
    { city: 'Doncaster', state: 'South Yorkshire', country: 'England' },
    { city: 'Durham', state: 'County Durham', country: 'England' },
    { city: 'Ely', state: 'Cambridgeshire', country: 'England' },
    { city: 'Exeter', state: 'Devon', country: 'England' },
    { city: 'Gloucester', state: 'Gloucestershire', country: 'England' },
    { city: 'Hereford', state: 'Herefordshire', country: 'England' },
    { city: 'Kingston upon Hull', state: 'East Riding of Yorkshire', country: 'England' },
    { city: 'Lancaster', state: 'Lancashire', country: 'England' },
    { city: 'Leeds', state: 'West Yorkshire', country: 'England' },
    { city: 'Leicester', state: 'Leicestershire', country: 'England' },
    { city: 'Lichfield', state: 'Staffordshire', country: 'England' },
    { city: 'Lincoln', state: 'Lincolnshire', country: 'England' },
    { city: 'Liverpool', state: 'Merseyside', country: 'England' },
    { city: 'London', state: 'Greater London', country: 'England' },
    { city: 'Manchester', state: 'Greater Manchester', country: 'England' },
    { city: 'Milton Keynes', state: 'Buckinghamshire', country: 'England' },
    { city: 'Newcastle upon Tyne', state: 'Tyne and Wear', country: 'England' },
    { city: 'Norwich', state: 'Norfolk', country: 'England' },
    { city: 'Nottingham', state: 'Nottinghamshire', country: 'England' },
    { city: 'Oxford', state: 'Oxfordshire', country: 'England' },
    { city: 'Peterborough', state: 'Cambridgeshire', country: 'England' },
    { city: 'Plymouth', state: 'Devon', country: 'England' },
    { city: 'Portsmouth', state: 'Hampshire', country: 'England' },
    { city: 'Preston', state: 'Lancashire', country: 'England' },
    { city: 'Ripon', state: 'North Yorkshire', country: 'England' },
    { city: 'Salford', state: 'Greater Manchester', country: 'England' },
    { city: 'Salisbury', state: 'Wiltshire', country: 'England' },
    { city: 'Sheffield', state: 'South Yorkshire', country: 'England' },
    { city: 'Southampton', state: 'Hampshire', country: 'England' },
    { city: 'Southend-on-Sea', state: 'Essex', country: 'England' },
    { city: 'St Albans', state: 'Hertfordshire', country: 'England' },
    { city: 'Stoke-on-Trent', state: 'Staffordshire', country: 'England' },
    { city: 'Sunderland', state: 'Tyne and Wear', country: 'England' },
    { city: 'Truro', state: 'Cornwall', country: 'England' },
    { city: 'Wakefield', state: 'West Yorkshire', country: 'England' },
    { city: 'Wells', state: 'Somerset', country: 'England' },
    { city: 'Westminster', state: 'Greater London', country: 'England' },
    { city: 'Winchester', state: 'Hampshire', country: 'England' },
    { city: 'Wolverhampton', state: 'West Midlands', country: 'England' },
    { city: 'Worcester', state: 'Worcestershire', country: 'England' },
    { city: 'York', state: 'North Yorkshire', country: 'England' },

    //Scotland
    { city: 'Aberdeen', state: 'Aberdeenshire', country: 'Scotland' },
    { city: 'Dundee', state: 'Dundee City', country: 'Scotland' },
    { city: 'Dunfermline', state: 'Fife', country: 'Scotland' },
    { city: 'Edinburgh', state: 'City of Edinburgh', country: 'Scotland' },
    { city: 'Glasgow', state: 'Glasgow City', country: 'Scotland' },
    { city: 'Inverness', state: 'Highland', country: 'Scotland' },
    { city: 'Perth', state: 'Perth and Kinross', country: 'Scotland' },
    { city: 'Stirling', state: 'Stirling', country: 'Scotland' },

    //Wales
    { city: 'Bangor', state: 'Gwynedd', country: 'Wales' },
    { city: 'Cardiff', state: 'Cardiff', country: 'Wales' },
    { city: 'Newport', state: 'Newport', country: 'Wales' },
    { city: 'St Asaph', state: 'Denbighshire', country: 'Wales' },
    { city: 'St Davids', state: 'Pembrokeshire', country: 'Wales' },
    { city: 'Swansea', state: 'Swansea', country: 'Wales' },
    { city: 'Wrexham', state: 'Wrexham', country: 'Wales' },

    //Northern Ireland
    { city: 'Armagh', state: 'Armagh City, Banbridge and Craigavon', country: 'Northern Ireland' },
    { city: 'Bangor', state: 'Ards and North Down', country: 'Northern Ireland' },
    { city: 'Belfast', state: 'Belfast', country: 'Northern Ireland' },
    { city: 'Lisburn', state: 'Lisburn and Castlereagh', country: 'Northern Ireland' },
    { city: 'Londonderry', state: 'Derry and Strabane', country: 'Northern Ireland' },
    { city: 'Newry', state: 'Newry, Mourne and Down', country: 'Northern Ireland' },


    
]


export interface CityRoute {
    city: string;
    state: string;
    country: string;
    name: string;
    slug: string;
}

const normalizeSegment = (value: string) =>
    value
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-");

export const createCitySlug = (
    city: string,
    state: string,
    country: string
) => {
    return `/${normalizeSegment(city)}/${normalizeSegment(state)}/${normalizeSegment(country)}`;
};

export const cityRoutes: CityRoute[] = cities.map((item) => ({
    ...item,
    name: item.city,
    slug: createCitySlug(item.city, item.state, item.country),
}));

export const getCityFromSegments = (segments: string[]) => {
    if (!segments || segments.length < 1) return null;

    const normalizedPath = `/${segments.map(normalizeSegment).join("/")}`;
    return cityRoutes.find((route) => route.slug === normalizedPath) || null;
};

export const getCityFromPath = (path: string) => {
    const segments = path.split("/").filter(Boolean);
    return getCityFromSegments(segments);
};