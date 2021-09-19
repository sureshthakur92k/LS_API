const { sql,poolPromise } = require('../database/db')
const fs = require('fs');
var rawdata = fs.readFileSync('./query/queries.json');
var queries = JSON.parse(rawdata);

class MainController {

    async getAllData(req , res){
       
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.getAllData)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
    async addNewData(req , res){
      try {
        if(req.body.name != null && req.body.email != null && req.body.password != null) {
          const pool = await poolPromise
          const result = await pool.request()
          .input('user',sql.VarChar , req.body.name)
          .input('email',sql.VarChar , req.body.email)
          .input('password',sql.VarChar,req.body.password)
          .query(queries.addNewUser)
          res.json(result)
        } else {
          res.send('Please fill all the details!')
        }
      } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    }

    //**********************************For New Registraion */

    async NewRegistraion(req , res){
      try {
        
          console.log("Controll call api");
        //FirstName,LastName,FatherName,GrandFatherName,Address1,Address2,[State],City,[Block]
          const pool = await poolPromise
          const result = await pool.request()
          .input('FirstName',sql.VarChar , req.body.FirstName)
          .input('LastName',sql.VarChar , req.body.LastName)
          .input('FatherName',sql.VarChar,req.body.FatherName)
          .input('GrandFatherName',sql.VarChar , req.body.GrandFatherName)
          .input('Address1',sql.VarChar , req.body.Address1)
          .input('Address2',sql.VarChar,req.body.Address2)
          .input('State',sql.VarChar , req.body.State)
          .input('City',sql.VarChar , req.body.City)
          .input('Block',sql.VarChar,req.body.Block)
          .query(queries.Registration)
          res.json(result)
        
      } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    }
    async updateData(req , res){
      try {
        if(req.body.password != null && req.body.name != null) {
        const pool = await poolPromise
          const result = await pool.request()
          .input('newPassword',sql.VarChar , req.body.password)
          .input('userName',sql.VarChar,req.body.name)
          .query(queries.updateUserDetails)
          res.json(result)
        } else {
          res.send('All fields are required!')
        }
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
    async deleteData(req , res){
      try {
        if(req.body.name != null ) {
          const pool = await poolPromise
            const result = await pool.request()
            .input('userName',sql.VarChar,req.body.name)
            .query(queries.deleteUser)
            res.json(result)
          } else {
            res.send('Please fill all the details!')
          }
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }

    /////************************************** */
    async GelAllState(req , res){
       
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.GelAllState)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
    async GetCityByState(req , res){
       console.log("GetCityByState call");
      try {

        if(req.body.StateId != null) {
          const pool = await poolPromise
            const result = await pool.request()
            .input('StateId',sql.VarChar , req.body.StateId)
            .query(queries.GetCityByState)
            res.json(result)
          } else {
            res.send('All fields are required!')
          }
        // const pool = await poolPromise
        //   const result = await pool.request()
        //   .query(queries.GetCityByState)
        //   res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }

    async GetBlockByCity(req , res){
       
      try {

        if(req.body.CityId != null) {
          const pool = await poolPromise
            const result = await pool.request()
            .input('CityId',sql.VarChar , req.body.CityId)
            .query(queries.GetBloclByCity)
            res.json(result)
          } else {
            res.send('All fields are required!')
          }
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
}

const controller = new MainController()
module.exports = controller;