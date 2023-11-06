import { searchTracks } from './services/spotify';
import styles from './page.module.css';

export default async function Home() {
  const { tracks } = await searchTracks('little');

  return <main className={styles.main}>{JSON.stringify(tracks)}</main>;
}
