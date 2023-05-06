const jwt = require('jsonwebtoken');
const MY_SECRET = "MehdiAdeliTosinsoSecret"
const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    if (!token) return res.status(403).send("a token is required for authentication");
    try {


        const decoded = jwt.verify(token, MY_SECRET);
        req.body.email = decoded.email;
    } catch (err) {
        return res.status(401).send('Invalid token');
    }
    next();
}
module.exports = verifyToken