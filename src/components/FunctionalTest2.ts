import { h } from 'vue';
import { propsDefinition } from './props';

const FunctionalTest2 = (props: any, context: any) => {
  return h('div', { class: ['functional-test-2'] }, context.slots.default());
};

FunctionalTest2.props = propsDefinition;

export default FunctionalTest2;

// not a SFC so no easy way to add styles :(