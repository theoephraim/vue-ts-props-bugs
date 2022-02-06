<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import RegularComponent from './RegularComponent.vue';

import FunctionalTest from './FunctionalTest.vue';
import FunctionalTest2 from './FunctionalTest2';
import FunctionalTest3 from './FunctionalTest3.vue';


</script>

<template>
  <!-- Normal stateful vue component - type checking is working, required props are not due to being imported, see required-prop-tests for details -->
  <RegularComponent prop1="asdf" number-prop="3">hello!</RegularComponent>
  <RegularComponent prop-1="foo" :number-prop="3">hello!</RegularComponent> <!-- should complain once other prop checks are OK -->
  <RegularComponent prop-1="foo" :number-prop="3" required-prop="ok">hello!</RegularComponent>


  <!-- Test 1 - functional component, props set as FunctionalTest.props, nothing working ---------------------------------------->
  <FunctionalTest prop-1="asdf" number-prop="3">hello!</FunctionalTest>
  <!-- Test 2, same but using a TS file instead of .vue SFC, just in case that was causing issues ------------------------------->
  <FunctionalTest2 prop-1="asdf" number-prop="3">hello!</FunctionalTest2>



  <!-- Test 3, explicitly uses ExtractPropTypes to add type on props arg of functional component function ----------------------->

  <!-- typechecking on props now works! -->
  <FunctionalTest3 prop-1="asdf" number-prop="3">hello!</FunctionalTest3>

  <!-- but incorrectly complaining that optional boolean and prop with default are missing :( -->
  <FunctionalTest3 prop-1="foo" :number-prop="3" required-prop="ok">hello!</FunctionalTest3>

  <!-- should complain that required prop is missing, but does not :( -->
  <FunctionalTest3 prop-1="foo" :number-prop="3" optional-boolean has-default="asdf">hello!</FunctionalTest3>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
