<template>
  <form v-if="this.isLoggedIn" 
  class="post">
    <div class="mb-3">
      <img
        src="#"
        class="img-thumbnail"
        alt="photo_portrait"
      />
      <input
        type="file"
        class="form-control"
        aria-label="file example"
        required
      />
    </div>
  </form>

  <div class="name g-3">
    <div class="col">
      <input
        type="text"
        class="form-control"
        id="user_pseudo"
        placeholder="Pseudo"
        aria-label="Last name"
        v-model="pseudo"
      />
    </div>
    <div class="form-floating">
      <input
        :class="this.isEmailValid ? 'is-valid' : 'is-invalid'"
        type="email"
        class="form-control"
        id="validationEmail"
        placeholder="name@example.com"
        v-model="email"
      />
      <label for="validationEmail">Adresse mail</label>
      <div id="validationServerEmailFeedback" class="invalid-feedback">
        Email non valide.
      </div>
    </div>
    <div class="form-floating">
      <input
        :class="this.isPasswordValid ? 'is-valid' : 'is-invalid'"
        type="password"
        class="form-control"
        id="validationPassword"
        placeholder="Password"
        v-model="password"
      />
      <label for="floatingPassword">Mot de passe</label>
      <div id="validationServerPasswordFeedback" class="invalid-feedback">
        Mot de passe non valide.
      </div>
    </div>
    <div class="d-flex">
      
        <button
          v-if="!this.isLoggedIn"
          type="submit"
          class="btn btn-primary btn-lg"
          @click="() => submitForm(this.pseudo,this.email, this.password)"
          :disabled="!isPasswordValid"
        >
          Enregistrer
        </button>
      
      <router-link to="/login">
        <button
          v-if="this.isLoggedIn"
          type="button"
          class="btn btn-danger btn-lg"
        >
          Supprimer
        </button></router-link
      >
    </div>
        <p class="mt-5 mb-3 text-muted">Groupomania &copy; 2018–2022</p>

  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

function submitForm(pseudo, email, password) {
  console.log({ pseudo, email, password });
  const postData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
      body: JSON.stringify({ pseudo, email, password }),
  };
const url = "http://localhost:3000"
  fetch(url + "/auth/user/signup", postData)
    .then((res) => {
      console.log(res)
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Erreur ");
      }
    })
    .then(() => {
    this.$router.push("/login")
    })
    .catch((err) => console.log(err));


}

export default {
  name: "AccountName",
  data() {
    return {
      v$: useValidate(),
      pseudo: "",
      email: "",
      password: "",
      isEmailValid: false,
      isPasswordValid: false,
      isLoggedIn: false,
    };
  },
  methods: {
    submitFormLogin() {
      this.v$.$validate();
      if (this.v$.$error) {
        alert("Veuillez renseigner tous les champs");
      }
    },
    submitForm,
    // ajout(){
    //   console.log(this.user)
    // },
    setEmailValidity(bool) {
      this.isEmailValid = bool;
    },
    setPasswordValidity(bool) {
      this.isPasswordValid = bool;
    },
  },
  watch: {
    email(value) {
      const emailRegExp = new RegExp(
        "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
        "g"
      );
      const isValid = emailRegExp.test(value);
      return this.setEmailValidity(isValid);
    },

    password(value) {
      const isValid = value.length > 5;
      return this.setPasswordValidity(isValid);
    },
  },

  validations() {
    return { email: { required }, password: { required } };
  },
  created() {
    const token = localStorage.getItem("token");
    if (token != null) {
      this.isLoggedIn = true;
    }
  },
};
</script>

<style scoped>
.form-floating {
  margin-top: 1rem;
}
.name {
  width: 20%;
  margin: auto;
  margin-top: 10rem;
}
.col {
  margin-top: 0.5rem;
}
.img-thumbnail {
  margin-left: 0rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.form-control-dark {
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}
.post {
  max-width: 35%;
  margin: auto;
}
.d-flex {
  margin-top: 1rem;
  gap: 1rem;
}
.mb-3{
  margin-top: 10rem;
}

@media (max-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
  button {
    width: 130px;
  }
  .name {
  width: 90%;
  margin: auto;
  margin-top: 15rem;
}
}
</style>
