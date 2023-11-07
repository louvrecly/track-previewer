import { searchTracks } from '@/app/services/spotify';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const offset = searchParams.get('offset');

  if (!query) return Response.json({ tracks: null, error: 'Query is empty' });

  const { tracks } = await searchTracks(query, parseInt(offset ?? '0'));

  return Response.json({ tracks, error: '' });
}
