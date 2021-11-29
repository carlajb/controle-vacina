const express = require("express")
const router = express.Router()

router.get("/", function (req, res){
    res.status(200).send({
        teste: "Meu teste respondendo minha rota index",
    })
})

module.exports = router;