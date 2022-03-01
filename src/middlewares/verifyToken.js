import { verify } from "jsonwebtoken";

// Verify Token
export function verifyToken(req, res, next){
    try{
        const bearerHeader = req.headers.authorization;
        const bearerToken = bearerHeader && bearerHeader.split(' ')[1];
        if (bearerHeader == null) return res.sendStatus(401);

        verify(bearerToken, process.env.SECRET, (err,user) =>{
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

