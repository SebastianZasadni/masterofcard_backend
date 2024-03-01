import { Router } from "express";
import loginGuest from "../controllers/auth/loginGuest";
import logout from "../controllers/auth/logout";
import auth from "../middleware/auth";
const router = Router();

router.post("/loginGuest", loginGuest);
router.get("/logout", auth, logout);
// router.get("current", auth, current);

export default router;
