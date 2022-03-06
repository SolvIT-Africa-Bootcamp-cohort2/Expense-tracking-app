import { verify } from "jsonwebtoken";

// Verify Token
export function verifyToken(req, res, next){
    try{
        const bearerHeader = req.headers.authorization;
        const bearerToken = bearerHeader && bearerHeader.split(' ')[1];
        if (bearerHeader == null) return res.status(401).send({Message:"Unauthorized"});

        verify(bearerToken, process.env.SECRET, (err,user) =>{
        // console.log(err)
            if (err) return res.status(403).send({Message:"Invalid token"});
            req.user = user;
            next();
        })
    }
    catch(err){
        //console.log(err)
        res.status(500).send({Message:"Problem verifying token"})
    }
  }

