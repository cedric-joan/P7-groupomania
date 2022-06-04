      <template>
      
          <div class="forum">
            <div class="post">
      <PostForm></PostForm>
            </div>
            <div class="menu-items">
              
              <div class="sticky"><PopularList></PopularList></div>
        <div class="card-items">
          <CardItem>
            </CardItem>
          <CardItem></CardItem>
          <CardItem></CardItem>
          <CardItem></CardItem>
          
      
      </div>
      
        </div>
      </div>
          
      
      </template>
    <script>
    // @ is an alias to /src
import CardItem from "../components/CardItem.vue";
    import PopularList from "../components/PopularList.vue";
import postForm from '../components/postForm.vue'
import PostForm from "../components/postForm.vue";
// import { url } from "../main";
    
    
    export default {
      name: "HomeView",
      components: {
    CardItem,
    PopularList,
    postForm,
    PostForm
},
    beforeCreate(){
      const token = localStorage.getItem("token")
      if(token == null){
        this.$router.push("/login")
      }
    }
    }
    // mounted(){
    //   const postData = {
    //     method: "POST",
    //     body: JSON.stringify({content: this.content}),
    //     headers: { "Content-Type": "application/json",
    //     Authorization: `Bearer ${localStorage.getItem("token")}` },
    //   };
    
      
    // fetch(url +"posts", postData)
    // .then((res) => {
    //   if(res.status ===200){
    //     return res.json()
    //   }else{
    //     throw new Error("Erreur posts")
    //   }
    // })
    // .then((res) =>{
    //   const {email, posts} =res
    //   this.posts = posts
    //   this.email = email
    // })
    // .catch((err) => console.log(err))
    // },
    // data(){
    //   return{
    //     pseudo:"",
    //     posts:[],
    //     email: null,
    //     users: [],
    //     imageData: null,
    //     token: "",
    //     userId: "",
    //     admin: false,
    //     userPicture:""
    //   }
    // }
     
    //   }
    
    
    </script>



<style scoped>

.menu-items {
  display:flex;
  justify-content:space-evenly;
  flex-wrap: wrap;
  gap: 0%
}
.post{
  display: flex;
  justify-content: space-evenly;
  margin-left: 2.8rem;
}

</style>