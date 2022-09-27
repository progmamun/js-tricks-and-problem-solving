'use strict';

function fetchConcurrent() {
  const categories = fetch('https://fakestoreapi.com/products/categories').then(
    (res) => res.json()
  );

  const products = fetch('https://fakestoreapi.com/products').then((res) =>
    res.json()
  );

  const users = fetch('https://fakestoreapi.com/users').then((res) =>
    res.json()
  );

  return Promise.all([categories, products, users]);
}

fetchConcurrent().then((data) => console.log(data));
