<script>
  export let data;
</script>

<div class="relative w-screen h-[70vh]">
  <img
    src={data.image}
    alt="Banner"
    class="absolute inset-0 w-full h-full object-cover object-botom"
  />
  <div class="absolute inset-0 bg-black bg-opacity-50" />
  <div
    class="relative flex flex-col items-center justify-center w-full h-full text-center p-10 text-white"
  >
    <p class="font-bold text-6xl">{data.tagText}</p>
    <p class="font-semibold p-7 max-w-2xl">{data.supportText}</p>
  </div>
</div>
