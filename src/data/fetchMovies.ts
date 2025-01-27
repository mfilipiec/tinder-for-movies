import movies from './exampleData';

export type Movie = {
  id: string;
  imageURL: string;
  title: string;
  summary: string;
  rating: number;
};
export type Movies = Movie[];

type APIResponse = {
  movies: Movies;
  hasMore: boolean;
};

const fetchMovies = async ({ pageParam }: { pageParam: number }): Promise<APIResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(movies[pageParam]);
    }, 1000);
  });
};

export default fetchMovies;