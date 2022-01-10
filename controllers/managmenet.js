const Management = require('../models/managmenet');

module.exports = {
    index: (req, res)=>{
        Management.find({}, (error, tasks)=>{
            if(error) console.log(`There Was An Error: ${error}`);
            else {
                res.render("student.ejs", {todotasks: tasks});
            }
        });
    },
    create: (req, res)=>{
        const firstTask = new Management({name: req.body.name, age: req.body.age});
        firstTask.save().then(()=>res.redirect("/"));
    },
    edit: (req, res)=>{
        const id = req.params.id;
        Management.find({}, (err, tasks)=>{
            res.render("StudentEdit.ejs", {todotasks: tasks, idTask: id});
        });
    },
    update: (req, res)=>{
        const id = req.params.id;
        Management.findByIdAndUpdate(id, {name: req.body.name, age: req.body.age}, err=>{
            if(err) return res.send(500, err);
            else res.redirect("/");
        });
    },
    delete: (req, res)=>{
        Management.deleteOne({_id: req.params.id}, (error)=>{
            if(error) console.log(`There Was An Error: ${error}`);
            else {
                res.redirect("/");
            }
        });
    }
}