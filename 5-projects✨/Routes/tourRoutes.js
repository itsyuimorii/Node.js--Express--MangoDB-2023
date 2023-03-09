const express = require('express');

const tourController = require('./../controllers/tourController');

const router = express.Router();

//
router.param('id', (req, res, next, val) => {
  console.log(`Tour id is: ${id}`);
  next();
});

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.createTour)
  .delete(tourController.deleteTour);

module.exports = router;
