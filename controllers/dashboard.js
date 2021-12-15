const router = require("express").Router();
const { Dashboard } = require("../models/Dashboard");

// POST FROM DASHBOARD TO HOMEPAGE
// ROUTE FROM DASHBOARD TO HOMEPAGE
router.get("/dashboard", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("dashboard");
});

router.post("/", (req, res) => {
  const { id, postTitle, postContent } = req.body;

  if (id && postTitle && postContent) {
    const newReview = {
      postTitle,
      postContent,
    };

    const response = {
      status: "success",
      body: newReview,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json("Error in posting review");
  }
});
module.exports = router;
