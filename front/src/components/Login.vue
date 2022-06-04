<template>
  <div class="hello">
    <main class="form-signin w-100 m-auto">
  <form :class="this.submitFormLogin">
    <img class="mb-4" src="../assets/icon-above-font.png" alt="logo_groupomania" width="250" height="250">
    <h1 class="h3 mb-3 fw-normal">Veuillez vous indentifier</h1>

    <div class="form-floating">
      <input :class="this.isEmailValid ? 'is-valid': 'is-invalid'" type="email" class="form-control" id="validationEmail" placeholder="name@example.com" v-model="email" >
      <label for="validationEmail">Adresse mail</label>
      <div id="validationServerEmailFeedback" class="invalid-feedback">
        Email non valide.
      </div>
    </div>
    <div class="form-floating">
      <input :class="this.isPasswordValid ? 'is-valid': 'is-invalid'" type="password" class="form-control"  id="validationPassword" placeholder="Password" v-model="password" >
      <label for="floatingPassword">Mot de passe</label>
      <div id="validationServerPasswordFeedback" class="invalid-feedback">
        Mot de passe non valide.
      </div>
    </div>
    <router-link to="/">
    <button  class="w-100 btn btn-lg btn-danger" type="submit" @click="() =>submitLogin(this.email, this.password)" :disabled="!isPasswordValid">S'indentifier</button></router-link>
    <p class="mt-5 mb-3 text-muted">&copy; 2018–2022</p>
  </form>
</main>
  </div>
</template>

<script>

import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";


  function submitLogin (email,password){
  console.log({email,password})
 const option = {
        method: "POST",
        headers: { "Content-Type": "application/json",
        body: JSON.stringify({email,password}),
        // Authorization: `Bearer ${localStorage.getItem("token")}` 
        },
      }
    fetch("http://localhost:3000/auth/user/login", option)
    .then((res) => res.json())
    .then((res) => 
console.log(res)
      // const {email, password} = res
      // this.password = password
      // this.email = email
    )
    .catch((err) => console.log(err))


  // if(email !== "cedric.joan@gmail.com") throw new Error("Email invalide");
  // if(password !== "cedricjoan") throw new Error("mot de passe invalide");
  const token = "JWT TOKEN"
  localStorage.setItem("token", token)
  }

export default {
  name: 'LoginView',
   data() {
     return {v$: useValidate(), email:"", password:"cedricjoan", isEmailValid :false, isPasswordValid : false}
  },
 methods: {
   submitFormLogin(){
     this.v$.$validate()
  if(this.v$.$error){
    alert("Veuillez renseigner tous les champs");
  }
  
},
submitLogin,
setEmailValidity(bool){
  this.isEmailValid = bool
},
setPasswordValidity(bool){
  this.isPasswordValid = bool
}

 },
watch: {
  email(value){
    console.log(value)
    const emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g') 
    const testEmail = emailRegExp.test(this.email)
return this.setEmailValidity(testEmail)
    },
    
  password(value){
    console.log(value)
     const passwordValue = value.length > 5
  return this.setPasswordValidity(passwordValue)
  },

  },
 validations(){
   return{email:{ required },password:{required}};
 }
}

    


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


body {
  height: 100%;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 40px;
  background-color: #ffffff;
}
a {
  text-decoration: none;
  color: #ffffff;
}
.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
