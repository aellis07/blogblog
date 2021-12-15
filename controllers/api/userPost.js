const router = require("express").Router();
const { Dashboard } = require("../../models");
const authorization = require("../../utils/auth");

router.post("/", authorization, async (req, res) => {
  try {
    const newProject = await Dashboard.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject, {
      message: "Your message has been successfully posted!",
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", authorization, async (req, res) => {
  try {
    const projectData = await Dashboard.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res
        .status(404)
        .json({ message: "No blog found with this id! Please try again" });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
