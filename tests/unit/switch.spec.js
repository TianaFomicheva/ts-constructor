import { shallowMount } from '@vue/test-utils';
import Switch from '@/elements/Switch.vue';

describe('Switch.vue', () => {
  it('add validation points', () => {
    const submitLogoutMock = jest.fn();
    const wrapper = shallowMount(Switch);
    wrapper.vm.toggleRequired = submitLogoutMock;
    wrapper.find('#switch1').trigger('click');
    expect(wrapper.vm.toggleRequired).toHaveBeenCalledTimes(1);
  });
});
