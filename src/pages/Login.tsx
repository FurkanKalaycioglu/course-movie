import React, { useState } from "react";
import cn from "classnames";

function GoogleIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_43_187)">
        <g clip-path="url(#clip1_43_187)">
          <path
            d="M23.8072 10.141C23.9139 10.141 24.0003 10.2275 24.0003 10.3342V12.3623C24.0003 13.1214 23.9298 13.8636 23.7946 14.5836C22.7485 20.1762 17.8215 24.4027 11.9157 24.362C5.28907 24.3163 -0.0142753 18.962 0.00039658 12.3353C0.0149747 5.7204 5.38207 0.362305 12.0003 0.362305C15.2428 0.362305 18.1848 1.64865 20.3448 3.73815C20.4228 3.81357 20.4248 3.93788 20.348 4.01457L17.4788 6.88384C17.4049 6.95771 17.2856 6.95963 17.2098 6.88759C15.8542 5.59716 14.02 4.80493 12.0003 4.80493C7.82983 4.80493 4.47147 8.13943 4.44316 12.3099C4.41471 16.5076 7.80921 19.9196 12.0003 19.9196C15.4009 19.9196 18.2771 17.6732 19.2255 14.5836H12.1935C12.0868 14.5836 12.0003 14.4971 12.0003 14.3904V10.3341C12.0003 10.2274 12.0868 10.1409 12.1935 10.1409H23.8072V10.141Z"
            fill="#2196F3"
          />
          <path
            d="M23.8066 10.141H22.3579C22.4646 10.141 22.5511 10.2275 22.5511 10.3342V12.3623C22.5511 13.1214 22.4806 13.8636 22.3454 14.5836C21.3473 19.919 16.8171 24.011 11.2747 24.3406C11.4867 24.3532 11.7002 24.3605 11.9152 24.362C17.8209 24.4027 22.7479 20.1762 23.794 14.5836C23.9293 13.8636 23.9998 13.1214 23.9998 12.3623V10.3341C23.9998 10.2275 23.9133 10.141 23.8066 10.141Z"
            fill="#1E88E5"
          />
          <path
            d="M5.13614 9.1974L1.4917 6.56415C3.53629 2.86613 7.47623 0.362305 12.0005 0.362305C15.243 0.362305 18.185 1.64865 20.3449 3.73815C20.4229 3.81357 20.4249 3.93788 20.3482 4.01457L17.4789 6.88384C17.4052 6.95757 17.2859 6.95987 17.2103 6.88796C15.8547 5.5973 14.0203 4.80498 12.0005 4.80498C8.95682 4.80498 6.33323 6.60423 5.13614 9.1974Z"
            fill="#F44336"
          />
          <path
            d="M4.08325 8.43725L5.13536 9.19742C6.22802 6.83051 8.50933 5.12585 11.2135 4.84624C11.2339 4.84404 11.2534 4.84137 11.2742 4.8394C11.0362 4.81681 10.795 4.80499 10.5511 4.80499C7.80152 4.80499 5.40527 6.25451 4.08325 8.43725Z"
            fill="#E53935"
          />
          <path
            d="M18.8958 3.73815C18.9738 3.81357 18.9758 3.93788 18.8991 4.01462L16.5702 6.34351C16.7933 6.5132 17.0069 6.6947 17.2096 6.88763C17.2852 6.95968 17.4046 6.95776 17.4785 6.88388L20.3478 4.01462C20.4245 3.93788 20.4224 3.81362 20.3445 3.73815C18.1845 1.64865 15.2426 0.362305 12.0001 0.362305C11.7568 0.362305 11.5154 0.370414 11.2756 0.384711C14.2306 0.560727 16.8979 1.8054 18.8958 3.73815Z"
            fill="#E53935"
          />
          <path
            d="M20.8023 20.5175C18.6109 22.8822 15.4779 24.3623 11.9996 24.3623C7.3015 24.3623 3.23406 21.6625 1.26428 17.7292L4.98499 15.1795C6.1015 17.9576 8.82166 19.9196 11.9996 19.9196C13.9939 19.9196 15.8077 19.147 17.1579 17.8847L20.8023 20.5175Z"
            fill="#4CAF50"
          />
          <path
            d="M4.98522 15.1796L3.88806 15.9314C5.16236 18.3053 7.66825 19.9197 10.5511 19.9197C10.7949 19.9197 11.0359 19.9077 11.2738 19.8852C8.41211 19.6123 6.01562 17.7436 4.98522 15.1796Z"
            fill="#43A047"
          />
          <path
            d="M12.0001 24.3623C15.4784 24.3623 18.6115 22.8822 20.8029 20.5175L19.9102 19.8726C17.8526 22.4334 14.7659 24.1322 11.2776 24.3405C11.5167 24.3547 11.7575 24.3623 12.0001 24.3623Z"
            fill="#43A047"
          />
          <path
            d="M4.44267 12.3623C4.44267 13.358 4.63533 14.3089 4.98544 15.1795L1.26469 17.7292C0.455391 16.1144 0 14.2915 0 12.3623C0 10.2593 0.540844 8.28277 1.49119 6.56415L5.13562 9.1974C4.69088 10.1598 4.44267 11.2323 4.44267 12.3623Z"
            fill="#FFC107"
          />
          <path
            d="M3.88834 15.9314L4.98549 15.1795C4.63538 14.3089 4.44273 13.358 4.44273 12.3623C4.44273 11.2323 4.69093 10.1598 5.13568 9.19737L4.08357 8.43719C3.40037 9.56524 3.00385 10.8889 2.9942 12.3099C2.98529 13.6202 3.30999 14.854 3.88834 15.9314Z"
            fill="#FFB300"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_43_187">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_43_187">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.362305)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2049 13.2398C10.1295 13.2398 8.54867 13.2403 7.81955 13.2396C7.44419 13.2394 7.31027 13.1045 7.31027 12.7267C7.30979 11.7564 7.30955 10.7861 7.31027 9.81575C7.31051 9.44279 7.45211 9.30047 7.82267 9.30023C8.55179 9.29975 10.124 9.29999 10.2049 9.29999C10.2049 9.23351 10.2047 7.83263 10.2049 7.18751C10.2054 6.23375 10.3755 5.32079 10.8601 4.48487C11.3562 3.62927 12.0781 3.04319 13.0033 2.70431C13.5959 2.48711 14.211 2.40047 14.8398 2.39999C15.6265 2.39951 16.4132 2.40023 17.2002 2.40167C17.5383 2.40215 17.6883 2.55167 17.6891 2.89223C17.6905 3.80495 17.6905 4.71767 17.6891 5.63015C17.6886 5.97431 17.5448 6.11255 17.199 6.11639C16.5541 6.12335 15.9087 6.11903 15.2646 6.14495C14.6139 6.14495 14.2717 6.46271 14.2717 7.13615C14.2561 7.84847 14.2652 8.56151 14.2652 9.29975C14.3262 9.29975 16.1778 9.29951 17.0432 9.29975C17.4363 9.29975 17.5707 9.43487 17.5707 9.83015C17.5707 10.7952 17.5705 11.7605 17.5698 12.7255C17.5695 13.115 17.4433 13.2394 17.0478 13.2396C16.1823 13.2401 14.3379 13.2398 14.2573 13.2398V21.0506C14.2573 21.467 14.1263 21.5998 13.7154 21.5998C12.7136 21.5998 11.7116 21.6 10.7099 21.5998C10.3467 21.5998 10.2051 21.4586 10.2051 21.0955C10.2049 18.5518 10.2049 13.3291 10.2049 13.2398Z"
        fill="#3D6AD6"
      />
    </svg>
  );
}

