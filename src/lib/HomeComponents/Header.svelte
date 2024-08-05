<script>
  import LogoMain from "../images/roxfordLogo2.png";

  let navOptions = [
    { id: 1, name: "Home", redirectUrl: "/" },
    { id: 2, name: "About Us", redirectUrl: "/about" },
    { id: 3, name: "Products", redirectUrl: "/products" },
    { id: 4, name: "Contact Us", redirectUrl: "/contact" },
    { id: 5, name: "Careers", redirectUrl: "/careers" },
  ];
</script>

<div
  class="headerContainer absolute left-0 right-0 z-10 flex justify-between px-20 gap-10 mt-5 mb-5 items-center bg-white w-10/12
  mx-auto rounded-xl p-2"
>
  <div class="w-1/6 logoCont">
    <img src={LogoMain} alt="ROXFORD HEALTHCARE" class="" />
  </div>

  <header class="flex gap-12 justify-center headerOptions">
    {#each navOptions as item (item.id)}
      <a href={item.redirectUrl}>
        <p class="text-lg font-Montserrat">{item.name}</p>
      </a>
    {/each}
  </header>
</div>

<style>
  @media only screen and (max-width: 999px) {
    .headerContainer {
      position: relative;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0;
      padding: 0;
      margin-bottom: 10px;
    }
    .logoCont {
      width: 80%;
      margin-bottom: 10px;
    }

    .headerOptions {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }
  }
</style>
