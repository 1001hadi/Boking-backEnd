import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from "../crudAndAuth/user.js";
// import { verifyAdmin, verifyUser } from "../handle/verifyToken.js";
import { verifyAdmin, verifyToken, verifyUser } from "../handle/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send(`Hello user, your loged in`);
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send(`Hello user, your loged in and can managge your account!`);
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send(`Hello Admin, your loged in and can managge all accounts!`);
// });

// CRUD Operation!
router.post("/", verifyUser, createUser);

router.put("/:id", verifyUser, updateUser);

router.delete("/:id", verifyUser, deleteUser);

router.get("/:id", verifyUser, getUser);

router.get("/", verifyAdmin, getAllUsers);

export default router;
