const sendErrorResponse = require("../helpers/sendErrorResponse");
const prisma = require("../prisma");

module.exports = {
  listAllEmployees: async (req, res) => {
    try {
      const { search = "", skip = 0, limit = 10 } = req.query;
      console.log(limit);

      if (typeof search !== "string") {
        return sendErrorResponse(res, 400, "Invalid search query");
      }

      const employees = await prisma.employee.findMany({
        where: {
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              email: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              phone: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              country: {
                contains: search,
                mode: "insensitive",
              },
            },
          ],
        },
        take: Number(limit),
        skip: (Number(skip) > 0 ? Number(skip) - 1 : 0) * Number(limit),
      });

      if (!employees) {
        return sendErrorResponse(res, 500, "Cannot find employees");
      }

      const totalEmployees = await prisma.employee.count();

      if (!totalEmployees) {
        return sendErrorResponse(res, 500, "Cannot Find TotalAmount");
      }

      res.status(200).json({
        success: true,
        employees,
        skip: skip,
        limit: limit,
        totalEmployees: totalEmployees,
      });
    } catch (error) {
      sendErrorResponse(res, 500, error);
    }
  },
};
