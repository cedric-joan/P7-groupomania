      <template>
      
          <div class="forum">
            <div class="post">
      <PostForm></PostForm>
            </div>
            <div class="menu-items">
              
              <div class="sticky"><PopularList></PopularList></div>
        <div class="card-items">
          <!-- <div v-for="post in posts"></div> -->
          <!-- <CardItem pseudo="post.pseudo" content="post.content" imageurl="post.imageUrl"></CardItem> -->
            
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
import PostForm from "../components/postForm.vue";
    
    
    export default {
      name: "HomeView",
      components: {
    CardItem,
    PopularList,
    PostForm
      },
data(){
      return {
        pseudo:"",
        posts:[],
        email: null,
        users: [],
        imageUrl: null,
        token: "",
        userId: "",
        admin: false,
        userPicture:""
      }
    },
    // beforeCreate(){
    //   const token = localStorage.getItem("token")
    //   if(token == null){
    //     this.$router.push("/login")
    //   }
    // }
    mounted(){
      const option = {
        method: "GET",
        headers: { "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}` },
        body: JSON.stringify({content: this.content}),
      };
      const url = "http://localhost:3000"
    fetch(url +"/posts/", option)
    .then((res) => {
      if(res.ok){
        return res.json()
      }else{
        throw new Error("Erreur posts")
      }
    })
    .then((res) => {
      const { posts} = res
      this.posts = posts
    })
    .catch((err) => console.log(err))
    }
    }
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