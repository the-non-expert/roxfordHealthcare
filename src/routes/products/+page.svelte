<script>
  // import diacard from "$lib/images/diacard.jpeg";
  // import gynecareImg from "$lib/images/gynecare.jpeg";
  // import orthoCare from "$lib/images/orthoCare.jpeg";
  // import childCare from "$lib/images/childcare.jpeg";
  // import criticalCare from "$lib/images/criticalcare.jpeg";
  // import Respiratory from "$lib/images/respiratory.jpeg";

  import { gsToHttp } from "$lib/CommonComponents/utils.js";

  const categories = [
    {
      id: 1,
      name: "Diacard",
      image: "gs://roxford-healthcare.appspot.com/diacard.jpeg",
      redirect: "/products/diacard",
    },
    {
      id: 2,
      name: "GyneCare",
      image: "gs://roxford-healthcare.appspot.com/gynecare.jpeg",
      redirect: "/products/gynecare",
    },
    {
      id: 3,
      name: "OrthoCare",
      image: "gs://roxford-healthcare.appspot.com/orthoCare.jpeg",
      redirect: "/products/orthocare",
    },
    {
      id: 4,
      name: "Child Care",
      image: "gs://roxford-healthcare.appspot.com/childcare.jpeg",
      redirect: "/products/childcare",
    },
    {
      id: 5,
      name: "Respiratory",
      image: "gs://roxford-healthcare.appspot.com/respiratory.jpeg",
      redirect: "/products/respiratory",
    },
    {
      id: 6,
      name: "Critical Care",
      image: "gs://roxford-healthcare.appspot.com/criticalcare.jpeg",
      redirect: "/products/criticalcare",
    },
  ];
</script>

<svelte:head>
  <title>Products: Roxford Healthcare</title>
  <meta
    name="description"
    content="Check out our pharmaceutical collection of medicines. Please contact us for any queries."
  />
</svelte:head>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 md:pt-32">
  {#each categories as category}
    <div
      class="relative rounded-lg h-32 flex items-center justify-center overflow-hidden"
    >
      <a href={category.redirect}>
        <div
          class="absolute inset-0 bg-cover bg-center"
          style="background-image: url('{gsToHttp(category.image)}');"
        ></div>
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="relative text-white z-10 text-5xl">
          {category.name}
        </div>
      </a>
    </div>
  {/each}
</div>
