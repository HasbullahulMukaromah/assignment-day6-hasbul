const express = require('express');
const router = express.Router();
const User = require('../models/UserModel');

// Create a user
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the book.' });
  }
});

// Get all user
router.get('/', async (req, res) => {
  const user = await user.findAll();
  res.json(user);
});

// Get a user by ID
router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }
  res.json(user);
});

// Update a user by ID
router.put('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }
  await user.update(req.body);
  res.json(book);
});

// Delete a user by ID
router.delete('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }
  await user.destroy();
  res.json({ message: 'User deleted.' });
});

module.exports = router;