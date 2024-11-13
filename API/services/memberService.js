// services/memberService.js
const members = require('../models/memberModel');

// Find a member by ID
const findMemberById = (id) => members.find((member) => member.id === id);

// Add a new member
const addMember = (memberData) => {
  const newMember = {
    id: members.length ? members[members.length - 1].id + 1 : 1,
    ...memberData
  };
  members.push(newMember);
  return newMember;
};

// Update an existing member
const updateMember = (id, updatedData) => {
  const memberIndex = members.findIndex((member) => member.id === id);
  if (memberIndex === -1) return null;

  members[memberIndex] = { ...members[memberIndex], ...updatedData };
  return members[memberIndex];
};

// Delete a member
const deleteMember = (id) => {
  const memberIndex = members.findIndex((member) => member.id === id);
  if (memberIndex === -1) return null;

  const deletedMember = members.splice(memberIndex, 1);
  return deletedMember[0];
};

module.exports = {
  findMemberById,
  addMember,
  updateMember,
  deleteMember
};
