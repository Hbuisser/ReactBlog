export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';

export function fetchPost(id) {
  const ROOT_URL = `http://reduxblog.herokuapp.com/api/posts/${id}`;
  const API_KEY = 'WAGON-BLOG';
  const promise = fetch(`${ROOT_URL}?key=${API_KEY}`)
    .then(response => response.json());
  return {
    type: FETCH_POST,
    payload: promise
  }
}

export function fetchPosts() {
  const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
  const API_KEY = 'WAGON-BLOG';
  const promise = fetch(`${ROOT_URL}?key=${API_KEY}`)
    .then(response => response.json());
  return {
    type: FETCH_POSTS,
    payload: promise
  }
}
