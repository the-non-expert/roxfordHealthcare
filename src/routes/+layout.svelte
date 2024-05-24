<script>
  import "../app.css";
  import Footer from "../lib/HomeComponents/Footer.svelte";
  import Header from "../lib/HomeComponents/Header.svelte";
</script>

<div>
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>
