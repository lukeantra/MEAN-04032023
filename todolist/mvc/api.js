/* ~~~~~~~~~~~~~ Api ~~~~~~~~~~~~~ */
export const Api = (() => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const todoPath = 'todos';

  const getTodos = () => fetch([baseUrl, todoPath].join('/'))
    .then((response) => response.json());

  return {
    getTodos
  }; // <---------- Api
})();