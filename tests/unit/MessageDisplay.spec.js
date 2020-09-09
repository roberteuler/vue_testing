import MessageDisplay from "@/components/MessageDisplay";
import { mount } from "@vue/test-utils";
import { getMessage } from "@/services/axios.js";
import flushPromises from "flush-promises";

jest.mock("@/services/axios.js")
beforeEach( () => {
    jest.clearAllMocks();
})

describe("MessageDisplay", () => {
  it("Calls getMessage and displays Message", async () => {
    /**
     * 1. Mock API Call
     * 2. wait for promise to resolve
     * 3. check that the call happened once
     * 4. check that component displays the message
     */
    const mockMessage = "Hello from the db!";
    getMessage.mockResolvedValueOnce({ text: mockMessage });
    const wrapper = mount(MessageDisplay);

    await flushPromises();
    expect(getMessage).toHaveBeenCalledTimes(1);
    const message = wrapper.find('[data-testid="message"]').element.textContent;
    expect(message).toEqual(mockMessage);
  });

  it("Displays an error when getMessage call fails", async () => {
    /**
     * 1. Mock API Call
     * 2. wait for promise to resolve
     * 3. check that the call happened once 
     * 4. check that component displays the error
     */
    const mockError = "Oops! Something went wrong."
    getMessage.mockRejectedValueOnce(mockError);
     const wrapper = mount(MessageDisplay);

    await flushPromises();
    expect(getMessage).toHaveBeenCalledTimes(1);
    const message = wrapper.find('[data-testid="message-error"]').element.textContent;
    expect(message).toEqual(mockError);
  });
});
