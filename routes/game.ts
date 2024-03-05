import { Router } from "express";
import auth from "../middleware/auth";
import createGame from "../controllers/game/createGame";
import getListGames from "../controllers/game/getListGames";
const router = Router();

router.post("/createGame", auth, createGame);
router.post("/getListGames", auth, getListGames);

export default router;
