<template>
    <div class="main-body">
        <v-container>
            <div class="content-section">
                <div class="title-div">
                    <h5>Id Card Creator</h5>
                </div>
                <div class="form-area">
                    <form v-on:submit.prevent="generateId">
                        <div class="form-group">
                            <label for="fullname">FullName</label>
                            <input type="text" v-model="fullName" required class="form-control" placeholder="Enter Your Name">
                        </div>
                        <div class="form-group">
                            <label for="dateofbirth">Date Of Birth</label>
                            <input type="date" v-model="dateOfBirth" required class="form-control" placeholder="Enter Your Date of Birth">
                        </div>
                        <div class="form-group">
                            <label for="occupation">Occupation</label>
                            <input type="text" v-model="occupation" required class="form-control" placeholder="Enter Your Occupation">
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btn btn-success" value="Generate ID Card">
                            <!-- <v-btn class="success">Generate ID Card</v-btn> -->
                        </div>
                    </form>
                </div>
                <div class="copyright-area">
                    <p>Designed and Developed by <router-link to="https://kizitotech.000webhostapp.com">Brain.js</router-link></p>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fullName: '',
            dateOfBirth: '',
            occupation: ''
        }
    },
    methods: {
        generateId() {
            var itemToStore = {
                "fullName": this.fullName,
                "dateOfBirth": this.dateOfBirth,
                "occupation" : this.occupation
            }
          localStorage.setItem('userData', JSON.stringify(itemToStore))
          this.$router.push('/view_id')
        }
    }
}
</script>

<style scoped>
    .main-body {
        background-color: lightgreen;
    }

    .title-div {
        text-align: center;
        margin-top: 50px;
    }

    .form-area {
        width: 60%;
        margin-left: 20%;
        margin-right: 20%;
        margin-top: 50px;
        margin-bottom: 40px;
        background-color: whitesmoke;
        border-radius: 7px;
    }

    form {
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .copyright-area {
        text-align: center;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    input {
        background-color: lightgreen;
        margin-bottom: 30px;
    }
</style>