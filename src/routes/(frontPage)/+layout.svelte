<script>
  import "../../app.css";
  import HomeNavbar from "$lib/components/HomeNavbar.svelte";
</script>

<HomeNavbar />
<main>
  <slot />
</main>
<style>
  :global(body) {
    background-color: #1E1E1E;
  }
</style>