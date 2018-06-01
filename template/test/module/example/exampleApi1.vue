<template>
    <div :class="{'success':status,'error':!status}">
        <p>exampleApi</p>
    </div>
</template>
<script>
import api from '../index.js'
export default {
    data(){
        return {
            status:false
        }
    },
    mounted(){
        [APIEXAMPLE].then(res=>{
            this.status = true
        }).catch(err=>{
            this.status = false
        })
    }
}
</script>

