<template>

  <main>

    <div
    class="row"
    >
        <div
        class="col-12 col-md-6 pt-4 d-flex order-2 order-md-1 align-items-center"
        >

            <h1 class="title h2">Personal biographical text, explaining yourself, hobbies etc... Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </h1>

        </div>

        <div
        class="col-12 col-md-6 order-1 order-md-2 "
        >
            <img :src="img" class="img-fluid" alt="..." >

        </div>


    </div>

    <div class="row">

        <div
        class="col-12"
        >

            <p>Text describing your educational/work background, achievements etc ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies pretium elit, nec semper urna hendrerit sit amet. In in convallis elit. Donec aliquam ipsum ut velit cursus, in placerat magna pharetra.</p>

        </div>

    </div>

  </main>

</template>


<script>

import image from "../../assets/images/Sample_Sites_small.png"

export default {
    data: function () {
            return {
                img: image,
            }
        }
    }

</script>