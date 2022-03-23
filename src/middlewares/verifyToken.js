import { verify } from "jsonwebtoken";

// Verify Token
exports.verifyToken = (req, res, next) => {
  try {
    const bearerHeader = req.headers.authorization;
    const bearerToken = bearerHeader && bearerHeader.split(" ")[1];
    if (bearerHeader == null)
      return res.status(401).send({ Message: "Unauthorized" });

    verify(bearerToken, process.env.SECRET, (err, user) => {
      // console.log(err)
      if (err) {
        return err["name"] == "TokenExpiredError"
          ? res.status(400).send({ Message: "JWT token has expired" })
          : res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } catch (err) {
    res.status(500).send({ Message: "Problem verifying user token" });
  }
};
