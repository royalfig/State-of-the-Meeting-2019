<template>
    <figure class="figure">
        <img :alt="text" :src="src">
        <figcaption>{{text}}</figcaption>
    </figure>
</template>

<script>
export default {
  props: {
      text: String,
      src: String
  }
}

</script>