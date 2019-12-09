const adminController = require('../controller/adminController')
const middleware = require('../middleware/middleware')

module.exports = app => {
    app.get('/add-murid', adminController.addMurid)
    app.post('/save-murid', adminController.SaveMurid)
    app.get('/', adminController.index)
    app.get('/data-murid', adminController.dataMurid)
    app.get('/login', adminController.login)
    app.post('/proses', middleware.validate_user, adminController.proses)
    app.get('/edit-murid/:id', adminController.editMurid)
    app.post('/update-murid/:id', adminController.updateMurid)
    app.get('/delete-murid/:id', adminController.deleteMurid)
}