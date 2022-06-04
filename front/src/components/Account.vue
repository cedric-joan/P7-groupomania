
<template>

  <form class="post">
    <div class="mb-3">
      <img src="../assets/images_pro/photo_pro-10.jpg" class="img-thumbnail" alt="photo_portrait">
      <input type="file" class="form-control" aria-label="file example" required>
    </div>
  </form>

  <div class="name g-3">
  <div class="col">
    <input type="text" class="form-control" id="user_pseudo" placeholder="Pseudo" aria-label="Last name" v-model="pseudo">
  </div>
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
    <div class="d-flex">
      <router-link to="/">
       <button v-if="!this.isLoggedIn" type="submit" class="btn btn-primary btn-lg" @click="() =>submitForm(this.email, this.password)" :disabled="!isPasswordValid">Enregistrer</button></router-link>
         <router-link to="/login">
       <button v-if="this.isLoggedIn" type="button" class="btn btn-danger btn-lg">Supprimer</button></router-link>
    </div>
</div>
  
</template>

  <script>
  import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { url } from "../main";


  function submitForm (pseudo,email,password){
  console.log({email,password})
 const postData = {
        method: "POST",
        headers: { "Content-Type": "application/json",
        body: JSON.stringify({pseudo,email,password}),
        // Authorization: `Bearer ${localStorage.getItem("token")}` 
        },
      }
    
    fetch(url +"/auth/signup", postData)
    .then((res) => {
      if(res.status ===200){
        return res.json()
      }else{
        throw new Error("Erreur ")
      }
    })
    .then((res) => {
console.log(res)
      // const {email, password} = res
      // this.password = password
      // this.email = email
    })
    .catch((err) => console.log(err))


  // if(email !== "cedric.joan@gmail.com") throw new Error("Email invalide");
  // if(password !== "cedricjoan") throw new Error("mot de passe invalide");
  const token = "JWT TOKEN"
  localStorage.setItem("token", token)
  }

  export default {
    name: 'AccountName',
   data() {
     return {
         v$: useValidate(), 
    pseudo:"", email:"", password:"", isEmailValid :false, isPasswordValid : false,

}
  },
 methods: {
   submitFormLogin(){
     this.v$.$validate()
  if(this.v$.$error){
    alert("Veuillez renseigner tous les champs");
  }
},
submitForm,
// ajout(){
//   console.log(this.user)
// },
setEmailValidity(bool){
  this.isEmailValid = bool
},
setPasswordValidity(bool){
  this.isPasswordValid = bool
},


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
 },
  created(){
    const token = localStorage.getItem("token")
    if(token != null){
      this.isLoggedIn = true
    }
  }
      }

  </script>


<style scoped>

.form-floating{
  margin-top: 1rem;
}
.name{
  width: 35%;
  margin: auto;
  margin-top: 2rem;
}
.col{
  margin-top: 0.5rem;
}
.img-thumbnail{
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
          box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25);
        }
        .post {
          max-width: 35%;
          margin: auto;
        }
        .d-flex{
          margin-top: 1rem;
          gap: 1rem;
        }

      @media (max-width: 992px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
       button{
         width: 130px;

       }
      }
 


</style>