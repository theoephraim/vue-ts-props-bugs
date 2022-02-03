<template>
<div class="regular-component">
  <slot />
</div>
</template>

<script lang="ts" setup>
import { propsDefinition } from './props';

const props = defineProps(propsDefinition);
</script>

<style>
.regular-component {
  height: 50px;
  background: green;
}
</style>