  <template>
  
  <div class="card" >
  <div class="card-header">
     <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" 
    alt="Avatar" />
      <!-- Publié par {{ userName }} -->
     <!-- <button type="button" class="btn btn-outline-danger"></button> -->
<i class="bi bi-trash" @click="deletePost"></i>
    </div>
    <img :src="imageUrl" class="card-img-top" alt="#">
    <div class="card-body">
      
      <h4 class="content">{{ content }}</h4>
    </div>
    <!-- <div class="card-remark">
    <img class="rounded-circle shadow-1-strong mb-4"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" style="width:50px;" />
        <input class="form-control" type="text" placeholder="Ajoutez un texte" aria-label="default input example" >
        <button @click="sendComment" type="button" class="btn btn-outline-primary">Post</button>
  </div> -->
  </div>
        
  </template>

<script>


export default {
  name: 'CardItem',
  components:{
},
props:{
  userName:{
    String
  },
  content:{
    String
  },
  imageUrl: {
    String
  }
}
,
methods: {
deletePost(){

    const options = {
        method: "DELETE",
        headers: { 
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Accept": "application/json"
        },
      };
    fetch("http://localhost:3000/auth/post/:id" , options)
    .then((res) => {
      if(res.status === 200){
      console.log(res) 
        return res.json()
      }else{
        throw new Error("Erreur post")
      }
    })
    .then((res) => {
      console.log(res)
      // this.$router.go()
    })
    .catch((err) => console.log(err))
    },




},
sendComment(){}
}

</script>




<style scoped>
.card{
  margin-top:2.5rem;
box-shadow: 0 0 7px rgb(88, 84, 198);
width: 30rem;
}
.card-img-top{
background-size: cover;
}
.card-header {
  background-color:rgb(221, 216, 216);
}
.card-header img{
  width: 50px;
}
.card-body {
  border-top: 1px solid
}
.chat{
  margin-left: 1.5rem;
}
input{
  width: 50%;
  height: 50%;
}
.btn{
  width: 25%;
  height: 20%;
}
i.bi {
  margin-left: 5rem;
  transform: scale(1.15);
}
i.bi :hover{
color: red;
cursor: pointer;
}
.card-remark{
  display: flex;
  margin-left: 1rem;
  gap: 1%;
}
@media (max-width: 992px){
  .card{
    width: 24rem;
  }
  .card-header img{
    width: 30px;
}
.btn{
  width: 28%;
  height: 1%;
}
input{
  width: 50%;
  height: 40%;
}
.bi-trash {
  margin-left: 2.5rem;
  transform: scale(1.15);
}
}
</style>