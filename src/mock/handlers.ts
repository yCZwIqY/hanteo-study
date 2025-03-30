import { http, HttpResponse } from 'msw';
import Banners from './db/banners.ts';
export const handlers = [
  http.get('/api/banners', async () => {
    return HttpResponse.json(Banners, { status: 200 });
  }),
];
