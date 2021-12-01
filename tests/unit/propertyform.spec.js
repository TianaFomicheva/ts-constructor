import { shallowMount } from '@vue/test-utils';
import PropertyForm from '@/components/PropertyForm.vue';

describe('PropertyForm.vue', () => {
  it('add validation points', () => {
    const validationPoints = { isRequired: true };
    const wrapper = shallowMount(PropertyForm);
    wrapper.setData({ item: { key: 'key1', name: 'name1', fieldType: 'text' } });
    expect(wrapper.vm.item).toStrictEqual({
      key: 'key1', name: 'name1', fieldType: 'text',
    });
    const newVar = wrapper.vm.setValidationVals(validationPoints);
    expect(newVar).toMatchObject(validationPoints);
  });
});
