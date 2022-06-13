<template>
  <div class="forum">
    <div class="post">
      <PostForm></PostForm>
    </div>
    <div class="menu-items">
      <div class="sticky"><PopularList></PopularList></div>
      <div class="card-items" v-for="post of posts" :key="post.id">
          <CardItem name="post.name" content="post.content" imageUrl="post.imageUrl"></CardItem>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">Groupomania&copy; 2018–2022</p>
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
    PostForm,
  },
  data() {
    return {
      name:"",
      content:"",
      imageUrl:"",
      posts: [],
      email: null,
      admin: false,
      userPicture: "",
    };
  },
  beforeCreate() {
    const token = localStorage.getItem("token");
    if (token == null) {
      this.$router.push("/login");
    }
  },
  mounted() {
    const option = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    fetch("http://localhost:3000/auth/posts/", option)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.posts = res;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.menu-items {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 0%;
}
.post {
  display: flex;
  justify-content: space-evenly;
  margin-left: 2.8rem;
}
p {
  margin-left: 2.8rem;
}
</style>
