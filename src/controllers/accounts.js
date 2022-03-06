let {accountModel} = require ('../models/Accounts')


const  createAccount = async (req, res)=> {
    const accounts = new accountModel ({
        accountName :req.body.accountName ,

    });
    try {

         await accounts.save();
        res.send ("Account is successfully created");
        console.log ("Account is successfully created");
    }
    catch (error) {
        console.log(error)
        res.status(401).send (error);
    }
};

// TO GET ALL ACCOUNTS

const getAccounts =async (req,res)=>{
    try {
        const accounts = await accountModel.find({});
    res.status(200).send(accounts);
    } catch (error) {
        res.status(404).send ("No accounts created yet")
    }
}

// TO GET SINGLE ACCOUNT BY ID  



const getOneAccount =async (req,res)=>{
    try {
        const id= req.params.id;
            const oneAccount= await accountModel.findOne({_id:id}) ;
            res.status(200).send(oneAccount);
    } catch (error) {
        res.send(`Account with ${id} is not found`) ;
    }
    
} 

// TO DELETE AN ACCOUNT BY ID 

const deleteAccount= async(req,res,next)=>{
    
    try {
        const id =req.params.id ;
        // const accountModel =
        await accountModel.deleteOne( {_id:id});
        
         res.status(200).send("Account is successfully deleted");
         console.log("Account is successfully deleted")
    } catch (error) {
        res.status(404).send(error) ;
    }

}






module.exports = {createAccount,getOneAccount,getAccounts,deleteAccount}; 
