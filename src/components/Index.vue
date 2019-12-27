<template>
    <div class="main-body">
        <v-container>
            <div class="content-area">
                <h4>{{ indexGreeting }}</h4>
                <v-img src="../assets/bg.jpg" class="img"></v-img>
                <router-link to="/createForm"><v-btn class="primary" id="getStartBtn">Let's get Started</v-btn></router-link>
            </div>
            <div class="copyright-area">
                <p>Designed and Developed by Brain.js</p>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            indexGreeting: this.$store.state.indexPageGreeting
        }
    }
}
</script>

<style scoped>
    .main-body {
        background-color: lightgreen;
    }

    .content-area {
        text-align: center;
    }

    .content-area> h4 {
        margin-top: 100px;
        margin-bottom: 50px;
    }
    
    #getStartBtn {
        margin-top: 30px;
    }
    .content-area> .img {
        width: 30%;
        height: 30%;
        margin-left: 35%;
        margin-right: 35%;
    }

    .copyright-area {
        text-align: center;
        margin-top: 56px;
        margin-bottom: 100px;
    }
</style>