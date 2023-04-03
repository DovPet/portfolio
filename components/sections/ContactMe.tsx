import React, { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Lottie from "react-lottie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import animationData from "../../resources/loader_animation.json";

type Props = {
  sectionTitle: string | undefined;
  sectionHeader: string | undefined;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
  token: string;
};

function ContactMe({ sectionTitle, sectionHeader }: Props) {
  const [isSending, setIsSending] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const reRef = useRef<ReCAPTCHA>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (formdata) => {
    setIsSending(true);
    const token = await reRef.current.executeAsync();
    reRef.current.reset();
    formdata.token = token;
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    }).then((res) => {
      if (res.status === 200) {
        reset();
        toast.success("Wow so easy!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("Wow so hard!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      setIsSending(false);
    });
  };

  return (
    <div className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-20 justify-evenly mx-auto items-center mb-8 smooth-scroll">
      <div className="titleContainer">
        <h3 className="title">{sectionTitle}</h3>

        <div className="flex flex-col space-y-10">
          <h4 className="text-4xl font-semibold text-center">
            {sectionHeader}
          </h4>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="space-y-2 sm:space-y-0 sm:space-x-2 flex flex-col sm:flex-row">
              <input
                className={`contactInput w-full sm:w-1/2 ${
                  errors.name && "bg-red-400"
                }`}
                type="text"
                placeholder="Name"
                {...register("name", { required: true, maxLength: 80, })}
              />
              <input
                className={`contactInput w-full sm:w-1/2 ${
                  errors.email && "bg-red-400"
                }`}
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[A-Za-z0-9_]+([-+.'][A-Za-z0-9_]+)*@[A-Za-z0-9_]+([-.][A-Za-z0-9_]+)*\.[A-Za-z_]{2,4}([-.][A-Za-z_]+)*$/,
                })}
              />
            </div>

            <input
              className={`contactInput ${errors.subject && "bg-red-400"}`}
              type="text"
              placeholder="Subject"
              {...register("subject", { required: true })}
            />

            <textarea
              className={`contactInput ${errors.message && "bg-red-400"}`}
              placeholder="Message"
              {...register("message", { required: true })}
            />

            <button
              type="submit"
              className="bg-brownish py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-[#C8D0AB]"
              disabled={isSending}
            >
              {isSending ? (
                <Lottie options={defaultOptions} height={50} width={50} />
              ) : (
                "Submit"
              )}
            </button>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              ref={reRef}
              size="invisible"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
