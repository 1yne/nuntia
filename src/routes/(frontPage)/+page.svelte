<script>
  import HomeNavbar from "../../lib/components/HomeNavbar.svelte";

</script>
<svelte:head>
	<title>Nuntia</title>
</svelte:head>

<!-- <body>
  <div class="w-full">
    <div align="right" class="icon" >
      <img src="/images/heroImage.png" class="m-5" alt="" />
    </div>
    <div align="left" class="border-solid border-2 border-black h-[50vh] w-1/2 ">
      <h1 class="font-normal text-6xl">Nuntia</h1>
    </div>
  </div>
</body>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  * {
    font-family: 'Pacifico', cursive;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #FDF7FF;
  }
  .icon {
    transform: translateY(30%);
  }
</style> -->

<HomeNavbar />
<main>
  <section class="w-1/2 h-[80vh] float-left text-accent font-[Montserrat]  textSection">
    <div class="w-3/4  p-10">
      <h1 class="font-[Pacifico] text-9xl text">Nuntia</h1>
      <p class="text-3xl text para">The one stop destination for all communication between teachers and students</p>
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
    background-image: url("./heroImage.png");
  }
  .borderc {
    border: 1px solid black;
  }
  .textSection {
    padding: 5rem 0;
  }
  .text {
    padding: 2.5rem;
  }
  .para {
    font-family: 'Mali', cursive;
  }
</style>