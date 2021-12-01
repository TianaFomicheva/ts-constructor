import { shallowMount } from '@vue/test-utils';
import Validation from '@/components/Validation.vue';

describe('Validation.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Валидация';
    const wrapper = shallowMount(Validation, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
