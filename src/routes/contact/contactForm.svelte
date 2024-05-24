<script>
  //   import { myContactForm } from "../../Firebase.js";
  import { writable } from "svelte/store";

  const formData = writable({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  //   const handleSubmit = async () => {
  //     console.log("Submit button is getting clicked");

  //     const data = $formData; // Get the current value of the form data store

  //     console.log(data);

  //     try {
  //       // Add the form data to Firestore collection
  //       const docRef = await addDoc(myContactForm, { data });
  //       console.log("Document written with ID: ", docRef.id);

  //       // Optionally, reset the form after successful submission
  //       formData.set({
  //         fullName: "",
  //         email: "",
  //         phone: "",
  //         message: "",
  //       });
  //     } catch (error) {
  //       console.error("Error adding form data to Firestore:", error);
  //     }
  //   };
</script>

<div
  class="p-10 w-1/2 flex flex-col gap-8 bg-[#DCEBFE] rounded-xl contactFormContainer"
>
  <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
    <span
      class="before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-[#5374B8] relative inline-block"
    >
      <span class="relative text-white">Roxford</span>
    </span>
    HealthCare
  </blockquote>

  <form class="flex flex-col gap-4 text-black font-semibold">
    <div class="flex flex-col gap-1">
      <p>Full Name</p>
      <input
        type="text"
        bind:value={$formData.fullName}
        placeholder="Your Name"
        class="rounded-lg p-2 w-9/12 text-black placeholder:text-sm outline-none"
      />
    </div>
    <div class="flex flex-col gap-1">
      <p>Email</p>
      <input
        type="text"
        bind:value={$formData.email}
        placeholder="abc@company.com"
        class="rounded-lg p-2 w-9/12 text-black placeholder:text-sm outline-none"
      />
    </div>
    <div class="flex flex-col gap-1">
      <p>Phone</p>
      <input
        required
        type="tel"
        bind:value={$formData.phone}
        placeholder="+91 12345 67890"
        class="rounded-lg p-2 w-9/12 text-black placeholder:text-sm outline-none"
      />
    </div>
    <div class="flex flex-col gap-1">
      <p class="">How can we help you!</p>
      <textarea
        type="text"
        bind:value={$formData.message}
        placeholder="Leave us a Message..."
        class="rounded-lg p-2 w-9/12 text-black placeholder:text-sm outline-none font-normal"
      />
    </div>
    <button
      class="bg-[#242124] text-white rounded-lg h-12 w-1/2 hover:text-pink-600 hover:bg-white font-bold"
      type="submit">Send Message</button
    >
  </form>
</div>

<style>
  @media only screen and (max-width: 850px) {
    .contactFormContainer {
      width: 90%;
    }
  }
</style>
