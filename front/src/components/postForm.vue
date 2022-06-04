<script>
export default {
    name:'postForm',
methods:{
  sendPost(){
    const options = {
        method: "POST",
        body: JSON.stringify({content: this.content}),
        headers: { "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}` },
      };
      console.log("content")
    fetch("http://localhost:3000/posts", options)
    .then((res) => {
      if(res.status ===200){
        return res.json()
      }else{
        throw new Error("Erreur posts")
      }
    })
    .then((res) =>{
      const {email, posts} =res
      this.posts = posts
      this.email = email
    })
    .catch((err) => console.log(err))
    },
  }
}



</script>

<template>


<div class="card-remark">
      <input class="form-post" type="text" placeholder="Ajoutez un texte" aria-label="default input example" >
      <input type="file" class="form-control" aria-label="file example" required>
      <div class="btn-form">
        <button @click="sendPost" type="button" class="btn btn-outline-primary">Post</button>
      </div>
    </div>
</template>



<style scoped>
.card-remark{
  margin-top: 5rem;
  margin-bottom: 5rem;
  flex-direction: column;
  justify-content: center;
}
.form-post{
width: 90%;
height: 6rem;
}

.form-control{
  width: 90%;
}
button{
  flex-wrap: wrap;
  width: 30%;
  height: 2%;
}
@media (max-width: 992px){
  button{
    width: 18%;
  }
}
</style>