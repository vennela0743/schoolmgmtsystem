var Userdb = require('../model/model');

// create and save new user
exports.create = (req,res)=>{
  // validate request
  if(!req.body){
    res.status(400).send({ message : "Content can not be emtpy!"});
    return;
  }
  //console.log(req.body);
  //new user
  const user = new Userdb({
        name : String(req.body.name),

        registrationnumber : String(req.body.registrationnumber),
        role : String(req.body.role),
        schoolid :String(req.body.schoolid),
        gender : String(req.body.gender),
        city : String(req.body.city),
        subject : String(req.body.subject),
        maths_marks : String(req.body.maths_marks),
        science_marks : String(req.body.science_marks),
        english_marks : String(req.body.english_marks)
  })
  
  //save user in the database
  user
        .save()
        .then(data => {
           // res.send(data)
            res.redirect('/add-user');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}
  //retrive and return all users / retirve and return a single user
exports.find=(req,res)=>{
  if(req.query.id){
    const id = req.query.id;

    Userdb.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({ message : "Not found user with id "+ id})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message: "Erro retrieving user with id " + id})
        })

}else{
    Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
        })
}
}

//update
exports.update=(req,res)=>{
if(!req.body){
  return res
   .status(400)
   .send({message :"Data to update cannot be empthy"})
}
console.log(req.body);
const id = req.params.id;
Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
  .then(data => {
    if(!data){
      res.status(404).send({message : `Cannot Update user with ${id}. Maybe user not found!`})
    }else{
      res.send(data)
    }
  })
  .catch(err =>{
    res.status(500).send({ message : "Error Update user information"})
})
}

//delete
exports.delete=(req,res)=>{

   const id = req.params.id;

   Userdb.findByIdAndDelete(id)
    .then(data => {
      if(!data){
        res.status(404).send({message : `Cannot Delete with id ${id}. Maybe id is wrong`})
      } else{
        res.send({
            message : "User was deleted successfully!"
        })
    }
    })
    .catch(err =>{
      res.status(500).send({
          message: "Could not delete User with id=" + id
      });
  });
}


