const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNodeHandler } = require('./handler')

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Berhasil mengakses halaman ini'
    }
  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNodeHandler
  }
]

module.exports = routes
