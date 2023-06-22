import React from "react";

import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface FormValueType {
  username: string;
  password: string;
  checked: boolean;
}

function Login() {
  const {
    control,
    trigger,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValueType>({
    defaultValues: {
      username: "",
      password: "",
      checked: false,
    },
  });

  console.log({ errors });

  console.log(watch("username"));

  const onSubmit: SubmitHandler<FormValueType> = (formData) => {
    console.log({ formData });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          rules={{
            required: "Username is required",
          }}
          render={({ field: { name, onChange, value } }) => {
            return (
              <>
                <input
                  name={name}
                  onChange={(e) => {
                    onChange(e);

                    trigger(name);
                  }}
                  value={value}
                  type="text"
                  placeholder="Enter username"
                />

                {errors && <p>{errors.username?.message}</p>}
              </>
            );
          }}
        />

        {watch("checked") && (
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
            }}
            render={({ field: { name, onChange, value } }) => {
              return (
                <>
                  <input
                    name={name}
                    onChange={onChange}
                    value={value}
                    type="password"
                    placeholder="Enter password"
                  />
                  {errors && <p>{errors.username?.message}</p>}
                </>
              );
            }}
          />
        )}

        <Controller
          name="checked"
          control={control}
          render={({ field: { name, onChange, value } }) => {
            return (
              <div>
                <label>Is password</label>
                <input
                  name={name}
                  onChange={onChange}
                  checked={value}
                  type="checkbox"
                />
              </div>
            );
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
