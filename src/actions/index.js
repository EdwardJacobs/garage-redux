// TODO: add and export your own actions
const BASE_URL = 'https://wagon-garage-api.herokuapp.com';

export const FETCH_CARS = 'FETCH_CARS';

export function fetchCars(garage) {
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url)
    .then(r => r.json);

  return {
    type: FETCH_CARS,
    payload: promise
  };
}
