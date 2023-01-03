const router = require('express').Router();
const { Blog, Member } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: Member,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    
    res.status(200).render('homepage', { 
      blogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);

    const blog = blogData.get({ plain: true });

    res.render('blog', {
      ...blog,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/memberProfile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const memberData = await Member.findByPk(req.session.member_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog}],
    });

    const member = memberData.get({ plain: true });

    const blogData = await Blog.findAll({
      where: {
        member_id: req.session.member_id
      }
    })

    const blogs = blogData.map((blog) => blog.get({ plain: true }));


    res.render('memberProfile', {
      ...member,
      blogs,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/post', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const memberData = await Member.findByPk(req.session.member_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog}],
    });

    const member = memberData.get({ plain: true });

    const blogData = await Blog.findAll({
      where: {
        member_id: req.session.member_id
      }
    })

    const blogs = blogData.map((blog) => blog.get({ plain: true }));


    res.render('post', {
      ...member,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/memberProfile");
    return;
  }

  res.render('login');
});

router.get('/logout', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {

    res.redirect("/memberProfile");
    return;
  }

  res.render('logout');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/memberProfile");
    return;
  }

  res.render('signup');
});

module.exports = router;
