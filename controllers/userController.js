const { compare, hash } = require("bcryptjs");
const prisma = require("../prisma/index");
const cookieToken = require("../helpers/cookieToken");
const sendErrorResponse = require("../helpers/sendErrorResponse");
const {
  userSignupSchema,
  userLoginSchema,
} = require("../validations/user.schema");

module.exports = {
  // signup or register controller => /api/v1/users/signup
  doSignup: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const { _, error } = userSignupSchema.validate(req.body);

      if (error) {
        return sendErrorResponse(
          res,
          400,
          error.details ? error?.details[0]?.message : error.message
        );
      }
      // check whether the user exist
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (user) {
        return sendErrorResponse(res, 400, "Email already exists");
      }

      // hash the password
      const hashedPassowrd = await hash(password, 8);

      // create new user
      const newUser = await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: hashedPassowrd,
        },
      });

      // send user a token
      cookieToken(newUser, res);
    } catch (err) {
      sendErrorResponse(res, 500, err);
    }
  },
  // login user => /api/v1/users/login
  doLogin: async (req, res) => {
    try {
      const { email, password } = req.body;

      const { _, error } = userLoginSchema.validate(req.body);

      if (error) {
        return sendErrorResponse(
          res,
          400,
          error.details ? error?.details[0]?.message : error.message
        );
      }

      // check whether the user exist
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (!user) {
        return sendErrorResponse(res, 400, "Invalid email");
      }

      // checking whether the password matches
      const isMatch = await compare(password, user.password);
      if (!isMatch) {
        return sendErrorResponse(res, 400, "Invalid Password");
      }

      // send user a token
      cookieToken(user, res);
    } catch (err) {
      sendErrorResponse(res, 500, err);
    }
  },
  // getting user account
  getUserAccount: async (req, res) => {
    try {
      res.status(200).json({ ...req.user, password: undefined });
    } catch (err) {
      sendErrorResponse(res, 500, err);
    }
  },
};
