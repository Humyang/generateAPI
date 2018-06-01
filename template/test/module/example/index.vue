<template>
    <div :class="{'success':status,'error':!status}">
        <p>exampleApi</p>
        <example-api></example-api>
    </div>
</template>
<script>
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
        
    }
}
</script>

