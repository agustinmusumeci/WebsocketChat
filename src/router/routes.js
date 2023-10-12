import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    const info = {
        title:"WEBSOCKET-CHAT 1.0"
    }
    res.render("index", info )
});

export default router;