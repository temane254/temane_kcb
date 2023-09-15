
const mpesaExpress = async (req, res, next) => {
    try {
        res.send({ message: 'Done' })
    } catch (error) {
        next(error);
    }
}

module.exports = mpesaExpress