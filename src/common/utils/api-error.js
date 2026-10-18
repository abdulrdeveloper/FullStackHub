class apiError extends Error {
    constructor(message, statusCode, errors = [], isOperational = true) {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
        this.isOperational = isOperational;
        Error.captureStackTrace(this, this.constructor);
    }

    static badRequest(message = "Bad Request", errors = []) {
        return new apiError(message, 400, errors);
    }

    static unauthorized(message = "Unauthorized", errors = []) {
        return new apiError(message, 401, errors);
    }

    static notFound(message = "Not Found", errors = []) {
        return new apiError(message, 404, errors);
    }

    static internalServerError(message = "Internal Server Error", errors = []) {
        return new apiError(message, 500, errors);
    }

    static forbidden(message = "Forbidden", errors = []) {
        return new apiError(message, 403, errors);
    }

    static conflict(message = "Conflict", errors = []) {
        return new apiError(message, 409, errors);
    }

    static tooManyRequests(message = "Too Many Requests", errors = []) {
        return new apiError(message, 429, errors);
    }

    static validationError(message = "Validation Error", errors = []) {
        return new apiError(message, 422, errors);
    }

}

export default apiError;
