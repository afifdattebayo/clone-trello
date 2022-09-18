const { body, param, validationResult } = require("express-validator")
const { Items, Todo } = require("../../db/models")


module.exports = {
    validateCreate: [
        body("name").notEmpty().withMessage("name is required "),
        body("TodoId")
            .notEmpty()
            .withMessage("todoId is required")
            .bail()
            .isNumeric()
            .withMessage("todoId must be number")
            .bail()
            .custom(async (value, { req }) => {
                const checking = await Todo.findOne({ where: { id: value } })
                if (checking === null) {
                    return Promise.reject()
                }
            })
            .withMessage("todoId not found"),
        (req, res, next) => {
            const error = validationResult(req)
            if (!error.isEmpty()) {
                return res.status(422).json({
                    message: "error",
                    error: error.array(),
                })
            }
            next();
        }
    ],
    validateOne: [
        param("id")
            .notEmpty()
            .withMessage("param id is reuired")
            .bail()
            .isNumeric()
            .withMessage("param id must be number")
            .bail()
            .custom(async (value, { req }) => {
                const checking = await Items.findOne({ where: { id: value } })
                if (checking === null) {
                    return Promise.reject()
                }
            })
            .withMessage("id not found in server"),
        (req, res, next) => {
            const error = validationResult(req)
            if (!error.isEmpty()) {
                return res.status(422).json({
                    message: "error",
                    error: error.array(),
                })
            }
            next();
        }
    ],
    validateUpdate: [
        param("id")
            .notEmpty()
            .withMessage("param id is required")
            .bail()
            .isNumeric()
            .withMessage("param id must be number")
            .bail()
            .custom(async (value, { req }) => {
                const checking = await Items.findOne({ where: { id: value } })
                if (checking === null) {
                    return Promise.reject()
                }
            })
            .withMessage("id not found in server"),
        body("name").notEmpty().withMessage("name is required"),
        (req, res, next) => {
            const error = validationResult(req)
            if (!error.isEmpty()) {
                return res.status(422).json({
                    message: "error",
                    error: error.array(),
                })
            }
            next();
        }

    ],
    validateMove: [
        param("id")
            .notEmpty()
            .withMessage("param id is required")
            .bail()
            .isNumeric()
            .withMessage("param id must be number")
            .bail()
            .custom(async (value, { req }) => {
                const checking = await Items.findOne({ where: { id: value } })
                if (checking === null) {
                    return Promise.reject()
                }
            })
            .withMessage("param id not found in server"),
        body("targetTodoId")
            .notEmpty()
            .withMessage("name is required")
            .bail()
            .isNumeric()
            .withMessage("tagetTodoId must be number")
            .bail()
            .custom(async (value, { req }) => {
                const checking = await Todo.findOne({ where: { id: value } })
                if (checking === null) {
                    return Promise.reject()
                }
            })
            .withMessage("targetTodoId not found in server"),
        (req, res, next) => {
            const error = validationResult(req)
            if (!error.isEmpty()) {
                return res.status(422).json({
                    message: "error",
                    error: error.array(),
                })
            }
            next();
        }

    ],
}
