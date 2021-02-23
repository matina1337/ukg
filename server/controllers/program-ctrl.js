
const Program = require('../models/program-model')

createProgram = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide program information',
        })
    }

    const program = new Program(body)

    if (!program) {
        return res.status(400).json({ success: false, error: err })
    }

    program
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: program._id,
                message: 'Program created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Program not created!',
            })
        })
}

updateProgram = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Program.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Program not found!',
            })
        }
        program.name = body.name
        program.type = body.type
        program.song = body.song
        program
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: program._id,
                    message: 'Program updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Program not updated!',
                })
            })
    })
}

deleteProgram = async (req, res) => {
    await Program.findOneAndDelete({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!program) {
            return res
                .status(404)
                .json({ success: false, error: `Program not found` })
        }

        return res.status(200).json({ success: true, data: program })
    }).catch(err => console.log(err))
}

getProgramById = async (req, res) => {
    await Program.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!program) {
            return res
                .status(404)
                .json({ success: false, error: `Program not found` })
        }
        return res.status(200).json({ success: true, data: program })
    }).catch(err => console.log(err))
}

getPrograms = async (req, res) => {
    await Program.find({}, (err, movies) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!program.length) {
            return res
                .status(404)
                .json({ success: false, error: `Program not found` })
        }
        return res.status(200).json({ success: true, data: program })
    }).catch(err => console.log(err))
}

module.exports = {
    createProgram,
    updateProgram,
    deleteProgram,
    getPrograms,
    getProgramById,
}