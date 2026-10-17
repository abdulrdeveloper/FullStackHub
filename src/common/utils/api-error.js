class apiError extends Error {
    constructor(message, statusCode, isOperational = true) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        Error.captureStackTrace(this, this.constructor);
    }

    static badRequest(message = "Bad Request") {
        return new apiError(message, 400);
    }

    static unauthorized(message = "Unauthorized") {
        return new apiError(message, 401);
    }

    static notFound(message = "Not Found") {
        return new apiError(message, 404);
    }

    static internalServerError(message = "Internal Server Error") {
        return new apiError(message, 500);
    }

    static forbidden(message = "Forbidden") {
        return new apiError(message, 403);
    }

    static conflict(message = "Conflict") {
        return new apiError(message, 409);
    }

    static tooManyRequests(message = "Too Many Requests") {
        return new apiError(message, 429);
    }

    static validationError(message = "Validation Error", errors = []) {
        return new apiError(message, 422, errors);
    }

}

export default apiError;
