import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
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

export const login = (req, res) => {

    const { username, password } = req.body;
};

export const logout = (req, res) => {};