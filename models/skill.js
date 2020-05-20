const skills = [
    {id: 100001, skill: 'Karate', done: false, level: 'Hard'},
    {id: 100002, skill: 'Massage', done: true, level: 'Moderate'},
    {id: 100003, skill: 'Shopping', done: false, level: 'Easy'},
    {id: 100004, skill: 'Cooking', done: true, level: 'Easy'},
    {id: 100005, skill: 'Sleeping', done: true, level: 'Hard'}
  ];

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };

  function getAll() {
    return skills;
  }

  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skill.level = '';
    skills.push(skill);
  }

  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    console.log('this is th idx', idx)
    skills.splice(idx, 1);
  }

  function update(id, skill) {
    const skillObj = skills.find(t => s.id === parseInt(id));
    Object.assign(skillObj, skill);
  }