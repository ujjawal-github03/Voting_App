const express = require("express");
const router = express.Router();
const User=require('../models/user');
// post route to login
router.post("/login", async (req, res) => {

});

// post route to signup a person
router.post("/signup", async (req, res) => {
  
});

// get route to see profile
router.post("/profile", async (req, res) => {

});

// put route to edit password
router.put("/profile/password", async (req, res) => {
  
});


// get route to see candidate list
router.get("/candidate", async (req, res) => {

});

// Parametrised API calls
router.get("/:workType", async (req, res) => {
  
});

router.put('/:id',async(req,res)=>
{
    
})

router.delete('/:id',async (req,res)=>
{

})

module.exports=router;
