import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  age: string;
}

const Form = () => {
  // register: is used to connect input fields to the form.
  // handleSubmit is a function to handle form submission.
  // errors: contains validation errors for the form.

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name-input">
          <label htmlFor="name" id="nameLabel">
            Name:{" "}
          </label>
          <br />
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "The name field is required.",
              maxLength: 20,
            })}
          />
          <br />
          {errors.name && (
            <p style={{ color: "red", fontSize: "15px", padding: "0" }}>
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="email-input">
          <label htmlFor="email" id="emailLabel">
            Email:{" "}
          </label>
          <br />
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "The email field is required.",
              maxLength: 250,
              pattern: {
                value:
                  /^[A-Za-z]+\d*(\.[A-Za-z]+\d*)?@[A-Za-z]+\d*\.(com|ng)$/i,
                message: "Invalid email address.",
              },
            })}
          />
          <br />
          {errors.email && (
            <p style={{ color: "red", fontSize: "15px", padding: "0" }}>
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="age-input">
          <label htmlFor="age" id="ageLabel">
            Age:{" "}
          </label>
          <br />
          <input
            type="number"
            id="age"
            {...register("age", {
              required: "The age field is required.",
              min: { value: 18, message: "Must be 18 years of age." },
              max: { value: 99, message: "Must be less than 99 years of age." },
            })}
          />
          <br />
          {errors.age && (
            <p style={{ color: "red", fontSize: "15px", padding: "0" }}>
              {errors.age.message}
            </p>
          )}
        </div>
        <button disabled={isSubmitting} type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
