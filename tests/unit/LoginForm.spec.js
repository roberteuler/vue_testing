import LoginForm from "@/components/LoginForm";
import { mount } from "@vue/test-utils";

describe("LoginForm", () => {
  it("emits an event with entered user data", () => {
    const wrapper = mount(LoginForm);
    /**
     * 1. Find text input
     * 2. set value for text input
     * 3. simulate form submission
     * 4. assert event has been emitted
     * 5. assert payload correct
     */
    const input = wrapper.find('[data-testid="name-input"]');
    input.setValue('HansGunther');
    wrapper.trigger('submit');

    const formSubmittedCalls = wrapper.emitted('formSubmitted');
    expect(formSubmittedCalls).toHaveLength(1);

    const expectedPayload = { name: 'HansGunther'};
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload);

  });
});
