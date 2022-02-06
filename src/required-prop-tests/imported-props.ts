import { PropType } from 'vue';

export const propsDefinitionObject = {
  // should be checked that some value is set
  requiredProp: { type: String, required: true },
};

export type PropsDefinitionTypes = {
  requiredProp: string,
}