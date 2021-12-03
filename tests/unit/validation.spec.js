import { shallowMount } from '@vue/test-utils';
import Validation from '@/components/Validation.vue';

describe('Validation.vue', () => {
  it('renders title', () => {
    const msg = 'Валидация';
    const wrapper = shallowMount(Validation, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
  it('renders snapshot', () => {
    const wrapper = shallowMount(Validation);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
