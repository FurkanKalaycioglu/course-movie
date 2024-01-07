import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import FacebookIcon from "../components/FacebookIcon";
import GoogleIcon from "../components/GoogleIcon";

function Login() {
  return (
    <div className="h-screen w-screen">
      <div className="w-full h-full flex flex-col md:flex-row">
        <div className="w-full h-full dark:bg-white  bg-primary relative">
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
