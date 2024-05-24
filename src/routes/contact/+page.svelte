<script>
  import ContactForm from "./contactForm.svelte";
  import GetInTouch from "./getInTouch.svelte";
</script>

<div class="text-black bg-white flex mb-10 justify-center">
  <!-- <p class="p-4">Contact Us</p> -->
  <div class="flex gap-4 contactContainer">
    <GetInTouch />
    <ContactForm />
  </div>
</div>

<style>
  @media only screen and (max-width: 850px) {
    .contactContainer {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
