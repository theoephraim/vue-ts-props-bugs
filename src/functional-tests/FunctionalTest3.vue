<script lang="ts">
import { h } from 'vue';
import type { ExtractPropTypes } from 'vue';
import { propsDefinition } from './props';

const FunctionalTest3 = (props: ExtractPropTypes<typeof propsDefinition>, context: any) => {
  return h('div', { class: ['functional-test-3'] }, context.slots.default());
};

FunctionalTest3.props = propsDefinition;

export default FunctionalTest3;
</script>

<style>
.functional-test-3 {
  height: 50px;
  background: red;
}
</style>