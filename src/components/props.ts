import { PropType } from 'vue';

export const propsDefinition = {
  // should be checked to match one of these values, should get intellisense autocomplete to pick one too
  prop1: { type: String as PropType<'foo' | 'bar'> },
  // should be checked to be a number
  numberProp: { type: Number },
  // should be checked that some value is set
  requiredProp: { type: String, required: true },
  // should not be checked value is string, should NOT be required
  hasDefault: { type: String, default: 'has a default' },
  // should be checked value is boolean, should NOT be required
  optionalBoolean: { type: Boolean },
};