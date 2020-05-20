const skills = [
    {id: 100001, skill: 'Karate', done: false},
    {id: 100002, skill: 'Massage', done: true},
    {id: 100003, skill: 'Shopping', done: false},
    {id: 100004, skill: 'Cooking', done: true},
    {id: 100005, skill: 'Sleeping', done: true}
  ];

  module.exports = {
    getAll,
    getOne
  };

  function getAll() {
    return skills;
  }

  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
  }