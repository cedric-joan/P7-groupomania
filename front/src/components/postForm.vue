  <template>
  
  
  <div class="card-remark">
    <div>{{ content }}</div>
    <!-- <img v-if="imageUrl" src="" alt=""> -->
        <input class="form-post" type="text" placeholder="Ajoutez un texte" aria-label="default input example" v-model="content">
        <input type="file" class="form-control" aria-label="file example" required @change="addNewFile">
        <div class="btn-form">
          <button @click="sendPost" type="button" class="btn btn-outline-primary">Post</button>
        </div>
      </div>
  </template>





<script>
export default {
    name:'postForm',
    data() {
      return{
        imageUrl:"",
  // userId:"",
  // pseudo:"",
  content:"",

      }
    },
methods:{
addNewFile(e){
this.imageUrl = e.target.files[0]
},


  sendPost(){
const formData = new FormData()
formData.append("content",this.content)
formData.append("image", this.imageUrl)


    const options = {
        method: "POST",
        headers: { 
'Content-type': 'multipart/form-data; boundary=XXX',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Accept": "application/json"
        },
        body: '--XXX\r\nContent-Disposition: form-data; name="file"; filename="filename.csv"\r\nContent-Type: text/csv\r\n\r\nA,B,C\r\n1,1.1,name1\r\n2,2.2,name2\r\n\r\n--XXX--',
      };
    fetch("http://localhost:3000/auth/post", options)
    .then((res) => {
      console.log(res)
      if(res.ok){
        return res.json(res)
      }else{
        throw new Error("Erreur post")
      }
    })
    // .then(() =>{
    //   this.$router.go()
    // })
    .catch((err) => console.log(err))
    },
  }
}

</script>




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
  margin-top: 1rem;

}
button{
  margin-top: 1rem;
  flex-wrap: wrap;
  width: 40%;
  height: 2%;
}
@media (max-width: 992px){
  button{
    width: 18%;
  }
}
</style>