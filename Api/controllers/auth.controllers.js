import bcrypt from "bcrypt";
export const register = async(req, res) => {
    //db opreationcon
    const { username, email, password } = req.body;
    // hashing the password by bcrypt
    const hashpassword = await bcrypt.hash(password, 10);
    console.log(hashpassword);

    // creating a user which we in  db \
};
export const login = (req, res) => {};

export const logout = (req, res) => {};