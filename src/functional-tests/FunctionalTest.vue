<script lang="ts">
import { h } from 'vue';
import { propsDefinition } from './props';

const FunctionalTest = (props: any, context: any) => {
  return h('div', { class: ['functional-test'] }, context.slots.default());
};

FunctionalTest.props = propsDefinition;

export default FunctionalTest;
</script>

<style>
.functional-test {
  height: 50px;
  background: blue;
}
</style>
