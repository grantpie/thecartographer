

<template>


    <main>

        <div
        class="row"
        >

            <div
            class="col-12"
            >

                <h1 class="title text-center p-4">Short descriptive text, no more than three-ish lines.</h1>

            </div>

        </div>

        <div
        class="row">

            <div
            class="col-12"
            >

                <div id="carousel" class="carousel carousel-fade slide" data-bs-ride="carousel">

                    <div class="carousel-indicators">

                        <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>

                        <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>

                        <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>

                    </div>

                    <div class="carousel-inner">

                        <div class="carousel-item active">

                            <img :src="img1"  class="img" alt="..."/>

                        </div>

                        <div class="carousel-item gallery-item">

                            <img :src="img2" class="img" alt="...">

                        </div>

                        <div class="carousel-item gallery-item">

                            <img :src="img3" class="img" alt="...">

                        </div>

                    </div>

                </div>

            </div>

        </div>

        <div
        class="row"
        >

            <div
            class="col-12 col-md-6 py-4"
            >

                <h2 class="title">Fictional and Fantasy Maps</h2>

                <p class="pb-2 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et convallis orci, eu auctor augue. Ut vel mi malesuada, convallis sem sed, placerat arcu.</p>

            </div>

            <div
            class="col-12 col-md-6 py-4 "
            >

                <div
                class="img-square--container"
                >

                    <div
                    class="img-square--wrapper"
                    >

                        <img :src="img2" class="img"  alt="..." width="100%" height="100%">

                    </div>

                </div>

            </div>

        </div>


        <div
        class="row"
        >

            <div
            class="col-12 col-md-6 py-4 order-md-2"
            >

                <h2 class="title">Non-Fictional and Academic Maps</h2>

                <p class="pb-2 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et convallis orci, eu auctor augue. Ut vel mi malesuada, convallis sem sed, placerat arcu.</p>

            </div>

            <div
            class="col-12 col-md-6 py-4 order-md-1"
            >

                <div
                class="img-square--container"
                >

                    <div
                    class="img-square--wrapper"
                    >

                        <img :src="img3" class="img"  alt="..." width="100%" height="100%">

                    </div>

                </div>

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