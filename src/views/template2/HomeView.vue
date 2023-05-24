

<template>


    <main
    class="text-light"
    >

        <div
        class="section-1 pt-0 border d-flex  align-items-stretch"
        >
            <div
            class="img-container"
            >

                <img :src="img1"  class="img" alt="..."/>

            </div>

            <div
            class="overlay bg-light"></div>

            <div
            class="content px-4">

                <h1 class="title h1">Protecting natural habitats from extinction.</h1>

                <button type="button" class="btn btn-primary p-3 mt-2">Call to Action</button>

            </div>


        </div>

        <!--section-->
        <div
        class="bg-primary"
        >

            <!--content-->
            <div
            class="p-4">

                <h2>I'm here....</h2>

            </div>

        </div>

        <!--section-->
        <div
        class="bg-secondary"
        >

            <!--content-->
            <div
            class="p-4">

                <h2>I'm after here....</h2>

            </div>


        </div>

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

.section-1{
    position: absolute;
    min-height: 80vh;
    top: 0;
    left: 0;

}

.img-container {
    min-height: 80vh;
    min-width: 100vw;
    z-index: -3;
}

.content {
    position: absolute;
    top: 40vh;
}

.overlay {
    position: absolute;
    min-height: 80vh;
    min-width: 100vw;
    opacity: 0.3;
    background-color: grey;
    z-index: -2;
}


</style>