import express from "express";
import {
    getUser,
    getUserFollowing,
    addRemoveFollowing,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);
router.get("/:id/following", verifyToken, getUserFollowing);

/* UPDATE */
router.patch("/:id/>followId", verifyToken, addRemoveFollow);

export default router;