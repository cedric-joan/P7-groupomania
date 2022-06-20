<template>
  <div class="card-remark">
    <!-- <img v-if="imageUrl" src="" alt=""> -->
    <input
      class="form-post"
      type="text"
      placeholder="Ajoutez un texte"
      aria-label="default input example"
      v-model="content"
    />
    <input
      type="file"
      class="form-control"
      aria-label="file example"
      required
      @change="addNewFile"
    />
    <div class="btn-form">
      <button @click="sendPost" type="button" class="btn btn-outline-primary">
        Post
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostForm",
  emits: ["currentUser"],
  data() {
    return {
      content: "",
      selectedImage: null,
      user: null,
      route: "",
    };
  },
  beforeCreate() {
    const option = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    fetch("http://localhost:3000/auth/user", option)
      .then((res) => res.json())
      .then((res) => {
        this.user = res;
        this.$emit("currentUser", this.user);
      })
      .catch((err) => console.log(err));
  },
  methods: {
    addNewFile(e) {
      this.selectedImage = e.target.files[0];
    },
    sendPost() {
      const formData = new FormData();
      formData.append("content", this.content);
      formData.append("image", this.selectedImage);
      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
        },
        body: formData,
      };
      fetch("http://localhost:3000/posts", options)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Erreur post");
          }
        })
        .then(() => {
          this.$router.go();
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.card-remark {
  margin-top: 5rem;
  margin-bottom: 5rem;
  flex-direction: column;
  justify-content: center;
}
.form-post {
  width: 90%;
  height: 6rem;
}

.form-control {
  width: 90%;
  margin-top: 1rem;
}
button {
  margin-top: 1rem;
  flex-wrap: wrap;
  width: 40%;
  height: 2%;
}
@media (max-width: 992px) {
  button {
    width: 18%;
  }
}
</style>
