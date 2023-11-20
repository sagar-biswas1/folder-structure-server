const findAllServices = require("../../../../lib/services/findAllServices");

const findAll= async (req, res) => {
    const filter = req.query;
    
    const allServices= await findAllServices(filter)
    res.send(allServices);
}


module.exports = findAll
