const {accountModel} = require ('../models/Accounts')


const  createAccount = async (req, res )=> {
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




module.exports = {createAccount}; 
