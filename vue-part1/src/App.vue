<template>
    <div>
        <p>part1 of learn vue</p>
        <p>{{ msg }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: 'Hello world!' // 入门必备文案
        }
    }
}
</script>
<style>
    body {
        background-color: #ccc;
    }
    #app {
        border: 1px solid #000;
    }
</style>

