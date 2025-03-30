import { http, HttpResponse } from 'msw';
import Banners from './db/banners.ts';
import Contents from './db/contents.ts';

export const handlers = [
  http.get('/api/banners', async () => {
    return HttpResponse.json(Banners, { status: 200 });
  }),
  http.get('/api/chart', async ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || '1');

    const startIndex = (page - 1) * 10;
    const endIndex = startIndex + 10;
    const items = Contents.slice(startIndex, Math.min(endIndex, Contents.length));
    const nextPage = endIndex < Contents.length ? page + 1 : null;

    return HttpResponse.json({ items, nextPage }, { status: 200 });
  }),
];