function Button({ children, onClick, variant }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full flex flex-row py-3 rounded-3xl justify-center items-center gap-4 text-grayscale-10 text-base font-semibold",
        {
          "bg-linedark": variant === "icon",
          "bg-primary": variant === "primary",
        }
      )}
    >
      {children}
    </button>
  );
}
function Input({ label, placeholder, type }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full flex flex-col gap-2 items-start">
      <label className="text-grayscale-70 text-sm font-medium">{label}</label>
      <div className="flex flex-row w-full items-center">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className="w-full focus:ring-0 ring-0 appearance-none focus:border-linedark text-grayscale-60 rounded-3xl bg-darksmooth border-linedark h-[52px] text-sm font-medium py-3 px-4"
        />
        {type === "password" && (
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
function Login() {
  return (
    <div className="h-screen w-screen">
      <div className="w-full h-full flex flex-col md:flex-row">
        <div className="w-full h-full bg-primary relative">
          <div className="flex flex-col justify-center gap-8 items-start ml-32 mt-20 mr-52">
            <div className="flex flex-col justify-center gap-3 items-start">
              <p className=" text-3xl font-bold text-grayscale-10">
                The biggest international and local film streaming
              </p>
              <p className="text-grayscale-30 text-base font-medium">
                Semper in cursus magna et eu varius nunc adipiscing. Elementum
                justo, laoreet id sem semper parturient.
              </p>
            </div>
          </div>
          <img
            src="/MacBook.png"
            alt="MacBook"
            className=" absolute bottom-0 object-cover "
          />
        </div>
        <div className="w-full h-full bg-darksmooth">
          <div className="w-full flex flex-col justify-center items-center mt-8 gap-20">
            <p className="text-grayscale-10 text-xl font-bold">CineMax</p>
            <div className="flex flex-col gap-10 items-center w-full px-20">
              <p className="text-grayscale-10 text-center text-4xl font-bold  w-80">
                Hey there, welcome back
              </p>

              <div className="flex flex-col gap-6 items-start w-full">
                <div className="w-full flex flex-col gap-6 items-start">
                  <Button
                    variant={"icon"}
                    onClick={() => console.log("google")}
                  >
                    <GoogleIcon />
                    Continue with Google
                  </Button>
                  <Button
                    variant={"icon"}
                    onClick={() => console.log("facebook")}
                  >
                    <FacebookIcon />
                    Continue with FaceBook
                  </Button>

                  <div className="flex flex-row w-full gap-4 items-center">
                    <span className="bg-grayscale-70 h-px w-full" />
                    <p className=" whitespace-nowrap text-nowrap text-sm font-medium text-grayscale-70">
                      Or login with
                    </p>
                    <span className="bg-grayscale-70 h-px w-full" />
                  </div>
                </div>
                <form className="flex flex-col gap-5 items-end justify-center w-full">
                  <Input
                    label={"Full Name "}
                    placeholder={"Enter your name"}
                    type={"text"}
                  />
                  <Input
                    label={"Password"}
                    placeholder={"Enter your password"}
                    type={"password"}
                  />
                </form>
              </div>
              <Button variant={"primary"} onClick={() => console.log("email")}>
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
