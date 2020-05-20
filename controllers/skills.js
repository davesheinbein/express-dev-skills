const skillDB = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}

function index(req, res, next) {
    res.render('skills/index', {
        skills: skillDB.getAll()
        // skills: [
        //     {skill: 'takewondo', level: 3, id: 100},
        //     {skill: 'stuff', level: 5, id: 12232},
        // ]
    })
}

function show(req, res, next){
    console.log(req.params, "<-- req.params")
    res.render('skills/show', {
        skill: skillDB.getOne(req.params.id)
    })
}

function newSkill(req, res) {
    res.render('skills/new.ejs');
}

function create(req, res) {
    console.log(req.body);
    skillDB.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    skillDB.deleteOne(req.params.id);
    res.redirect('/skills');
}

function edit(req, res) {
    const skill = skillDB.getOne(req.params.id);
    res.render('skills/edit', {skill});
}

function update(req, res) {
    req.body.done = !!req.body.done;
    skillDB.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
  }