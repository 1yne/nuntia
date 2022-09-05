<script>
  import "../../../app.css";
  import Navbar from "$lib/components/DashboardNavbar.svelte";
</script>

<Navbar />
<main>
  <slot />
</main>

<style>
  :global(body) {
    background-color: #1E1E1E;
  }
</style>