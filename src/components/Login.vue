<template>
  <div class="app">
    <b-container>
        <b-row class="justify-content-md-center">
            <b-col col md="8">
                <b-card header="LOGIN"
                header-bg-variant="primary"
                header-text-variant="white">
                <b-card-text>
                    <b-form @submit="onSubmit">
                        <b-form-group description="Enter your username"
                        label="username">
                    <b-form-input v-model="username" required>
                    </b-form-input>
                    </b-form-group>

                    <b-form-group description="Enter your password"
                        label="password">
                    <b-form-input v-model="password" required type="password">
                    </b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-button type="submit" variant="outline-primary">
                            Login
                        </b-button>
                    </b-form-group>
                    </b-form>
                </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
                alert(this.username + ' ' + this.password)
            }
        }
    }
</script>

<style>

</style>