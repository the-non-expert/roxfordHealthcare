<script>
  import careerHero from "$lib/gifs/careers.gif";

  let name = "";
  let email = "";
  let phone = "";
  let resume = null;

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission
    console.log({ name, email, phone, resume });
  }

  function handleFileChange(event) {
    resume = event.target.files[0];
  }
</script>

<svelte:head>
  <title>Careers: Roxford Healthcare</title>
  <meta name="description" content="Apply to Roxford Healthcare Pvt Ltd." />
</svelte:head>

<div
  class="flex flex-col md:flex-row items-center justify-between p-6 px-10 rounded-lg shadow-md gap-10 md:pt-28"
>
  <!-- Careers Hero Image -->
  <div class="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
    <img
      src={careerHero}
      alt="Careers"
      loading="lazy"
      class="w-full h-auto rounded-lg shadow-md"
    />
  </div>

  <!-- Careers Form  -->
  <div class="w-full md:w-1/2 flex flex-col space-y-4">
    <h2 class="text-3xl font-bold m-2 mx-auto">Join Our Team</h2>
    <form on:submit={handleSubmit} class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Name</label
        >
        <input
          type="text"
          id="name"
          bind:value={name}
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          type="email"
          id="email"
          bind:value={email}
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700"
          >Phone</label
        >
        <input
          type="tel"
          id="phone"
          bind:value={phone}
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label for="resume" class="block text-sm font-medium text-gray-700"
          >Resume Upload (only PDFs)</label
        >
        <input
          type="file"
          id="resume"
          accept=".pdf"
          on:change={handleFileChange}
          class="mt-1 p-4 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >Submit</button
      >
    </form>
  </div>
</div>
