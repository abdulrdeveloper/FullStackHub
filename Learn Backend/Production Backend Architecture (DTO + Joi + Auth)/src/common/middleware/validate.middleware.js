import apiError from "../utils/api-error.js";

const validate = (dto) => {
    return (req, res, next) => {
        const { errors, data } = dto.validate(req.body);
        if (errors) {
            throw apiError.badRequest("Validation failed", errors);
        }
        req.body = data;
        next();
    };
}

export default validate;