<template>
    <div class="main-body">
        <v-container>
            <div class="content-area">
                <div class="title-div">
                    <p><strong>Scan the Barcode below to verify id card ownership</strong></p>
                    <!-- <barcode v-bind:value="this.barcodeId">
                        Show this if the rendering fails.
                    </barcode> -->
                </div>
                <div class="idCardArea">
                    <div class="row">
                        <div class="col-md-6">
                            <h6>Front view</h6>
                            <div class="idFront">
                                <p class="id-title"><strong>My Barcode Id Card</strong></p>
                                <div class="image-circle-div">
                                    <img src="../assets/idpics.png" class="image">
                                </div>
                                <div class="profile-info">
                                    <h5>Brain.js</h5>
                                    <h5>22/09/2019</h5>
                                    <h5>Software Developer</h5>
                                    <p id="id-copyright">Designed by <router-link to="https://kizitotech.000webhostapp.com" class="portfolio-link">Brain.js</router-link></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <h6>Back view</h6>
                            <div class="idFront">
                                <p class="id-title"><strong>Verify Id by Scanning Code Below</strong></p>
                                <barcode v-bind:value="this.barcodeId">
                                    Show this if the rendering fails.
                                </barcode>
                                <div class="profile-info">
                                    <h5>If Found Please Return</h5>
                                    <h5>Property of Vue.js</h5>
                                    <h5>Nigeria.</h5>
                                    <p id="id-copyright">Designed by <router-link to="https://kizitotech.000webhostapp.com" class="portfolio-link">Brain.js</router-link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
import VueBarcode from 'vue-barcode'
export default {
    components: {
        'barcode': VueBarcode
    },
    data() {
        return {
            barcodeId: Math.random()
        }
    },
    created() {
        this.$store.dispatch('getLocalData')
    }
}
</script>

<style scoped>
    .main-body {
        background-color: lightgreen;
    }

    .title-div {
        text-align: center;
        margin-top: 30px;
    }

    .idCardArea {
        background-color: #fff;
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        border-radius: 7px;
        margin-top: 20px;
        text-align: center;
        padding-bottom: 10px;
        margin-bottom: 90px;
    }

    .image {
        border-radius: 200px;
        width: 200px;
    }

    .profile-info {
        margin-top: 10px;
        background-color: lightgreen;
        color: #000;
        padding-top: 20px;
    }

    .profile-info> h5 {
        font-size: 17px;
        font-style: italic;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    .idFront {
        background-color: whitesmoke;
        width: 70%;
        margin-left: 15%;
        margin-right: 15%;
        margin-top: 30px;
        border-radius: 5px;
    }

    .idFront> p {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        padding-top: 20px;
    }

    .id-title {
        color: lightgreen;
    }

    #id-copyright {
        font-size: 12px;
        padding-top: 20px;
        padding-bottom: 10px;
    }

    .portfolio-link {
        color: #000;
    }
</style>