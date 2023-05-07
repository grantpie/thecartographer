<script setup>


import InstagramIcon from '../../components/icons/IconInstagram.vue'
</script>

<template>

  <main>
    <div class="container py-4 ">

        <div
        class="row"
        >


            <div
            class="col-12 col-md-6"
            >
                <h1 class="title pb-4">Contact Me</h1>

                <p>
                    Short text about why the user should contact you, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <p>email@example.com</p>

                <div
                class="d-flex"
                >

                    <InstagramIcon/>

                </div>

            </div>

            <div
            class="col-12 col-md-6"
            >
                <!-- Bootstrap 5 starter form -->
                <form id="contactForm">

                    <!-- Name input -->
                    <div class="mb-3">

                        <label class="form-label" for="name">Name</label>
                        <input class="form-control" id="name" type="text" placeholder="Name" />

                    </div>

                    <!-- Email address input -->
                    <div class="mb-3">

                        <label label class="form-label" for="emailAddress">Email Address</label>
                        <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" />

                    </div>

                    <!-- Message input -->
                    <div class="mb-3">

                        <label class="form-label" for="message">Message</label>
                        <textarea class="form-control" id="message" type="text" placeholder="Message" style="height: 10rem;"></textarea>

                    </div>

                    <!-- Form submit button -->
                    <div class="d-grid d-md-flex ">

                        <button class="btn btn-secondary btn-lg" type="submit">Submit</button>

                    </div>

                </form>

            </div>


        </div>

    </div>

  </main>

</template>