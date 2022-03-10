
import T  from '../models/Transaction';

   export const getTransactions = async (req,res)=>{
    try {
        const transaction = await T.Transaction.find ({userId: req.user["id"] })
        if (transaction.length==0) {
           return res.status(204).send({Message:"No transaction currently"});
        }
        res.status(200).send ({transactions:transaction})

        }catch (error){
            //console.log(error)
             res.status(404).send({error:"No transactions were found"})
         }
        }
