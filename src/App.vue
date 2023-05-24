<script setup>

import { RouterLink, RouterView } from 'vue-router'
import InstagramIcon from './components/icons/IconInstagram.vue'
</script>



<template>

<header>
    <!--

        theme 2 : navbar-dark

     -->
    <nav class="navbar navbar-dark navbar-expand-lg  ">

        <div class="container-fluid ">

            <a class="navbar-brand title" href="#">The Cartographer</a>

            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                <span class="navbar-toggler-icon "></span>

            </button>

            <div class="collapse navbar-collapse " id="navbarSupportedContent">

                <ul class="navbar-nav me-auto me-lg-0 ms-md-auto mb-2 mb-md-0">

                    <li class="nav-item">

                        <a class="nav-link active text-light" aria-current="page" href="/template1/">Home</a>

                    </li>

                    <li class="nav-item">

                        <a class="nav-link active text-light" aria-current="page" href="/template1/about">About</a>

                    </li>


                    <li class="nav-item">

                        <a class="nav-link active text-light" aria-current="page" href="/template1/contact">Contact</a>

                    </li>


                </ul>


            </div>

        </div>

    </nav>

</header>

<RouterView/>

<footer
class="bg-dark"
>

    <div class="d-flex flex-column">

        <!--bottom nav-->
        <ul class="navbar-nav d-flex flex-row justify-content-center">

                <li class="nav-item ">

                    <a class="nav-link  p-0 text-light border-end px-2" aria-current="page" href="#">Home</a>

                </li>

                <li class="nav-item">

                    <a class="nav-link  p-0 text-light border-end px-2" aria-current="page" href="#">About</a>

                </li>



                <li class="nav-item">

                    <a class="nav-link  p-0 text-light px-2" aria-current="page" href="#">Contact</a>

                </li>

            </ul>

        <div
        class="d-flex justify-content-center"
        >

             <div
            class="text-center py-4"
            >

                <InstagramIcon
                class="text-light"
                />

            </div>

        </div>

        <!--socials-->

        <!--email icon-->

        <!--insta icon-->
    </div>


</footer>

</template>

<style>

/* Theme 2 */
#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
/* Theme 2 */

header {
    padding: 4vw;
}

main {
    /*
        theme1:
        padding-left: 4vw;
        padding-right: 4vw;
    */
}

footer {
    padding-top: 4vw;
    padding-left: 4vw;
    padding-right: 4vw;

    /* theme 2 ? */

    margin-top: auto;

    /* theme 2 */
}

.navbar-toggler {
    border: none;
}

.img-square--container{
    height: 45vh;
}

.img-square--wrapper{
    position: relative;
    width: 100%;
    height: 100%;
}

.img{
    position: absolute;
    width: 100%;
    height: 100%;
    object-position: 50% 50%;
    object-fit: cover;
}


.row {
    padding-top: calc(45vmax / 10);
    padding-bottom: calc(45vmax / 10);
}

.carousel-inner{
    height: 75vh;
}

.carousel-item{
    position: relative;
    width: 100%;
    height: 100%;
}


.carousel .carousel-indicators button {
    width: 10px;
    height: 10px;
    border-radius: 100%;

}

</style>