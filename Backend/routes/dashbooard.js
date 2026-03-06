const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/stats", async (req, res) => {
  try {

    const totalBuyers = await User.countDocuments({ role: "buyer" });
    const totalPartners = await User.countDocuments({ role: "partner" });
    const totalDevelopers = await User.countDocuments({ role: "developer" });

    res.json({
      buyers: totalBuyers,
      partners: totalPartners,
      developers: totalDevelopers
    });

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;