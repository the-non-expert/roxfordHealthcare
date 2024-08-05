<script>
  export let data;
</script>

<div class="hero relative w-screen h-[90vh]">
  <img
    src={data.image}
    alt="Banner"
    class="absolute inset-0 w-full h-full object-cover object-center"
  />
  <div class="absolute inset-0 bg-black bg-opacity-60"></div>
  <div
    class="relative flex flex-col items-center justify-center w-full h-full text-center p-10 text-white hero-content"
  >
    <p class="font-bold text-6xl">{data.tagText}</p>
    <p class="font-semibold p-7 max-w-2xl">{data.supportText}</p>
  </div>
</div>

<style>
  .hero {
    position: relative;
    z-index: 1;
  }
  .hero img {
    z-index: -1;
  }
  .hero-content {
    z-index: 2;
  }
</style>
