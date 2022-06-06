
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

}
}
</script>


<template>

<div class="card" >
<div class="card-header">
   <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" 
  alt="Avatar" />
  <!-- {{ pseudo }} -->
    Publié par Alex il y a 10 min...
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
      <button @click="sendPost" type="button" class="btn btn-outline-primary">Post</button>
</div>
</div>
      
</template>


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