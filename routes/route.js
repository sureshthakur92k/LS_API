const express =  require('express');
const controller = require('../controller/controller')

const router = express.Router();
router.get('/api/getAllData', controller.getAllData);
router.post('/api/addNewData' , controller.addNewData);
router.put('/api/updateData',controller.updateData);
router.delete('/api/deleteData' , controller.deleteData);
//************************************************ */
router.get('/api/GelAllState' , controller.GelAllState);
router.post('/api/GetCityByState' , controller.GetCityByState);
router.post('/api/GetBlockByCity' , controller.GetBlockByCity);
router.post('/api/NewRegistraion' , controller.NewRegistraion);

module.exports = router;