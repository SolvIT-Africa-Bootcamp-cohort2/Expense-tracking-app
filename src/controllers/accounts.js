const {Account} = require ('../models/Accounts').default

// TO CREATE ACCOUNT


const  createAccount = async (req, res)=> {
   const  {accountName} = req.body

    const accounts = new Account ({
        accountName,userId : req.user["id"]

    })
    try {

        await accounts.save();
        res.send ({Message:"Account is successfully created"});
        // console.log ("Account is successfully created");
    }
    catch (error) {
        // console.log(error)
        res.status(401).send ({error:error});
    }
};

// TO GET ALL ACCOUNTS

const getAccounts =async (req,res)=>{
    try {
        const accounts = await Account.find({userId : req.user ["id"] });
    res.status(200).send({accounts:accounts});
    } catch (error) {
        // console.log(error);
        res.status(404).send ({Message:"No account created yet"})
    }
}

// TO GET SINGLE ACCOUNT BY ID  



const getOneAccount =async (req,res)=>{
    try {
        const id= req.params.id;
            const oneAccount= await Account.findOne({_id:id}) ;
            if(oneAccount){
                res.status(200).send({account:oneAccount});
            } 
    } catch (error) {
        res.send(`Account with id:${req.params.id} is not found`) ;
    }
    
} 

// TO DELETE AN ACCOUNT BY ID 

const deleteAccount= async(req,res,next)=>{
    
    try {
        const id =req.params.id ;
        
        await Account.deleteOne( {_id:id});
        
         res.status(200).send({Message:"Account is successfully deleted"});
        //  console.log("Account is successfully deleted")
    } catch (error) {
        res.status(404).send({Message:"Account can't be found"}) ;
    }

}

//TO UPDATE ACCOUNT BY ID

const updateAccount =async (req,res)=>{
     try {
        const id = req.params.id;
        let {accountName} = req.body ;
        let account =await Account.findOne({_id:id});
        if(account){
            if (accountName) account.accountName = accountName ;
            await account.save();
            res.status(200).send({Message:"Account is updated"});
            // console.log("Account updated");
        } else {
            res.send ({Message:"Account not found"})
        }
     } catch (error) {
        res.status(404).send({error:"USER CAN'T BE FOUND"});
     }
    
 
}






module.exports = {createAccount,getOneAccount,getAccounts,deleteAccount,updateAccount}; 
