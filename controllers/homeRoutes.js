const router = require("express").Router();
// const withAuth = require("../utils/auth");
const { User } = require("../models/User");
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  console.log("login successful");
  res.render("login");
});

// GET all post for homepage
router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      // galleries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one post
router.get("/post/:id", async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    // If the user is logged in, allow them to view the gallery
    try {
      const dbGalleryData = await Gallery.findByPk(req.params.id, {
        include: [
          {
            model: Painting,
            attributes: [
              "id",
              "title",
              "artist",
              "exhibition_date",
              "filename",
              "description",
            ],
          },
        ],
      });
      const gallery = dbGalleryData.get({ plain: true });
      res.render("gallery", { gallery, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

module.exports = router;
