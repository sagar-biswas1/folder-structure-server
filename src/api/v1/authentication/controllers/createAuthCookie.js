const createToken = require("../../../../lib/authentication/createToken");

const createAuthCookie=(req,res,next)=>{
    try{
        const user = req.body;
    const token = createToken(user)

    res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    })
        .send({ success: true });
    }catch(err) {
        next(err)
    }


}

module.exports = createAuthCookie