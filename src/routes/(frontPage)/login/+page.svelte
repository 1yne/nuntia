<script>
  import { goto } from "$app/navigation";
  function login() {
    goto("/dashboard")
  }
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<h1 class="font-bold text-3xl text-white my-10" align="center">Nuntia</h1>

<div class="w-1/4 bg-white m-auto h-[45vh] rounded-md p-10">
  <p align="center" class="mb-6 mt-0">Login to continue!</p>
  <label for="username">Username: </label>
  <input type="text" id="username" class="w-full rounded-md px-2.5 h-[5vh] mb-5" placeholder="Your username..." autocomplete="off">
  <label for="password">Password: </label>
  <input type="text" id="password" class="w-full rounded-md px-2.5 h-[5vh]" placeholder="Your password...">
  <button on:click={login} class="w-full my-10 h-10 rounded-sm border-2 border-solid border-purple hover:bg-purple transition-all duration-150 ease-in">Login</button>
  <hr class="border-[0.25px] border-solid border-black">
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
  * {
    font-family: 'Montserrat', sans-serif;
  }
  input[type="text"] {
    border: 2px solid #ccc;
    outline: none;
    transition: 0.5s;
  }
  input[type="text"]:focus {
    border: 2px solid #b33dd1;
  }
</style>