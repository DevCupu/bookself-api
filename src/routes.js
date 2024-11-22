const {
  addBookHandler, getAllBooksHandler, getDetailBooksById, editBooksHandler, deleteBooksHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },

  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },

  {
    method: 'GET',
    path: '/books/{id}',
    handler: getDetailBooksById,
  },

  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBooksHandler,
  },

  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBooksHandler,
  },
];

module.exports = routes;
