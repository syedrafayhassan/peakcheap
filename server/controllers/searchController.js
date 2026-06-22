
const ebayService = require('../services/ebayService')

exports.search = async (req, res) =>{
    try {
        const {query } = req.query

        if(!query) {
            return res.status(400).json({
                error: 'Please provide a search query' 
            })
        }

        const ebayProducts = await ebayService.search(query)
        const sorted = ebayProducts.sort((a,b) => a.price - b.price)

        res.json(sorted)

    } catch(error){
        res.status(500).json({error: error.message})
    }

}