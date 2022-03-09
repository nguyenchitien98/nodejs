import express from "express";
import {readData, postData, getAllData, updateData, deleteData} from '../controllers/account.js';
const accountRoutes = express.Router();


// reading the data
accountRoutes.get('/account',readData );

// create the accounta
accountRoutes.post('/account/addaccount',postData );

// Read - get all accounts from the json file
accountRoutes.get('/account/list', getAllData);

// Update - using Put method
accountRoutes.put('/account/:id', updateData);

//delete - using delete method
accountRoutes.delete('/account/delete/:id', deleteData);

export default accountRoutes;