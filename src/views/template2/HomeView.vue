

<template>


    <main
    id="page"
    class="text-light"
    >

        <article class="sections">

            <section class="section section-full-bleed  border ">

                <div
                class="section-border d-flex flex-column justify-content-end"
                >

                    <img :src="img1"  class="img" alt="..."/>

                    <div class="section-background-overlay"></div>

                    <div
                    class="content position-relative border border-primary"
                    >


                        <h1 class="title h1">Protecting natural habitats from extinction.</h1>

                        <button type="button" class="btn btn-primary p-3 mt-2">Call to Action</button>

                    </div>

                </div>



            </section>

            <section class="section  bg-primary">

                <div
                class="content"
                >

                    <h2>Next section.</h2>

                </div>

            </section>

            <section class="section  bg-primary">

                <div
                class="content"
                >

                    <h2>Next section.</h2>

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

.section-full-bleed{
   min-height: 80vh;
   width: 100vw;
    position: relative;
   top: 0;
   left: 0;
}

.section-border {
    position: relative;
    border:solid thick black;
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