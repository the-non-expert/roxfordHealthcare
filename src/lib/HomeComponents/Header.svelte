<script>
  import LogoMain from "../images/RoxfordLogo.jpg";

  let navOptions = [
    { id: 1, name: "Home", redirectUrl: "/" },
    { id: 2, name: "About Us", redirectUrl: "/about" },
    { id: 3, name: "Products", redirectUrl: "/products" },
    { id: 5, name: "Contact Us", redirectUrl: "/contact" },
  ];
</script>

<div class="flex justify-around mt-10 mb-5 items-center headerContainer">
  <div class="w-1/6 logoCont">
    <img src={LogoMain} alt="ROXFORD HEALTHCARE" class="" />
  </div>

  <header class="flex gap-12 justify-center headerOptions">
    {#each navOptions as item (item.id)}
      <a href={item.redirectUrl}>
        <p class="text-lg font-Montserrat">{item.name}</p></a
      >
    {/each}
  </header>
</div>

<style>
  @media only screen and (max-width: 639px) {
    .headerContainer {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .logoCont {
      width: 70%;
      margin-bottom: 10px;
    }

    .headerOptions {
      width: 80%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 25px;
      margin-bottom: 15px;
    }
  }
  @media only screen and (max-width: 999px) {
    .headerContainer {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .headerOptions {
      /* gap: 55px; */
      margin-bottom: 15px;
    }
  }
</style>
