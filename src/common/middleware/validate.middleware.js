import { ApiError } from "../helpers/error.helper";

const validate = (dto) => {
    return (req, res, next) => {
        const { errors, data } = dto.validate(req.body);
        if (errors) {
            throw ApiError.badRequest(errors.join(": "));
        }
        req.body = data;
        next();
    };
}

export default validate;