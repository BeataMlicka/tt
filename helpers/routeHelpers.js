const Joi = require('joi');

module.exports = {

    validateBody: (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema);
            if (result.error) {
                return res.status(400).json(result.error);
            }

            if (!req.value) {
                req.value = {};
            }

            req.value['body'] = result.value;
            next();

            //req.value.body instead req.body
        }
    },

    schemas: {
        authenticationSchema: 
            Joi.object().keys({
                username: Joi.string().required(),
                email: Joi.string().email().required(),
                password: Joi.string().required()
        })
    }
}