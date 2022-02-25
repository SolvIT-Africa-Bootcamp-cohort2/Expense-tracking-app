const jwt = require("jsonwebtoken")

// Verify Token
const verifyToken = (req, res, next) =>{
    try{
        const bearerHeader = req.headers.authorization;
        const bearerToken = bearerHeader && bearerHeader.split(' ')[1];
        if (bearerHeader == null) return res.sendStatus(401);

        jwt.verify(bearerToken, process.env.SECRET, (err,user) =>{
        // console.log(err)
            if (err) return res.sendStatus(403);
            req.user = user;
            next();
        })
    }
    catch(err){
        console.log(err)
    }
  }

module.exports = { verifyToken }
