<script setup lang="ts">
import InlineObject from './InlineObject.vue';
import ImportedObject from './ImportedObject.vue';
import InlineTypes from './InlineTypes.vue';
import ImportedTypes from './ImportedTypes.vue';

import FunctionalWithStaticProps from '/FunctionalWithStaticProps.vue';
import FunctionalWithTypedFnArgs from './FunctionalWithTypedFnArgs.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup


</script>

<template>
  <InlineObject></InlineObject>
  <InlineObject required-prop="ok"></InlineObject>
  <InlineObject :required-prop="false"></InlineObject>

  <InlineTypes></InlineTypes>
  <InlineTypes required-prop="ok"></InlineTypes>
  <InlineTypes :required-prop="false"></InlineTypes>

  <ImportedTypes></ImportedTypes>
  <ImportedTypes required-prop="ok"></ImportedTypes>
  <ImportedTypes :required-prop="false"></ImportedTypes>

  <!-- props object definition imported into component definition -->
  <ImportedObject></ImportedObject> <!-- required check doesnt work -->
  <ImportedObject required-prop="ok"></ImportedObject>
  <ImportedObject :required-prop="false"></ImportedObject> <!-- type check still works -->

  <!-- functional component, seems to be an unrelated issue -->
  <FunctionalWithStaticProps></FunctionalWithStaticProps>
  <FunctionalWithStaticProps required-prop="ok"></FunctionalWithStaticProps>
  <FunctionalWithStaticProps :required-prop="false"></FunctionalWithStaticProps>

  <FunctionalWithTypedFnArgs></FunctionalWithTypedFnArgs>
  <FunctionalWithTypedFnArgs required-prop="ok"></FunctionalWithTypedFnArgs>
  <FunctionalWithTypedFnArgs :required-prop="false"></FunctionalWithTypedFnArgs>

</template>

<style>

</style>
