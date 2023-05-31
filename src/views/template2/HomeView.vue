

<template>


    <main
    id="page">

        <article class="sections ">

            <section class="section section-full-bleed text-light">

                <div
                class="section-border d-flex flex-column justify-content-end "
                >

                    <img :src="img1"  class="img" alt="..."/>

                    <div class="section-background-overlay"></div>

                    <div
                    class="content position-relative px-4 pb-4 height-40-vh"
                    >

                        <h1 class="title h-0 lh-sm ">Mapping wonders and inspiring journeys.</h1>

                        <button type="button" class="btn btn-primary p-3 mt-4">Learn More</button>

                    </div>

                </div>



            </section>



            <section class="section p-4">

                <div
                class="content"
                >

                    <h2 class="text-wrap lh-base">Mapping the beauty of imaginary worlds and real landscapes - with precision and artistry.</h2>

                    <p class="pt-4 mb-4 lh-lg">
                        With meticulous precision and unwavering artistry, we create maps that transport you to captivating realms of imagination and guide you through the intricate tapestry of actual terrains.
                    </p>

                </div>

            </section>

            <section class="section p-4">

                <div
                class="content"
                >
                    <img class="img-fluid mt-4" :src="img3">

                    <h2 class="lh-base">Harnessing the Benefits of Accurate and Scientific Cartography:</h2>

                    <p class="pt-4 lh-lg">
                        Our dedicated team of cartographers is committed to the pursuit of precision and scientific rigor in mapmaking. With cutting-edge technology and a deep understanding of geographic principles, we create maps that go beyond aesthetics, delivering reliable and insightful information.
                    </p>

                    <img class="img-fluid  mt-4" :src="img2">

                    <div
                    class="block-button-container d-flex flex-column"
                    >

                        <button type="button" class="btn btn-secondary p-3 mt-4">Get In Touch.</button>

                    </div>

                </div>

            </section>



        </article>


    </main>

</template>

<script>

    import image1 from "../../assets/images/ellorman_map_vintage_small.jpg"
    import image2 from "../../assets/images/7UVQQ2kx9uzvJy1XDoZRkW_small.jpg"
    import image3 from "../../assets/images/Area_Map_2_small.jpeg"

    export default {
    data: function () {
            return {
                img1: image1,
                img2: image2,
                img3: image3

            }
        }
    }

</script>

<style scoped>
.img-full-bleed {

}

.h-0{
    font-size: calc(1.375rem + 2vw);
}

.height-40-vh {
    height: 40vh;
}

.section-full-bleed{
    min-height: 80vh;
    width: 100vw;
    position: relative;
    top: 0;
    left: 0;
}

.section-border {
    position: relative;
    min-height: 80vh;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

}

.section-background{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    pointer-events: none;

}

.section-background-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: black;
    opacity: 0.3;
}

.img {
    object-position: 50% 50%;
    height: 100%;
    width: 100%;
    object-fit: cover;

}


</style>