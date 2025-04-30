// File that contains functions to handle errors in the API controllers

const {Types} = require('mongoose');

// Entry ID validation
async function IDChecker(id, res, docName) {
    // If the id is not valid
    isvalid = Types.ObjectId.isValid(id);

    // If the id is not valid
    if (!isvalid) {
        res.status(400).json({Message: `El ID del ${docName} no es válido.`}); 
        return false
    }
    return true; // If it is valid
}



// Entry body validation
async function BodyChecker(body, res, docName) {
    // If the body is empty
    if (Object.keys(body).length === 0) {
        res.status(400).json({Message: `El cuerpo del ${docName} tiene una llave vacía.`});  
        return false // Empty
    }
    return true // Not empty
}



// Object found validation
async function ObjectChecker(doc, res, docName, action) {
    // If the object dosent exist
    if (!doc){
        return res.status(404).json({Message: `El ${docName} no fue encontrado.`});  
    }
    else { // If it does
        return res.status(200).json({Message: `${docName} ${action}.`, Results: doc})
    }
}

module.exports = {IDChecker, ObjectChecker, BodyChecker}