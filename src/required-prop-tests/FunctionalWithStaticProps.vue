<script lang="ts">
import { h } from 'vue';

const FunctionalRequiredTest = (props: any, context: any) => {
  return h('div', {}, context.slots.default());
};

FunctionalRequiredTest.props = {
  requiredProp: { type: String, required: true },
};

export default FunctionalRequiredTest;
</script>

<style>
</style>
