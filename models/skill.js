const skills = [
    {id: 100001, skill: 'Karate', done: true},
    {id: 100002, skill: 'Massage', done: false},
    {id: 100003, skill: 'Shopping', done: false}
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