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

          .input('TenthOr12BoardName',sql.VarChar,req.body.TenthOr12BoardName)
          .input('PassingYear10th',sql.VarChar,req.body.PassingYear10th)
          .input('PassingYear12th',sql.VarChar,req.body.PassingYear12th)
          .input('PassingYearGradution',sql.VarChar,req.body.PassingYearGradution)
          .input('percentageOf10th',sql.VarChar,req.body.percentageOf10th)
          .input('percentageOf12th',sql.VarChar,req.body.percentageOf12th)
          .input('percentageOfGradution',sql.VarChar,req.body.percentageOfGradution)
          .input('streamsOf12th',sql.VarChar,req.body.streamsOf12th)
          .input('Gradution',sql.VarChar,req.body.Gradution)
          .input('streamsOfGradution',sql.VarChar,req.body.streamsOfGradution)

          .input('Complexion',sql.VarChar,req.body.Complexion)
          .input('Height',sql.VarChar,req.body.Height)
          .input('PersonalEmail',sql.VarChar,req.body.PersonalEmail)
          .input('PersonalPhone',sql.VarChar,req.body.PersonalPhone)
          .input('ParentPhone',sql.VarChar,req.body.ParentPhone)
          .input('Cast',sql.VarChar,req.body.Cast)
          .input('SubCast',sql.VarChar,req.body.SubCast)
          .input('Gender',sql.VarChar,req.body.Gender)
          
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

    
    async GetJob(req , res){
       
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.GetJobName)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }

    async Get10thOr12thBardName(req , res){
       
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.Get10thOr12thBardName)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }

    async GetUniversity(req , res){
       
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.GetUniversity)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }

    async GetGradutionStream(req , res){
       
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.GetGradutionStream)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
    
    async GetSkinType(req , res){
       
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.GetSkinType)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }

     async GetHeight(req , res){
       
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.GetHeight)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
    async GetCast(req , res){
       
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.GetCast)
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
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }

    async GetSubCastByCastId(req , res){
      console.log("GetSubCastByCastId call");
     try {

       if(req.body.CastId != null) {
         const pool = await poolPromise
           const result = await pool.request()
           .input('CastId',sql.VarChar , req.body.CastId)
           .query(queries.GetSubCastByCastId)
           res.json(result)
         } else {
           res.send('All fields are required!')
         }
     } catch (error) {
       res.status(500)
       res.send(error.message)
     }
   }
   async GetUserDetailsById(req , res){
    console.log("GetUserDetailsById call");
   try {

     if(req.body.RegId != null) {
       const pool = await poolPromise
         const result = await pool.request()
         .input('RegId',sql.VarChar , req.body.RegId)
         .query(queries.GetUserDetailsById)
         res.json(result)
       } else {
         res.send('All fields are required!')
       }
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

// declare @FirstName varchar(50)
// declare @LastName varchar(50)
// declare @BlockName varchar(50)

// set @FirstName ='ssddd'
// set @LastName ='Thakur'
// set @BlockName ='Sakra'

// select * from LS_Registration
// where FirstName=@FirstName
// or LastName=@LastName
// or [Block] =@BlockName