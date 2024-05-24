<script>
  import aboutImage from "../../lib/images/aboutImg.svg";
</script>

<div class="text-center flex flex-col justify-center">
  <p class="font-semibold text-4xl p-2">
    ABOUT <span class="text-[#6F42C1]">ROXFORD</span> HEALTHCARE
  </p>
  <p class="font-semibold mx-auto max-w-3xl p-4">
    "Our vision at Roxford Healthcare is to be a leading global pharmaceutical
    company, recognized for our commitment to innovation, quality, and
    patient-centricity."
  </p>
</div>
<div class="flex aboutContainer px-10">
  <div class="w-1/2 flex flex-col align-center justify-center aboutText">
    <!-- <h1 class="font-bold text-2xl mb-2">About Prime Technology:</h1> -->
    <p>
      Roxford Healthcare is a global pharmaceutical company that is committed to
      improving the health and well-being of people around the world. We
      specialize in the development, manufacturing, and distribution of
      innovative and effective pharmaceutical solutions that address some of the
      most pressing health challenges of our time.
    </p>

    <h1 class="font-bold text-2xl mt-5 mb-2">Our Approach</h1>
    <p>
      At Roxford Healthcare, we believe that our relationships with our partners
      and our commitment to patient-centricity are the foundation of our
      success. We are dedicated to conducting our business with the highest
      standards of ethics and integrity, while placing the needs of patients at
      the centre of everything we do.
    </p>

    <h1 class="font-bold text-2xl mt-5 mb-2">Our Team</h1>
    <p>
      Our team of healthcare professionals is driven by a shared passion for
      improving patient outcomes and advancing medical knowledge. Through our
      continued growth and innovation, we strive to make a positive impact on
      the world and bring health and healing to those who need it most.
    </p>
  </div>
  <div class="w-1/2 flex justify-center aboutImage">
    <img src={aboutImage} alt="aboutImage" class=" p-10" />
  </div>
</div>

<div class="text-center flex flex-col justify-center">
  <p class="font-semibold text-4xl p-2">
    OUR <span class="text-[#6F42C1]">MISSION</span>
  </p>

  <p class="font-semibold mx-auto max-w-3xl p-4">
    "At Roxford Healthcare, our mission is to improve the health and well-being
    of people around the world by providing innovative and effective
    pharmaceutical solutions. We are dedicated to conducting our business with
    the highest standards of integrity and ethics, while placing the needs of
    patients at the centre of everything we do."
  </p>
</div>

<style>
  @media only screen and (max-width: 639px) {
    .aboutContainer {
      flex-direction: column;
    }

    .aboutText {
      width: 100%;
      text-align: center;
    }

    .aboutImage {
      width: 100%;
    }
  }

  @media only screen and (max-width: 999px) {
    .aboutContainer {
      flex-direction: column;
    }

    .aboutText {
      width: 100%;
      text-align: center;
    }

    .aboutImage {
      width: 100%;
    }
  }
</style>
