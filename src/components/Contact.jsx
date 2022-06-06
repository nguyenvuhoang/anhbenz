import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser"
import Swal from 'sweetalert2';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const form = useRef()

  const onSubmit = (data, e) => {
    emailjs.sendForm('service_34l2y7m', 'template_q9mgwli', form.current, "35I4CT-ejIJ7-Nc5s")
      .then(function (response) {
        if (response.status === 200) {
          Swal.fire("SUCCESS!", "Your content support have been sent to us. We will check and feedback soon.", "success")
            .then((response) => {
              if (response) {
                e.target.reset();
              }
            });
        } else {
          Swal.fire("ERROR!", "Sent mail failed. Please try again.", "error");
        }
      }, function (error) {
        Swal.fire("ERROR!", error, "error");
      });
  };

  return (
    <>
      <form className="contact_form" ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className="first_row">
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Name *"
          />
          {errors.name && errors.name.type === "required" && (
            <span className="invalid-feedback">Name is required</span>
          )}
        </div>
        {/* End .first_row */}

        <div className="second">
          <div className="left">
            <input
              {...register(
                "email",
                {
                  required: "Email is Required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                },
                { required: true }
              )}
              type="email"
              placeholder="Email *"
            />
            {errors.email && (
              <span className="invalid-feedback">{errors.email.message}</span>
            )}
          </div>
          <div className="right">
            <input
              {...register("subject", { required: true })}
              placeholder="Subject *"
            />
            {errors.subject && (
              <span className="invalid-feedback">Subject is required.</span>
            )}
          </div>
        </div>
        {/* End .second */}

        <div className="third">
          <textarea
            {...register("message", { required: true })}
            placeholder="Message *"
          ></textarea>
          {errors.message && (
            <span className="invalid-feedback">Message is required.</span>
          )}
        </div>
        {/* End .third */}

        <div className="ben_tm_button">
          <button type="submit" className="color">
            <span className="wrapper">
              <span className="first">Submit</span>
              <span className="second">Submit</span>
            </span>
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;
