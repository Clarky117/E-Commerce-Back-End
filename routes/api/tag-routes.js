const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id'],
      as: 'products'
    }
  }).then((tags) => {
    res.status(200).json(tags)
  }).catch((error) => {
    console.log(error);
    res.status(500).json({
      error: "We have encountered an error. Please try again later."
    })
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, {
    include: [
      {
        model: Product,
        attributes: ['product_name', 'price', 'stock', 'category_id'],
      }
    ]
  })
    // .then(category => res.json(tag))
    .then((tag) => {
      if (!tag) {
        res.status(404)
          .json({
            message: 'There is no tag at this id'
          });
        return;
      }
      res.status(200).json(tag)
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: "We have encountered an error. Please try again later."
      })
    })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  }).then(tag => {
    res.status(200).json(tag)
  })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: "We have encountered an error. Please try again later."
      })
    })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    tag_name: req.body.tag_name
  }, {
    where: {
      id: req.params.id
    }
  }).then((tag => {
    if (!tag) {
      res.status(404)
        .json({
          message: 'There is no tag at this id'
        });
      return;
    }
    res.status(200).json(tag)
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
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then((tag) => {
    if (!tag) {
      res.status(404)
        .json({
          message: 'There is no tag at this id'
        });
      return;
    }
    res.status(200).json(tag)
  }).catch((error) => {
    console.log(error);
    res.status(500).json({
      error: "We have encountered an error. Please try again later."
    })
  })
});

module.exports = router;
