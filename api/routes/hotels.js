import express from "express";
import Hotel from "../models/Hotel.js";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../crudAndAuth/hotel.js";
import { verifyAdmin } from "../handle/verifyToken.js";

const router = express.Router();

// CRUD Operation!
router.post("/", verifyAdmin, createHotel);

router.put("/:id", verifyAdmin, updateHotel);

router.delete("/:id", verifyAdmin, deleteHotel);

router.get("/:id", getHotel);

router.get("/", getAllHotels);

export default router;
