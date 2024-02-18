import { http, HttpResponse, delay } from "msw";

import cardsData from "./data/cardsData";
import cardDetails from "./data/cardDetails";

export const handlers = [
    http.get('/getCards', async () => {
        await delay(1000);
        return HttpResponse.json(cardsData);
    }),
    http.get('/cardDetails', async () => {
        await delay(1000);
        return HttpResponse.json(cardDetails);
    })
]