import Joi from "joi";

class BaseDTO {
    static schema = Joi.object({});
    static validate(data) {
        const { error, value } = this.schema.validate(data, { abortEarly: false, stripUnknown: true });
        if (error) {
            return { errors: error.details.map(d => d.message).join('\n'), data: null };
        }
        return { errors: null, data: value };
    }
}
export default BaseDTO;