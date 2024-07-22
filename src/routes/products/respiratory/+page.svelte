<script>
  import { onMount } from "svelte";
  import { respiratoryMedicineDetails } from "../../../lib/RespiratoryMedicineList.js";

  let selectedLetter = "";
  let filteredMedicines = [];

  let medicines = respiratoryMedicineDetails;

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
  }

  // Initialize filteredMedicines on mount
  onMount(() => {
    filterMedicines();
  });

  function gsToHttp(gsUrl) {
    const baseUrl =
      "https://firebasestorage.googleapis.com/v0/b/roxford-healthcare.appspot.com/o/";
    const filePath = gsUrl.replace("gs://roxford-healthcare.appspot.com/", "");
    const encodedFilePath = encodeURIComponent(filePath);
    return `${baseUrl}${encodedFilePath}?alt=media`;
  }

  // Reactive statement to watch selectedLetter and filter medicines accordingly
  $: selectedLetter, filterMedicines();
</script>

<div class="p-4">
  <p class="font-bold text-center text-5xl mb-8">Respiratory</p>

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
        <div class="border p-3 rounded flex flex-col items-center">
          <img
            src={gsToHttp(medicine.imageUrl)}
            alt={medicine.name}
            class="mb-2 h-48 object-cover"
          />
          <div class="text-lg font-semibold mb-1">{medicine.name}</div>
          <!-- <div class="text-sm text-gray-600">{medicine.compositions}</div> -->
        </div>
      {/each}
    {/if}
  </div>
</div>
