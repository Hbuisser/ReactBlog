export const FETCH_POST = 'FETCH_POST';

export function fetchPosts() {
  const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
  const API_KEY = 'WAGON-BLOG';
  const promise = fetch(`${ROOT_URL}?key=${API_KEY}`)
    .then(response => response.json());
  return {
    type: FETCH_POST,
    payload: promise
  }
}
