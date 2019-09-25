<template>
    <div v-if="!hide" class="p-4" style="position: absolute; top:0; left: 0; bottom: 0; right: 0; z-index: -10">
        <div class="h-100 w-100 my-auto row align-items-center">
            <div class="col justify-content-center text-center">
                <img width="90" class="py-3" :src="require('@/assets/images/loader2.gif')" alt="Loading"/>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'page-loader',
    props: {
      hide: {
        type: Boolean,
        default: false,
      }
    },
  };
</script>
