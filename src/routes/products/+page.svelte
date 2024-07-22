<script>
  import diacard from "$lib/images/diacard.jpeg";
  import gynecareImg from "$lib/images/gynecare.jpeg";
  import orthoCare from "$lib/images/orthoCare.jpeg";
  import childCare from "$lib/images/childcare.jpeg";
  import criticalCare from "$lib/images/criticalcare.jpeg";
  import Respiratory from "$lib/images/respiratory.jpeg";

  const categories = [
    { id: 1, name: "Diacare", image: diacard, redirect: "/products/diacare" },
    {
      id: 2,
      name: "GyneCare",
      image: gynecareImg,
      redirect: "/products/gynecare",
    },
    {
      id: 3,
      name: "OrthoCare",
      image: orthoCare,
      redirect: "/products/orthocare",
    },
    {
      id: 4,
      name: "Child Care",
      image: childCare,
      redirect: "/products/childcare",
    },
    {
      id: 5,
      name: "Respiratory",
      image: Respiratory,
      redirect: "/products/respiratory",
    },
    {
      id: 6,
      name: "Critical Care",
      image: criticalCare,
      redirect: "/products/criticalcare",
    },
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
        <a href={category.redirect}>{category.name}</a>
      </div>
    </div>
  {/each}
</div>
