const jwt = require("jsonwebtoken");
const  sendErrorResponse = require("../helpers/sendErrorResponse");
const prisma = require("../prisma");

const userAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const user = await prisma.user.findUnique({
            where: {
                id: decode.id,
            }
        });

        if (!user) {
            return sendErrorResponse(res, 401, "Invalid Token");
        }

        req.user = user;
        next();
    } catch (err) {
        sendErrorResponse(res, 401, err);
    }
};

module.exports = userAuth;
