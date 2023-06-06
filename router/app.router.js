const controller = require ("../controller/appcontroller");
const router= require("express").Router();

router.get("/portfolio",controller.portfolioAppRoute);
router.get("/testimonial", controller.testimonialAppRoute);

module.exports = router


