<script>
  import emailIcon from "$lib/images/emailIcon.svg";
  import phoneIcon from "$lib/images/phoneIcon.svg";
  import instagramIcon from "$lib/images/instagramIcon.svg";
  import whatsappIcon from "$lib/images/whatsappIcon.svg";
  import linkedInIcon from "$lib/images/linkedinIcon.svg";
  import youtubeIcon from "$lib/images/youtubeIcon.svg";
  import addressIcon from "$lib/images/addressIcon.svg";

  let socialMediaDetails = [
    {
      id: 1,
      name: "Instagram",
      iconUrl: instagramIcon,
      redirectLink: "",
    },
    {
      id: 2,
      name: "Whatsapp",
      iconUrl: whatsappIcon,
      redirectLink: "",
    },
    {
      id: 3,
      name: "LinkedIn",
      iconUrl: linkedInIcon,
      redirectLink: "",
    },
    {
      id: 4,
      name: "Youtube",
      iconUrl: youtubeIcon,
      redirectLink: "",
    },
  ];
</script>

<div
  class="p-10 w-1/2 flex flex-col gap-4 bg-slate-200 rounded-xl getInTouchContainer"
>
  <p class="font-semibold text-[#5374B8]">Get in Touch</p>
  <p>
    We love to hear from you. Our friendly team is always here to contact with
    you
  </p>

  <div>
    <img src={addressIcon} alt="addressIcon" class="w-10" />
  </div>
  <div>
    <p class="font-bold">Head Office:</p>
    <p>MCB-Z3-02330, Sikanderpura, Railway Road, Bathinda-151001</p>
  </div>
  <div>
    <p class="font-bold">Corporate Office:</p>
    <p>F-603, Rishi Apartments, Behind Golden Square Zirakpur-140603</p>
  </div>

  <div class="flex gap-2">
    <img src={emailIcon} alt="emailIcon" class="w-4" />
    <p class="font-semibold text-[#5374B8]">Chat with Us!</p>
  </div>
  <p>roxfordhealthcare@gmail.com</p>

  <div class="flex gap-2">
    <img src={phoneIcon} alt="phoneIcon" class="w-4" />
    <p class="font-semibold text-[#5374B8]">Phone</p>
  </div>
  <div>
    <p>Mon-Fri from 8am to 5pm.</p>
    <p>( +91 ) 85580-00195</p>
  </div>

  <div class="flex mt-5 gap-4">
    {#each socialMediaDetails as item (item.id)}
      <!-- svelte-ignore missing-declaration -->
      <a href={item.redirectLink}>
        <img src={item.iconUrl} alt="" class="w-6" />
      </a>
    {/each}
  </div>
</div>

<style>
  @media only screen and (max-width: 850px) {
    .getInTouchContainer {
      width: 90%;
    }
  }
</style>
