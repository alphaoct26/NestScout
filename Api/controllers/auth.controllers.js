import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

// this is resister
export const register = async(req, res) => {
    //db opreationcon
    const { username, email, password } = req.body;
    try {
        // hashing the password by bcrypt
        const hashpassword = await bcrypt.hash(password, 10);
        console.log(hashpassword);

        // creating a user which we in  db \

        const newuser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashpassword,
            },
        });
        console.log(newuser);
        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        console.log(err);
        res.status(201).json({ message: "user not created" });
    }
};

export const login = async(req, res) => {
    const { username, password } = req.body;
    try {
        // check user exists
        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user) return res.status(401).json({ message: "No user found" });
        // check password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid)
            return res.status(401).json({ message: "Invalid credential" });
        //genrate cookie token
        //res.setHeader("Set-Cookie", "test=" + "myValue").json({ message: "success" });

        const token = jwt.sign({
            id: user.id,
        });
        const age = 1000 * 60 * 60 * 24 * 7;
        res
            .cookie("test2", "myValue2", {
                httpOnly: true,
                maxAge: age,
                //secure: true;
            })
            .status(200)
            .json({ message: "login successful" });
    } catch (err) {
        console.log(first);
        res.status(500).json({ message: "failed to login" });
    }
};

export const logout = (req, res) => {};