  <template>
  
  <div class="card" >
  <div class="card-header">
     <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" 
    alt="Avatar" />
    <!-- {{ pseudo }} -->
      Publié par Alex il y a 10 min...
     <!-- <button type="button" class="btn btn-outline-danger"></button> -->
<i class="bi-trash" @click="deletePost">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
</i>
    </div>
    <!-- {{ imageUrl }} -->
    <img src="../assets/images_pro/image_pro-5.jpg" class="card-img-top" alt="#">
    <div class="card-body">
      <!-- {{ content }} -->
      <p class="card-text">L’e-réputation est le résultat en terme d’image des contenus produits et diffusés par l’entreprise.</p>
    </div>
    <div class="card-remark">
    <img class="rounded-circle shadow-1-strong mb-4"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" style="width:50px;" />
        <input class="form-control" type="text" placeholder="Ajoutez un texte" aria-label="default input example" >
        <button @click="sendComment" type="button" class="btn btn-outline-primary">Post</button>
  </div>
  </div>
        
  </template>

<script>

export default {
  name: 'CardItem',
  components:{
},
props:{
  userId: { type: String },
  pseudo: { type: String },
  content: { type: String },
  imageUrl: { type: String },

},
methods: {
deletePost(){
console.log(this.$props.userId)
},
sendComment(){}
}
}
</script>




<style scoped>
.card{
  margin-top:1.5rem;
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
  height: 20%;
}
.btn{
  width: 15%;
  height: 1%;
}
.bi-trash {
  margin-left: 2.5rem;
  transform: scale(1.15);
}
.bi-trash :hover{
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
  width: 18%;
  height: 1%;
}
input{
  width: 60%;
  height: 30%;
}
}
</style>