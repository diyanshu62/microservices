module.exports = (app) => {
    const login = require('../ctrl/note.ctrl.js');

    // Create a new Note
    app.post('/login', login.create);

    // Retrieve all Notes
    app.get('/login', login.findAll);

    // Retrieve a single Note with noteId
    app.get('/login/:noteId', login.findOne);

    // Update a Note with noteId
 app.put('/login/:noteId', login.update);

    // Delete a Note with noteId
    app.delete('/login/:noteId', login.delete);
}