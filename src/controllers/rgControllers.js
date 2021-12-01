const Registration = require("../models/Registration");

const messageError = (res, error) => {
    res.status(500).send({message: error.message})
}


const createVaccinated = async (req, res) =>{
    const {name, expected_date, vaccinated} = req.body
    try{
        const rgvax = await Registration.create({name, expected_date, vaccinated})
        console.log(`Vacina ${rgvax.name} foi cadastrada com sucesso`)
        res.status(201).send(rgvax)
    }catch (error) {
        messageError(res, error)

    }
} 

const getAllVaccinated = async (req, res) =>{
    const vaccinated = req.query.vaccinated
    try{
        const where = vaccinated ? {where: {vaccinated}}: {}
        const rgvax = await Registration.findAll(where)
        if (rgvax && rgvax.length >0) {
            res.status(200).send(rgvax)
        }else {
            res.status(204).send()
        }
    }catch (error){
        messageError(res, error)

    }
}

const getVaccinated = async (req, res ) =>{
    const vaccinatedId = req.params.id
  try {
    const rgvax = await Registration.findOne({
        where: { id: vaccinatedId } 
    })
    if (rgvax){
        res.status(200).send(rgvax)
    } else {
        res.status(404).send({message: `vacina de id ${vaccinatedId} nao localizada`})
          }
   }catch (error){
    messageError(res, error)
   }
}

const updateVaccinated = async (req, res) =>{
    const vaccinatedId = req.params.id
    const vaccinated = req.body.vaccinated
    try{
        const updateRows = await Registration.update ({vaccinated}, {where: {id: vaccinatedId }})
        if (updateRows && updateRows [0] > 0){
            res.status(200).send({ message: `${updateRows[0]} voce ja foi imunizado com esta vacina`})
        }else{
            res.status(404).send({message: `vacina ${vaccinatedId} nao consta como consumida`})
        }
    }catch (error){
        messageError(res, error)

    }
}






module.exports = {
    createVaccinated,
    getAllVaccinated,
    getVaccinated,
    updateVaccinated 
}