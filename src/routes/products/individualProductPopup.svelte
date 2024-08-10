<script>
  import { gsToHttp } from "$lib/CommonComponents/utils.js";
  import { showPopup, selectedMedicine } from "$lib/stores.js";

  // Subscribe to the stores
  let isPopupVisible;
  let medicine;

  showPopup.subscribe((value) => {
    isPopupVisible = value;
  });

  selectedMedicine.subscribe((value) => {
    medicine = value;
  });

  function closePopup() {
    showPopup.set(false);
    selectedMedicine.set(null);
  }
</script>

{#if isPopupVisible}
  <div
    class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
  >
    <div
      class="bg-white p-5 rounded shadow-lg w-full max-w-2xl relative overflow-y-auto max-h-full"
    >
      <button
        on:click={closePopup}
        class="absolute top-0 right-0 mt-2 mr-2 text-black text-2xl leading-none hover:text-red-600"
      >
        &times;
      </button>
      {#if medicine}
        <img
          src={gsToHttp(medicine.imageUrl)}
          alt={medicine.name}
          class="w-full h-64 object-contain rounded-lg"
        />
        <div class="px-2">
          <div class="text-2xl font-bold mb-3 text-center">{medicine.name}</div>
          <div class="mb-2">
            <table class="table-fixed w-full">
              <tbody>
                <tr class="border-b">
                  <td class="font-semibold align-top p-2">Description:</td>
                  <td class="text-gray-700 p-2"
                    >{medicine.description || "No description available."}</td
                  >
                </tr>
                <tr class="border-b">
                  <td class="font-semibold align-top p-2">Compositions:</td>
                  <td class="text-gray-600 p-2"
                    >{medicine.composition || "N/A"}</td
                  >
                </tr>
                <tr class="border-b">
                  <td class="font-semibold align-top p-2">Status:</td>
                  <td class="text-gray-600 p-2">{medicine.status || "N/A"}</td>
                </tr>
                <tr class="border-b">
                  <td class="font-semibold p-2">Formulation:</td>
                  <td class="text-gray-600 p-2"
                    >{medicine.formulation || "N/A"}</td
                  >
                </tr>
                <tr class="border-b">
                  <td class="font-semibold p-2">Dosage/Directions to use:</td>
                  <td class="text-gray-600 p-2">{medicine.dosage || "N/A"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .fixed {
    max-height: 100vh;
  }
</style>
