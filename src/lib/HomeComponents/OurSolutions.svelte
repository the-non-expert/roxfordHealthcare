<script>
  import experiment from "../images/experiment.svg";
  import doctor from "../images/doctor.svg";
  import medicine from "../images/aboutImg.svg";
  const solutions = [
    {
      id: 1,
      heading: "Commitment to Innovation",
      supportText:
        "Our company prioritizes staying abreast of technological and medical advancements in the healthcare sector. Our experienced team remains vigilant in tracking the latest drug trends, ensuring our solutions are always in line with evolving industry standards and patient needs.",
      image: doctor,
    },
    {
      id: 1,
      heading: "Drug Development and Testing",
      supportText:
        "Our company prioritizes staying abreast of technological and medical advancements in the healthcare sector. Our experienced team remains vigilant in tracking the latest drug trends, ensuring our solutions are always in line with evolving industry standards and patient needs.",
      image: experiment,
    },
    {
      id: 1,
      heading: "Pharmaceutical Manufacturing",
      supportText:
        "Our company prioritizes staying abreast of technological and medical advancements in the healthcare sector. Our experienced team remains vigilant in tracking the latest drug trends, ensuring our solutions are always in line with evolving industry standards and patient needs.",
      image: medicine,
    },
  ];
</script>

<div class=" mb-10">
  <p class="font-semibold text-center text-3xl mb-8">Our Solutions</p>

  <div class="w-full flex gap-2 px-5 solutionContainer">
    {#each solutions as solution}
      <div class="bg-[#F0F4FF] w-1/3 rounded-xl">
        <img src={solution.image} alt="solution" class="w-1/2 p-4" />
        <p class="font-[Montserrat] font-light text-4xl p-2">
          {solution.heading}
        </p>
        <p class="font-light p-4">
          {solution.supportText}
        </p>
      </div>
    {/each}
  </div>
</div>

<style>
  @media only screen and (max-width: 999px) {
    .solutionContainer {
      flex-direction: column;
    }
  }
</style>
