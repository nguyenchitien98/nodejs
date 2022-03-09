const dataPath = './details/useraccount.json'
import fs from "fs";

// util functions 
const saveAccountData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}

// util functions 
const getAccountData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)    
}


export const readData = (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  }

export const postData = (req, res) => {
   
    var existAccounts = getAccountData()
    const newAccountId = Math.floor(100000 + Math.random() * 900000)
   
    existAccounts[newAccountId] = req.body
     
    console.log(existAccounts);

    saveAccountData(existAccounts);
    res.send({success: true, msg: 'account data added successfully'})
}

export const getAllData = (req, res) => {
    const accounts = getAccountData()
    res.send(accounts)
  }

export const updateData = (req, res) => {
    var existAccounts = getAccountData()
    fs.readFile(dataPath, 'utf8', (err, data) => {
     const accountId = req.params['id'];
     existAccounts[accountId] = req.body;
 
     saveAccountData(existAccounts);
     res.send(`accounts with id ${accountId} has been updated`)
   }, true);
 }

export const deleteData = (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
     var existAccounts = getAccountData()
 
     const userId = req.params['id'];
 
     delete existAccounts[userId];  
     saveAccountData(existAccounts);
     res.send(`accounts with id ${userId} has been deleted`)
   }, true);
 }