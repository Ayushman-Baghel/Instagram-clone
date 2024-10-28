import express from "express";
import { editProfile, follow_Unfollow, getProfile, getSuggestedUsers, login, logout, register } from "../controllers/user_controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/:id/profile').get(isAuthenticated, getProfile);
router.route('/profile/edit').post(isAuthenticated, upload.single('profilePhoto'), editProfile);
router.route('/suggested').get(isAuthenticated, getSuggestedUsers);
router.route('/follow_Unfollow/:id').post(isAuthenticated, follow_Unfollow);

export default router;