<template>
  <div id="app">
    <div id="nav">
      <Header/>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './components/Header/Main.vue'
import { Action } from 'vuex-class'

@Component({
  components: {
    Header
  }
})
export default class App extends Vue {
    @Action('listings/fetchEntries') fetchEntries!: () => void;
    @Action('currency/fetchCurr') fetchCurr!: () => void;
    // creating the loading one
    mounted() {        
        this.fetchEntries()
        this.fetchCurr()
    }  
}

</script>

<style>
::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
#app {  
  font-family: 'Noto Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2A2C50;
  
}
a {
  color: #2A2C50;
  text-decoration: none;  
}
a:active {
  color: #2A2C50;
}

body {
  margin: 0
}
textarea {
  background-color: #F8F8FB;
  border: 1.5px solid transparent;
  border-radius: 10px;
  color: #2A2C50;
  height: 60px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;  
  padding: 20px;
  resize: none;
  outline: none;  
  width: 263px; 
  transition: border 500ms linear;   
}


input {
  background-color: #F8F8FB;
  border: 1.5px solid transparent;
  border-radius: 10px;
  color: #2A2C50;
  font-size: 16px;    
  height: 65px;
  width: 300px;
  text-indent: 15px;  
  transition: border 500ms linear;
}
  input:focus, textarea:focus {
    outline: none;
    border: 1.5px solid #BFC1DA;
  }
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a:hover {
  color: #42b983
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
