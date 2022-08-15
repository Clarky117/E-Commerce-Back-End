const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      { model: Product }
    ]
  }).then((categories) => {
    res.status(200).json(categories)
  }).catch((error) => {
    console.log(error);
    res.status(500).json({
      error: "We have encountered an error. Please try again later."
    })
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id, {
    include: [
      {
        model: Product,
        attributes: ['product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
    // .then(category => res.json(category))
    .then((category) => {
      if (!category) {
        res.status(404)
          .json({
            message: 'There is no category at this id'
          });
        return;
      }
      res.status(200).json(category)
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: "We have encountered an error. Please try again later."
      })
    })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  }).then(category => {
    res.status(200).json(category)
  })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: "We have encountered an error. Please try again later."
      })
    })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name: req.body.category_name
  }, {
    where: {
      id: req.params.id
    }
  }).then((category => {
    if (!category) {
      res.status(404)
        .json({
          message: 'There is no category at this id'
        });
      return;
    }
    res.status(200).json(category)
  }
  ))
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: "We have encountered an error. Please try again later."
      })
    })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then((category) => {
    if (!category) {
      res.status(404)
        .json({
          message: 'There is no category at this id'
        });
      return;
    }
    res.status(200).json(category)
  }).catch((error) => {
    console.log(error);
    res.status(500).json({
      error: "We have encountered an error. Please try again later."
    })
  })
});

module.exports = router;
