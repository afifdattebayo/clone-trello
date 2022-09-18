const { Todo, Items } = require("../../db/models")

module.exports = {
    create: async (req, res, next) => {
        try {
            const { name, TodoId } = req.body
            const result = await Items.create({ name, TodoId })
            res.status(201).json({
                message: "success",
                data: result,
            })
        } catch (error) {
            next(error)
        }
    },
    getOne: async (req, res, next) => {
        try {
            const { id } = req.params
            const result = await Items.findOne({ where: { id } })
            res.status(201).json({
                message: "success",
                data: result,
            })
        } catch (error) {
            next(error)
        }
    },
    update: (req, res, next) => {
        const { id } = req.params
        const { name } = req.body
        Items.findOne({ where: { id } }).then((item) => {
            item.update({ name }).then(() => {
                res.status(201).json({
                    message: "success",
                    data: item,
                })
            }).catch((error) => {
                next(error)
            })
        }).catch((error) => {
            next(error)
        })
    },
    destroy: (req, res, next) => {
        const { id } = req.params
        Items.findOne({ where: { id } }).then((item) => {
            item.destroy().then(() => {
                res.status(200).json({
                    message: "success deleted",
                    data: item,
                })
            }).catch((error) => {
                next(error)
            })
        }).catch((error) => {
            next(error)
        })
    },
    move: async (req, res, next) => {
        try {
            const { id } = req.params
            const { targetTodoId } = req.body
            const result = await Items.findOne({ where: { id } })
            result.TodoId = targetTodoId
            await result.save()
            res.status(201).json({
                message:"success",
                data: result
            })
        } catch (error) {
            next(error)
        }
    }
}