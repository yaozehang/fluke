<template>
    <div class="warp">
        <div class="box-img fll">
            <router-link :to="{path:'/detail'}">
                <div class="boxItem">
                    <div>
                        <img class="imgList-img" src="/static/images/img1-list.png" alt="">
                    </div>
                    <div class="imgItem">
                        <div class="imgList-title">
                            <span class="qq big">TS®</span>
                            <span class="qq big">54</span>
                            <span class="qq big">TDR</span>
                            <span class="big">T</span>
                            <span class="est little">EST</span>
                            <span class="big">S</span>
                            <span class="est little">ET</span>
                        </div>
                        <p class="imgList-desc">TDR、音调发生器和线对标示器三位一体，出色的VDV电话测试设备</p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        }
    };
</script>

<style scoped lang="scss">
    .boxItem {
        width: 210px;
        background: #fff;
        padding: 10px;
        .imgList-img {
            width: 200px;
            height: 220px;
        }
        .imgItem {
            text-align: left; // padding: 0 5px; 
            .imgList-desc {
                font-size: 12px;
                color: #666
            }
            ;


        }
    }

    .imgList-title {
        color: #fcc800;
        font-weight: 400;
        padding: 10px 0;
        .big {
            font-size: 18px;

        }
        .little {
            font-size: 12px;
        }
    }

    .qq{
        margin-right: 6px;
    }
    .est {
        margin-right: 6px;
        margin-left: -4px;
    }

    a {
        text-decoration: none;
        color: #444;
    }
    .box-img {
        margin: 10px 10px 15px 0;
    }
</style>