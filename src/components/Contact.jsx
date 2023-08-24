import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("moqodndb");
  const succesMail = document.querySelector(".succesMail");
  if (state.succeeded) {
    succesMail.textContent = "Thanks for joining!";
    succesMail.classList.remove("hidden");
    setTimeout(() => {
      succesMail.textContent = "";
      succesMail.classList.add("hidden");
    }, 4000);
  }
  return (
    <div
      id="contact"
      className="flex flex-col items-center bg-[#5fdafb] xl:h-screen "
    >
      <h3 className="wow text-center pt-4 xl:mb-18  xl:mb-28 font-semibold text-xl md:pt-8 lg:text-2xl shadow-black text-shadow shadow-black-400 animate__animated animate__zoomIn">
        Contact
      </h3>
      <form
        onSubmit={handleSubmit}
        className="wow flex flex-col shadow-black shadow-lg p-6 rounded   backdrop-blur-lg animate__animated animate__flipInX w-full xl:w-6/12 lg:w-6/12 md:w-8/12 sm:w-10/12"
      >
        <label htmlFor="contact_author">
          <div>*Full Name </div>
        </label>
        <input
          type="text"
          name="contact_author"
          id="contact_author"
          className="rounded bg-[#ffffff33] px-1 border-2 sm:w-8/12 md:w-6/12 lg:w-4/12 "
          required
        />
        <label htmlFor="_replyto">
          <div>*Email </div>
        </label>
        <input
          type="email"
          name="_replyto"
          id="_replyto"
          className="rounded bg-[#ffffff33] px-1 border-2 sm:w-8/12 md:w-6/12 lg:w-4/12"
          required
        />
        <label htmlFor="contact_subject">
          <div>*Subject</div>
        </label>
        <input
          type="text"
          name="contact_subject"
          id="contact_subject"
          className="rounded bg-[#ffffff33] px-1 border-2 sm:w-8/12 md:w-6/12 lg:w-4/12"
          required
        />
        <label htmlFor="contact_content">
          <div>*Message</div>
        </label>
        <textarea
          name="contact_content"
          id="contact_content"
          className=" h-40 rounded bg-[#ffffff33] px-1 border-2 "
          style={{ resize: "none" }}
          required
        ></textarea>
        <input type="hidden" name="_next" value="https://site.io/thanks.html" />
        <button
          type="submit"
          className="border w-20 mt-2 rounded bg-[#ffffff33] p-2 cursor-pointer"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
      <div className="succesMail text-xl font-bold mt-2 text-red-500 border-2 rounded p-2 bg-[] hidden"></div>
    </div>
  );
};

export default Contact;
