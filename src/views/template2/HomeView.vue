

<template>


    <main
    id="page">

        <article class="sections ">

            <section class="section section-full-bleed height-80-vh text-light">

                <div
                class="section-border height-80-vh d-flex flex-column justify-content-end "
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

                    <h2 class="text-wrap lh-base  pt-4">Mapping the beauty of imaginary worlds and real landscapes - with precision and artistry.</h2>

                    <p class="pt-4 mb-4 lh-lg">
                        With meticulous precision and unwavering artistry, we create maps that transport you to captivating realms of imagination and guide you through the intricate tapestry of actual terrains.
                    </p>

                </div>

            </section>

            <section class="section p-4">

                <div
                class="content"
                >
                    <img :src="img3" class="img-fluid mb-4">

                    <h3 class="text-wrap lh-base">Enhance the visual appeal of your scientific publication or project. </h3>

                    <p class="pt-4 mb-4 lh-lg">
                        Our design philosophy emphasizes the importance of presenting complex information in a clear, accurate, and visually appealing manner.
                    </p>

                </div>

            </section>

            <section class="section p-4">

                <div
                class="content"
                >
                    <img :src="img2" class="img-fluid mb-4">

                    <h4 class="text-wrap lh-base">Enhance the viewers sense of exploration and discovery, as they navigate through your fantasy realm.</h4>

                    <p class="pt-4 mb-4 lh-lg">
                        Having detailed maps aid in creating a rich and expansive world by highlighting important landmarks, cities, regions, and even fictional cultures or civilizations.
                    </p>

                </div>

            </section>

            <section class="section section-full-bleed text-light">

                <div
                class="section-border d-flex flex-column justify-content-end "
                >

                    <img :src="img1"  class="img" alt="..."/>

                    <div class="section-background-overlay"></div>

                    <div
                    class="content position-relative p-4 m-4"
                    >

                        <h5 class="title h1 lh-sm text-center">"I am truly impressed by the exceptional cartography services I received; their precision and attention to detail exceeded my expectations."</h5>

                        <p class="pt-4 mb-4 lh-lg text-center">- Quote Source</p>

                    </div>

                </div>

            </section>

            <section class="section p-4">

                <div
                class="content"
                >

                    <h4 class="text-wrap lh-base ">Join us on our journey as we explore the world through the art of cartography.</h4>

                    <p class="pt-4 mb-4 lh-lg">
                        Contact us today to discuss your mapping needs and let us bring your vision to life.
                    </p>

                    <div class="d-flex">
                         <button type="button" class="btn btn-secondary p-3 mt-4 flex-fill">Contact Us</button>
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

.h-0{
    font-size: calc(1.375rem + 2vw);
}

.height-80-vh {
    min-height: 80vh;
}

.height-40-vh {
    height: 40vh;
}

.section-full-bleed{
    width: 100vw;
    position: relative;
    top: 0;
    left: 0;
}

.section-border {
    position: relative;
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
    opacity: 0.2;
}

.img {
    object-position: 50% 50%;
    height: 100%;
    width: 100%;
    object-fit: cover;

}


</style>