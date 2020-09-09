import MessageContainer from "@/components/MessageContainer";
import { mount } from "@vue/test-utils";

describe("MessageContainer", () => {
  it("Wraps MessageDisplay component", () => {
    /**
     * 1. Mock API Call
     * 2. wait for promise to resolve
     * 3. check that the call happened once
     * 4. check that component displays the message
     */
    const wrapper = mount(MessageContainer, {
      stubs: {
        MessageDisplay: '<p data-testid="message">Hello from the db!</p>',
      },
    });
    const message = wrapper.find('[data-testid="message"]').element.textContent;
    expect(message).toEqual("Hello from the db!");
  });
});
