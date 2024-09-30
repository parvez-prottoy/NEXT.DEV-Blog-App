import bcrypt from "bcrypt";
const users = [
  {
    userName: "Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    userName: "Parvez Ahmed",
    email: "parvez@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    userName: "Ratul Ahmed",
    email: "ratul@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
