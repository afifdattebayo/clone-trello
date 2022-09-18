const { Todo, Items } = require("../../db/models")

module.exports = {
    getAll: async (req, res, next) => {
        try {
            console.info("getall");
            const result = await Todo.findAll({
                attributes: ['id', 'name'],
                include: {
                    model: Items,
                    attributes: ['id', 'name', 'TodoId']
                }
            })
            res.status(200).json({
                message: "success",
                data: result
            })
        } catch (error) {
            next(error)
        }
    },
    create: async (req, res, next) => {
        try {
            const { name } = req.body
            const result = await Todo.create({ name })
            res.status(201).json({
                message: "success",
                data: result
            })

        } catch (error) {
           next(error)

        }
    },
    getOne: async (req, res, next) => {
        try {
            console.info("getone");
            const { id } = req.params
            const result = await Todo.findOne({
                where: { id }
            })
            res.status(200).json({
                message: "success",
                data: result
            })

        } catch (error) {
           next(error)

        }
    },
    update: (req, res, next) => {
        const { id } = req.params
        const { name } = req.body
        Todo.findOne({
            where: { id }
        }).then((todo) => {
            todo.update({ name }).then(() => {
                res.status(201).json({
                    message: "success",
                    data: todo
                })
            }).catch((err) => {
                next(err)
            })
        }).catch((error) => {
           next(error)
        })
    },
    destroy: (req, res, next) => {
        const { id } = req.params
        Todo.findOne({ where: { id } }).then((todo) => {
            todo.destroy().then(() => {
                res.status(201).json({
                    message: "success deleted",
                    data: todo
                })
            }).catch((err) => {
                next(err)
            })
        }).catch((err) => {
            next(error)
        })
    }
}