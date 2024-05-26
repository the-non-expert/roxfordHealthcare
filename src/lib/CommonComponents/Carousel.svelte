<script>
  import HeroComponent from "../HomeComponents/HeroComponent.svelte";

  export let cards;
  console.log(cards);
  let currentCardIndex = 0;

  function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % cards.length;
  }

  function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
  }

  function goToCard(index) {
    currentCardIndex = index;
  }
</script>

<div class="carousel w-full flex items-center justify-between">
  <HeroComponent data={cards[currentCardIndex]} />
</div>
<div class="dots">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  {#each cards as _, index}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <span
      class={`${index === currentCardIndex ? "dotSpan dotsActive" : "dotSpan"}`}
      on:click={() => goToCard(index)}
    ></span>
  {/each}
</div>

<style>
  .carousel {
    overflow: hidden;
  }
  .dots {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  .dotSpan {
    height: 8px;
    width: 10px;
    margin: 0 5px;
    background-color: #01d167;
    opacity: 20%;
    border-radius: 20%;
    display: inline-block;
    cursor: pointer;
  }

  .dotsActive {
    opacity: 100%;
    width: 20px;
  }
</style>
