<template>
<div>
  <slot />
</div>
</template>

<script lang="ts" setup>
const props = defineProps<{ requiredProp: string }>();
</script>

<style>

</style>