<script>
  import Carousel from "../lib/CommonComponents/Carousel.svelte";
  import medicineBanner from "../lib/images/medicineImage.jpeg";
  import trustBanner from "../lib/images/trustImage.jpeg";
  import innovationBanner from "../lib/images/innovationImage.jpeg";
  import OurSolutions from "../lib/HomeComponents/OurSolutions.svelte";

  const data = [
    {
      id: 1,
      tagText: "Innovating Health, Transforming Lives",
      supportText:
        "Our commitment to research and development drives us to create life-changing therapies and medications that improve the quality of life for millions of patients around the globe",
      image: innovationBanner,
    },
    {
      id: 2,
      tagText: "Your Trusted Partner in Healthcare",
      supportText:
        "We prioritize safety, efficacy, and accessibility, ensuring that our products meet the highest standards and reach those in need",
      image: trustBanner,
    },
    {
      id: 3,
      tagText: "Advancing Medicine for a Brighter Tomorrow",
      supportText:
        "Our team of experts is dedicated to pushing the boundaries of what's possible, aiming to deliver treatments that not only cure but also prevent disease, fostering a healthier future for all",
      image: medicineBanner,
    },
  ];
</script>

<svelte:head>
  <title>Home: Roxford Healthcare</title>
  <meta
    name="description"
    content="Roxford Healthcare is a global pharmaceutical company that is committed to improving the health and well-being of people around the world. We specialize in the development, manufacturing, and distribution of innovative and effective pharmaceutical solutions that address some of the most pressing health challenges of our time."
  />
</svelte:head>

<div>
  <div class="mb-9">
    <Carousel cards={data} />
  </div>
  <div>
    <OurSolutions />
  </div>
</div>
