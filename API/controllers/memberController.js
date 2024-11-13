// controllers/memberController.js
const memberService = require('../services/memberService');

// Get all members
const getAllMembers = (req, res) => {
  res.json(require('../models/memberModel'));
};

// Get a single member by ID
const getMemberById = (req, res) => {
  const memberId = parseInt(req.params.id, 10);
  const member = memberService.findMemberById(memberId);

  if (member) {
    res.json(member);
  } else {
    res.status(404).json({ message: 'Member not found' });
  }
};

// Create a new member
const createMember = (req, res) => {
  const { name, age, membershipType } = req.body;
  if (!name || !age || !membershipType) {
    return res.status(400).json({ message: 'All fields (name, age, membershipType) are required' });
  }

  const newMember = memberService.addMember({ name, age, membershipType });
  res.status(201).json(newMember);
};

// Update an existing member by ID
const updateMember = (req, res) => {
  const memberId = parseInt(req.params.id, 10);
  const updatedMember = memberService.updateMember(memberId, req.body);

  if (updatedMember) {
    res.json(updatedMember);
  } else {
    res.status(404).json({ message: 'Member not found' });
  }
};

// Delete a member by ID
const deleteMember = (req, res) => {
  const memberId = parseInt(req.params.id, 10);
  const deletedMember = memberService.deleteMember(memberId);

  if (deletedMember) {
    res.json({ message: 'Member deleted successfully', deletedMember });
  } else {
    res.status(404).json({ message: 'Member not found' });
  }
};

module.exports = {
  getAllMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember
};
