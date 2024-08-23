class ApiError extends Error {
    constructor(statusCode,message="error",errors=[],stack="") {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
        this.data = null;
        this.message = message;
        this.success = false;
        if (stack){
            this.stack = stack;
        }
        else{
            Error.captureStackTrace(this, this.constructor);
        }

    }
    
    toJSON() {
        return {
            statusCode: this.statusCode,
            message: this.message,  
            errors: this.errors,
            data: this.data,
            success: this.success,
        };
    }
}
export {ApiError};