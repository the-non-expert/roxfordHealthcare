<script>
  import "../app.css";
  import Footer from "../lib/HomeComponents/Footer.svelte";
  import Header from "../lib/HomeComponents/Header.svelte";
  import { page } from "$app/stores";

  $: activeRoute = $page.url.pathname;

  const noFooterRoutes = ["/"];
  $: showFooter = !noFooterRoutes.includes(activeRoute);
</script>

<div>
  <Header />

  <main>
    <slot />
  </main>

  {#if showFooter}
    <Footer />
  {/if}
</div>
