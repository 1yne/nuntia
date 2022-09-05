<script>
  import { goto } from "$app/navigation";
  function login() {
    goto("/dashboard")
  }
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<button on:click={login}>Login</button>