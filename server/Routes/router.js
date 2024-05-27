import express from "express";
const router = express.Router();
import * as controllers from "../Controllers/usersControllers.js";
import upload from "../multerconfig/storageConfig.js";



router.post("/user/register", upload.single("user_profile"), controllers.userpost);
router.get("/user/details", controllers.userget);
router.get("/user/:id", controllers.singleuserget);
router.put("/user/edit/:id", upload.single("user_profile"), controllers.useredit);
router.delete("/user/delete/:id", controllers.userdelete);
router.put("/user/status/:id", controllers.userstatus);
router.get("/userexport", controllers.userExport);

export default router;