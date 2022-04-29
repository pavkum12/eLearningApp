const bcrypt = require('bcrypt');
const User = require('../model/schema');
const Admin = require('../model/admin')
const jwt = require('jsonwebtoken');
const { Mongoose } = require('mongoose');
const Course = require('../model/course');
const Update = require('../model/update');
const update = require('../model/update');

// controller for register
exports.registerUser = async (req, res) => {
    try {

        // validate request
        if (!req.body) {
            res.status(406).json({ err: "You have to fill the registration form" });
            return
        }

        let { email, password, passwordCheck, username } = req.body

        if (!email || !password || !passwordCheck)
            return res.status(406).json({ err: "Not all fields have been entered" })
        if (password.length < 8)
            return res.status(406).json({ err: "The Password need to be at least 8 characters long" })
        if (password !== passwordCheck)
            res.status(406).json({ err: "Password must be same for varification" });

        // hashing password
        const hash = await bcrypt.hashSync(password, 10)

        // using document structure
        const newUser = new User({
            email,
            password: hash,
            username
        })

        newUser
            .save(newUser)
            .then(register => {
                res.json(register)
            })
            .catch(error => {
                res.status(406).json({ err: error.message || "Something went wrong while registration" })
            })
    } catch (error) {
        res.status(500).json({ err: error.message || "Error while registration" })
    }
};

// controller for login
exports.login = async (req, res) => {

    try {

        // validate request
        if (!req.body) {
            res.status(406).json({ err: "You have to fill the email and password" })
            return;
        }

        // get user data
        const { email, password } = req.body

        // validation
        if (!email || !password)
            return res.status(406).json({ err: "Not all fields have been entered" })

        const user = await User.findOne({ email });
        if (!user)
            return res.status(406).json({ err: "No account with this email." })

        // compare the password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(406).json({ err: "Invalid Credentials" });

        // create jwt token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

        res.json({ token, username: user.username, email: user.email })

    } catch (error) {
        res.status(500).json({ err: error.message || "Error while Login" })
    }
};

exports.admin = async (req, res) => {

    try {
        console.log("In admin controller");
        if (!req.body) {
            res.status(406).json({ err: "You have to fill the email and password" })
            return;
        }
        const { email, password } = req.body
        if (!email || !password)
            return res.status(406).json({ err: "Not all fields have been entered" })


        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(406).json({ err: "No account with this email." })
        }
        // compare the password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(406).json({ err: "Invalid Credentials" });

        // create jwt token
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET)
        res.json({ token, username: admin.username, email: admin.email })


    } catch (error) {
        res.status(500).json({ err: error.message || "Error while Login" })
    }
};

// delete user controller
exports.delete = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user_id)
        res.json({ msg: "User Deleted Successfully...!" });
    } catch (error) {
        res.status(500).json({ err: error.message || "Error while deleting user" })
    }
}


exports.addCourse = (req, res) => {
    try {
        const { title, description, category, imageUrl, fileUrl } = req.body

        const addcourse = new Course({
            title,
            description,
            category,
            imageUrl,
            fileUrl
        });

        addcourse.save(addcourse)
            .then(addedCourse => {
                res.json(addedCourse)
            })
            .catch(error => res.status(406).json({ err: error || "Error while adding course" }))


    }
    catch (err) {
        res.status(500).json({ error: err || "Error in Add Course URL" })
    }
}
exports.addUpdate = (req, res) => {
    try {
        const { noti } = req.body

        const addUpdate = new Update({
            noti,
        });

        addUpdate.save(addUpdate)
            .then(addedCourse => {
                res.json(addUpdate)
            })
            .catch(error => res.status(406).json({ err: error || "Error while adding course" }))


    }
    catch (err) {
        res.status(500).json({ error: err || "Error in Add Course URL" })
    }
}

exports.getCourse = (req, res) => {
    try {
        Course.find().then(course => {
            if (!course) {
                res.status(406).json({ msg: "No courses available" })
            }
            res.json({ courseList: course });
        })

    } catch (error) {
        res.status(500).json({ error: error || "Cant get Courses" })
    }
}

exports.getUpdate = (req, res) => {
    try {
        update.find().then(update => {
            if (!update) {
                res.status(406).json({ msg: "No courses available" })
            }
            res.json({ updateList: update });
        })

    } catch (error) {
        res.status(500).json({ error: error || "Cant get Courses" })
    }
}