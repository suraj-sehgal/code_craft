const express = require('express');
const submissionController = require('../controllers/submissionController');

const router = express.Router();

router.post("/",submissionController.save);
router.get("/:username",submissionController.show);


module.exports = router;