
const {Transaction} = require ('../models/Transaction')


    const getTransactions = async (req,res)=>{
        console.log("gfvgv")
    try {
        const transaction = await Transaction.find ({userId: req.user["id"] })
        if (transaction.length===0) {
           return res.status(204).send({Message:"No transaction currently"});
        }
        cocnsole.log("erjoghewnrv");
        res.status(404).send ({transaction:transaction})

        }catch (error){
             res.status(404).send({error:"No transaction were found"})
         }
        }

module.exports= {getTransactions} 