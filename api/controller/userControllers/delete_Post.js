let models = require("../../model/models");
module.exports = (reqBody, res) => {
    models.Post.remove({ _id: reqBody}, (err) => {
        if (err) {
            res.status(200).send({ error: { body: err, status: true }, success: false })
        } else {
            res.status(200).send({ error: false, success: true })
        }
    })

}
