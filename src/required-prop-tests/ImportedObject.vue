<template>
<div>
  <slot />
</div>
</template>

<script lang="ts" setup>

import { propsDefinitionObject } from './imported-props';

const props = defineProps(propsDefinitionObject);
</script>

<style>

</style>