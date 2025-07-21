export async function fetchMovieDetails(title: string, releaseDate: string) {
  const url = `/api/movieDetails?title=${encodeURIComponent(
    title
  )}&releaseDate=${encodeURIComponent(releaseDate)}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch movie details: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}
