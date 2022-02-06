<template>
<div>
  <slot />
</div>
</template>

<script lang="ts" setup>
const props = defineProps({
  requiredProp: { type: String, required: true },
});
</script>

<style>

</style>