<svelte:head>
	<title>Nuntia</title>
</svelte:head>

<!-- Version One: -->
<script>
  import HomeNavbar from "$lib/components/HomeNavbar.svelte";
  import ArrowRight from "carbon-icons-svelte/lib/ArrowRight.svelte";
  import { goto } from "$app/navigation"
  export let data
</script>

<HomeNavbar />
<main class="w-full h-[100vh] bg-gradient-to-b from-purple  to-complementary">
  <section class="w-1/2 h-[80vh]  float-left text-accent font-[Montserrat] textSection">
    <div class="w-7/8  p-10 divText">
      <h1 class="font-[Pacifico] text-8xl text leading-snug">Communication Made Easier <img src={data.src} class="w-5/6 h-[10vh]" alt="line"></h1>
      <p class="text-3xl text para">The one stop destination for all communication between teachers and students</p>
      <button class="para w-1/4 h-[5vh] btn bg-purple text-complementary rounded-sm inline mr-5" on:click={() => goto("/login")}>Login<ArrowRight class="inline ml-2 fill-complementary" /></button>
    </div>
  </section>
  <div class="hero w-1/2 h-[80vh] float-left text-accent bg-center bg-no-repeat"></div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300&family=Mali&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  main {
    padding: 20px;
  }
  .hero {
    background-image: url("/images/heroImage.png");
  }
  .borderc {
    border: 1px solid black;
  }
  .textSection {
    padding: 0rem 0;
  }
  .text {
    padding: 2rem;
  }
  .para {
    font-family: 'Mali', cursive;
  }
  .btn {
    margin-left: 2rem;
  }
</style>
