<!-- <script>
  import diacard from "$lib/images/diacard.jpeg";
  import gynecareImg from "$lib/images/gynecare.jpeg";
  import orthoCare from "$lib/images/orthoCare.jpeg";
  import childCare from "$lib/images/childcare.jpeg";
  import criticalCare from "$lib/images/criticalcare.jpeg";
  import Respiratory from "$lib/images/respiratory.jpeg";

  const categories = [
    { id: 1, name: "Diacard", image: diacard },
    { id: 2, name: "GyneCare", image: gynecareImg },
    { id: 3, name: "OrthoCare", image: orthoCare },
    { id: 4, name: "Child Care", image: childCare },
    { id: 5, name: "Respiratory", image: Respiratory },
    { id: 6, name: "Critical Care", image: criticalCare },
  ];
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
  {#each categories as category}
    <div
      class="relative rounded-lg h-32 flex items-center justify-center overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('{category.image}');"
      ></div>
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative text-white z-10 text-5xl">
        {category.name}
      </div>
    </div>
  {/each}
</div> -->

<script>
  import { onMount } from "svelte";
  import { medicines } from "../../lib/MedicineList.js";

  let selectedLetter = "";
  let filteredMedicines = [];

  // Alphabet array for the navigation bar
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Function to filter medicines based on selected letter
  function filterMedicines() {
    if (selectedLetter) {
      filteredMedicines = medicines.filter((medicine) =>
        medicine.name.startsWith(selectedLetter)
      );
    } else {
      filteredMedicines = medicines;
    }
    console.log("Selected Letter:", selectedLetter);
    console.log("Filtered Medicines:", filteredMedicines);
  }

  // Initialize filteredMedicines on mount
  onMount(() => {
    filterMedicines();
  });

  // Reactive statement to watch selectedLetter and filter medicines accordingly
  $: selectedLetter, filterMedicines();
</script>

<div class="p-4">
  <!-- Alphabet Navigation -->
  <div class="flex flex-wrap mb-4 justify-center">
    {#each alphabet as letter}
      <button
        class="p-2 m-1 border rounded text-center cursor-pointer"
        class:bg-blue-800={selectedLetter === letter}
        class:text-white={selectedLetter === letter}
        on:click={() => {
          selectedLetter = selectedLetter === letter ? "" : letter;
        }}
      >
        {letter}
      </button>
    {/each}
  </div>

  <!-- Medicine List -->
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    {#if filteredMedicines.length === 0}
      <div class="col-span-full text-center text-gray-500">
        No medicines found for the selected letter.
      </div>
    {:else}
      {#each filteredMedicines as medicine}
        <div class="border p-4 rounded">
          {medicine.name}
        </div>
      {/each}
    {/if}
  </div>
</div>

<style>
  @import "tailwindcss/tailwind.css";
</style>
