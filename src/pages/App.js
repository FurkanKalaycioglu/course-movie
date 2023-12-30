import react, { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import Router from "../Router";
function App() {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
  });
  console.log(watch("creditNo"));
  const USER_DATA = [
    {
      email: "test@test.com",
      password: "123456",
    },
    {
      email: "a@a.com",
      password: "123456",
    },
  ];

  const tempuser = "test@test.com";
  const tempPass = "123456";

  const canLogin = (email, password) => {
    const user = USER_DATA.find((user) => user.email === email);
    if (user) {
      if (user.password === password) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    // localStorage.setItem("myCat", "Tom");
    // console.log(localStorage.getItem("myCat"));
    // localStorage.removeItem("myCat");

    if (localStorage.getItem("isLoggedIn")) {
      console.log("Logged In");
    } else {
      console.log("Not Logged In");
      localStorage.setItem("isLoggedIn", true);
    }

    // console.log(canLogin(tempuser, tempPass));
  }, []);

  return (
    <div className=" w-screen flex items-center justify-center h-screen ">
      <form className="flex flex-col gap-5">
        <input
          {...register("email", {
            required: true,
            maxLength: {
              value: 10,
              message: "Email en fazla 10 karakter olabilir",
            },
            minLength: {
              value: 5,
              message: "Email en az 5 karakter olabilir",
            },
          })}
          placeholder="Email"
        />
        {errors && errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
        />
        {errors && errors.password && (
          <span className="text-red-500">Password is required</span>
        )}
      </form>
    </div>
  );
}

export default App;
