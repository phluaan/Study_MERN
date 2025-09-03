require('dotenv').config();
const jwt = require('jsonwebtoken');

const auth = (req, res, next)=> {
    const whitelist = ["/", "/register", "/login"];
    if(whitelist.find(item => '/v1/api' + item === req.originalUrl)){
        next();
    } else {
        if (req?.headers?.authorization?.split(' ')?.[1]){
            const token = req.headers.authorization.split(' ')[1];
            try{
                const decoded = jwt.verify(token,process.env.JWT_SECRET);
                req.user = {
                    email: decoded.email,
                    name: decoded.name,
                    createdBy: "Luan"
                }
                console.log(">>> check token:", decoded)
                next();
            } catch(error){
                return res.status(401).json({
                    message: "Token is not valid"
                })
            }
        } else{
            return res.status(401).json({
                message: "You are not authenticated"
            })
        }
    }
}

module.exports = auth;