const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', (req, res) => {
  Blog.create(req.body)
    .then((newBlog) => {
      res.json(newBlog);
    })
    .catch((err) => {
      res.json(err);
    });
});

/*router.post('/add', withAuth, async (req, res) => {
  try {
    const addedBlog = await Blog.create;
    {
      member_id: req.session.member_id,
    },
    {
      where: {
        id: req.body.blogID
      }
    });

    res.status(200).json(addedBlog);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});*/

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        member_id: req.session.member_id,
        
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
