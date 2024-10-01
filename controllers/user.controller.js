const User = require("../models/user.model");

exports.createUser = async (req, res) => {
    try {
        const { name, lastName, email, phoneNumber } = req.body;
        const response = await User.create({ name, lastName, email, phoneNumber });

        res.status(200).json({
            success: true,
            data: response,
            massage: "Entry are Created Successfully",
        });
    } catch (err) {
        console.error(err);
        console.log(err.message);
        res.status(500).json({
            success: false,
            data: "Internal Server Error",
            massage: err.message,
        });
    }
};
