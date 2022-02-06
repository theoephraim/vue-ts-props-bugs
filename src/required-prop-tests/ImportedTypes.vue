<template>
<div>
  <slot />
</div>
</template>

<script lang="ts" setup>
import { PropsDefinitionTypes } from './imported-props';

const props = defineProps<PropsDefinitionTypes>();
</script>

<style>

</style>