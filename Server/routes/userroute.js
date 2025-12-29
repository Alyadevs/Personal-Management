const express = require("express");
const router = express.Router();
const usercontroller = require("../controller/usercontroller");

router.post("/", usercontroller.createUser);    
router.get("/", usercontroller.getUsers);        
router.get("/:id", usercontroller.getUserById); 
router.put("/:id", usercontroller.updateUser);   
router.delete("/:id", usercontroller.deleteUser);

module.exports = router;
