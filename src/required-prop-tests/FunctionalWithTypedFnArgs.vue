<script lang="ts">
import { h } from 'vue';

const FunctionalRequiredTest = (props: { requiredProp: string }, context: any) => {
  return h('div', {}, context.slots.default());
};


export default FunctionalRequiredTest;
</script>

<style>
</style>
