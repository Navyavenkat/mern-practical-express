const express=require('express')
const router=express.Router()
router.get('/',(request,response)=>{
  response.send("User page");
})
router.get('/new',(request,response)=>{
  response.render('user/new');
})

router.post('/',(request,response)=>{
  users.push({name:request.body.FirstName})
  console.log(users.length);
  
 
  response.redirect(`users/${users.length-1}`)
})

router.get("/:id",(request,response)=>{
response.send(request.user.name)
console.log(request.user.name);
// response.send(users[request.params.id].name)
})
const users=[{name:"Web Development"},
{name:"Full stack Development"},{name:"Data scientist"},{name:"Java Full stack"}]

router.param('id',(request,response,next,id)=>{
  request.user=users[id]
  next()
})
module.exports=router;