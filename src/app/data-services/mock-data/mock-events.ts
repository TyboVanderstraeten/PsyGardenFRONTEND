import { Event } from 'src/app/models/event.model';

const JsonEvents = [
    {
        name: "test",
        description: "test",
        startDate: new Date(2019, 2, 3),
        endDate: new Date(2019, 2, 4),
        nrOfDays: "2",
        country: "1",
        region: "test",
        city: "test",
        street: "test",
        streetNr: "15",
        zipCode: "1555",
        genres: [],
        prices: [],
        resources: []
    },
    {
        name: "test",
        description: "test",
        startDate: new Date(2019, 2, 3),
        endDate: new Date(2019, 2, 4),
        nrOfDays: "2",
        country: "1",
        region: "test",
        city: "test",
        street: "test",
        streetNr: "15",
        zipCode: "1555",
        genres: [],
        prices: [],
        resources: []
    },
];

export const EVENTS: Event[] = JsonEvents.map(Event.fromJSON);