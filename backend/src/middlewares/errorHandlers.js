const CustomError = require('../models/CustomError')

/**
 * @description - middleware to handle route not found error  
 * @param {*} req - express request object
 * @param {*} res - express response object
 * @param {*} next - express next middleware
 */
const errorNotFound = (req, res, next) => {
    const err = new CustomError('Route not found', 404, `Requested route ${req.url} not found on server`);
    res.status(404).json(err)

}

/**
 * 
 * @param {*} e - error from controller hopfully in CustomError format
 * @param {*} req - express request object
 * @param {*} res - express response object
 * @param {*} next - express next middleware
 */
const errorMiddleware = (e, req, res, next) => {
    if (!(e instanceof CustomError)) {
        e = new CustomError('Unhandled error', e.status || 500, e.message, e.stack)
    }
    res.status(e.status).json(e)
}
module.exports = {
    errorNotFound,
    errorMiddleware
}