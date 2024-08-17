import express from "express";
const router = express.Router(); // This is the express router

router.get("/test", (req, res) => {
    res.send("This is a test route");
});
router.post("/test", (req, res) => {
    res.send("This is a test route");
});
router.put("/test", (req, res) => {
    res.send("This is a test route");
});
router.delete("/test", (req, res) => {
    // this is for remove data
    res.send("This is a test route");
});
export default router;