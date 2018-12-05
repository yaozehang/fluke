<template>
    <div class="container">
        <div class="product-img">
            <div class="clearfix">
                <ImgBox v-for="o in 30" :key="o"></ImgBox>    
            </div>
        </div>
    </div>
</template>

<script>
    import ImgBox from "@/components/img-box/imgBox.vue"
    export default {
        components:{
            ImgBox
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped lang="scss">
    .container {
        width: 1200px;
    }

    
</style>