<script>
	import { goto } from '$app/navigation';
	let usernameValue = "", usernameError, passwordValue = "", passwordError;
	function login() {
    if (usernameValue.length === 0 || passwordValue.length === 0) {
      return
    }
		goto('/dashboard');
	}
  function inputChanged(e) {
    usernameValue.length === 0 ? usernameError = "Please enter a username!" : usernameError = null
    passwordValue.length === 0 ? passwordError = "Please enter a password!" : passwordError = null
  }
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<h1 class="font-bold text-3xl text-white my-10" align="center">Nuntia</h1>

<div class="w-1/4 bg-white mx-auto h-[50vh] rounded-sm p-10" align="center">
	<form on:submit|preventDefault={login}>
    <p align="center" class="mb-6 mt-0">Login to continue!</p>
    <label for="username">Username: </label>
    <div data-error={usernameError} class="input-container">
      <input
        type="text"
        id="username"
        class="w-full rounded-md px-2.5 mb-5 h-[5vh] mt-2"
        placeholder="Your username..."
        autocomplete="off"
          required
        bind:value={usernameValue}
          on:blur={inputChanged}
      />
    </div>
    <label for="password">Password: </label>
    <div data-error={passwordError} class="input-container">
      <input
        type="password"
        id="password"
        class="w-full rounded-md px-2.5 h-[5vh] mt-2"
        placeholder="Your password..."
          required
        bind:value={passwordValue}
          on:blur={inputChanged}
      />
    </div>
    <button
      class="w-full my-10 h-10 rounded-sm border-2 border-solid border-purple hover:bg-purple transition-all duration-150 ease-in"
        type="submit"
      >Login</button
    >
    <hr class="border-[0.25px] border-solid border-black" />
  </form>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
	* {
		font-family: 'Montserrat', sans-serif;
	}
	input[type='text'] {
		border: 2px solid #ccc;
		outline: none;
		transition: 0.5s;
	}
  input[type='password'] {
		border: 2px solid #ccc;
		outline: none;
		transition: 0.5s;
	}
	input[type='text']:focus {
		border: 2px solid #b33dd1;
	}
  input[type='password']:focus {
		border: 2px solid #b33dd1;
	}
	.input-container[data-error] input {
		border-color: red;
	}
</style>
