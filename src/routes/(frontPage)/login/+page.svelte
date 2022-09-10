<script>
	import { goto } from '$app/navigation';
	let usernameValue = '',
		usernameError,
		passwordValue = '',
		passwordError;
  $: usernameValid = usernameValue.length === 0
  $: passwordValid = passwordValue.length === 0
	function login() {
		goto('/dashboard');
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<h1 class="font-bold text-3xl  my-10 text-accent" align="center">Nuntia</h1>
<div align="center" class="w-[20rem] bg-white mx-auto h-[50vh] rounded-sm p-10">
	<form on:submit|preventDefault={login}>
		<p align="center" class="mb-6 mt-0">Login to continue!</p>
		<label for="username">Username: </label>
		<div data-error={usernameError} class="input-container">
			<input
				type="text"
				id="username"
				class="w-full rounded-md px-2.5 mb-5 h-[5vh] mt-2"
				placeholder="Your username..."
				required
				bind:value={usernameValue}
        class:invalid="{usernameValid}"
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
        class:invalid="{passwordValid}"
        autocomplete
			/>
		</div>
		<button
			class="w-full my-10 h-10 rounded-sm border-2 border-solid border-purple hover:bg-purple hover:text-complementary transition-all duration-150 ease-in"
			type="submit">Login</button
		>
		<hr class="border-[0.25px] border-solid border-black" />
	</form>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300&family=Mali&display=swap');
	* {
		font-family: 'Mali', sans-serif;
	}
	input {
		border: 2px solid #ccc;
		outline: none;
		transition: 0.5s;
	}
	.invalid {
		border-color: red;
	}
</style>
