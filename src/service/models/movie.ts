export interface IMovie {
  id: bigint;
  title: string;
  original_language: string | null;
  original_title: string | null;
  overview: string | null;
  poster_path: string | null;
  media_type: string | null;
  release_date: string | null;
}
