import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formdata) => console.log(formdata);

  return (
    <div className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-20 justify-evenly mx-auto items-center mb-8">
      <div className="titleContainer">
        <h3 className="title">
          Contact
        </h3>

        <div className="flex flex-col space-y-10">
          <h4 className="text-4xl font-semibold text-center">
            I have got what you need. Lets talk
          </h4>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="space-y-2 sm:space-y-0 sm:space-x-2 flex flex-col sm:flex-row">
              <input
                className="contactInput w-full sm:w-1/2"
                type="text"
                placeholder="Name"
                {...register("name")}
              />
              <input
                className="contactInput w-full sm:w-1/2"
                type="email"
                placeholder="Email"
                {...register("email")}
              />
            </div>

            <input
              className="contactInput"
              type="text"
              placeholder="Subject"
              {...register("subject")}
            />

            <textarea
              className="contactInput"
              placeholder="Message"
              {...register("message")}
            />

            <button
              type="submit"
              className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
