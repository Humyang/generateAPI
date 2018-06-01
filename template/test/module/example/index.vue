<template>
    <div :class="{'success':status,'error':!status}">
        <p>exampleApi</p>
        <example-api></example-api>
    </div>
</template>
<script>
import api from '../index.js'
import exampleApi from './exampleApi1'
export default {
    components:{
        exampleApi
    },
    data(){
        return {
            status:false
        }
    },
    mounted(){
        // api.example.exampleApi1({

        // }).then(res=>{
        //     this.status = true
        // }).catch(err=>{
        //     this.status = false
        // })
    }
}
</script>

