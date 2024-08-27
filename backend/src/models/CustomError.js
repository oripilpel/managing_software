
/**
 * @description - class representing error structure
 * @param title - short title for that error
 * @param status - status for error
 * @param detail - detail version of that error
 * @param stack - stack trace if exists
 */

module.exports = class CustomError {
    constructor(title, status, detail, stack) {
        this.title = title
        this.status = parseInt(status)
        this.detail = detail
        this.stack = stack
    }
}