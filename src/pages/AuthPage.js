import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { useLoginMutation, useSignupMutation } from "../api/api";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import Avatar from "@mui/material/Avatar";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { MatButton, Toast } from "../components";
import { useToggle } from "../customHooks";

const loginFields = [
  {
    name: "email",
    type: "email",
    required: {
      value: true,
      message: "This field is required",
    },
    regex: {
      value:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: "Invalid email address",
    },
    placeholder: "Email address",
    maxLength: { value: 64, message: "Email should not exceed 64 characters" },
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    required: {
      value: true,
      message: "This field is required",
    },
    minLength: {
      value: 7,
      message: "Password must at least be 7 characters",
    },
    maxLength: { value: 16, message: "Password must not exceed 16 characters" },
  },
];

const signupFields = [
  {
    name: "name",
    type: "text",
    required: {
      value: true,
      message: "This field is required",
    },
    placeholder: "Full Name",
  },
  {
    name: "email",
    type: "email",
    required: {
      value: true,
      message: "This field is required",
    },
    regex: {
      value:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: "Invalid email address",
    },
    placeholder: "Email address",
    maxLength: { value: 64, message: "Email should not exceed 64 characters" },
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    required: {
      value: true,
      message: "This field is required",
    },
    minLength: {
      value: 7,
      message: "Password must at least be 7 characters",
    },
    maxLength: { value: 16, message: "Password must not exceed 16 characters" },
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    required: {
      value: true,
      message: "This field is required",
    },
    minLength: {
      value: 7,
      message: "Password must at least be 7 characters",
    },
    maxLength: { value: 16, message: "Password must not exceed 16 characters" },
  },
];

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [login, { isLoading, error }] = useLoginMutation();

  const history = useHistory();

  const onLogin = (data) => {
    login(data).then((res) => {
      localStorage.setItem("token", res.data.token);
      history.replace("/home");
    });
  };

  const getReqError = (name) => {
    if (name === "email" && error) {
      return error.data?.message;
    }
  };

  return (
    <div className="mt-0 lg:mt-8 w-full sm:w-[470px] mx-auto grid gap-6">
      <Avatar className="flex mx-auto" sx={{ m: 1, bgcolor: "secondary.main" }}>
        <IoMdLock size={17} />
      </Avatar>
      <p className="text-lg text-center sm:text-2xl font-medium">
        Sign in to Admin panel
      </p>
      <form className="grid gap-8" onSubmit={handleSubmit(onLogin)}>
        {loginFields.map((field) => (
          <TextField
            className="rounded-lg"
            key={field.name}
            fullWidth
            type={field.type}
            label={field.placeholder}
            variant="outlined"
            error={errors[field.name] || getReqError(field.name)}
            helperText={errors[field.name]?.message || getReqError(field.name)}
            {...register(field.name, {
              required: {
                ...field.required,
              },
              minLength: {
                ...field.minLength,
              },
              maxLength: {
                ...field.maxLength,
              },
              pattern: {
                ...field.regex,
              },
            })}
          />
        ))}
        <MatButton type="submit" isLoading={isLoading}>
          Login
        </MatButton>
        <p className="text-center">
          Don't have an account?{" "}
          <Link className="text-blue-500 hover:underline" to="/auth/signup">
            Create account
          </Link>
        </p>
      </form>
    </div>
  );
}

function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [signup, { isLoading, isError, isSuccess, error }] =
    useSignupMutation();

  const toast = useToggle(false);

  const history = useHistory();

  const onSignup = (data) => {
    signup(data).then((res) => {
      if (res.data) {
        localStorage.setItem("token", res.data.token);
        history.replace("/home");
      }
      toast.handleOpen();
    });
  };

  const status = isSuccess ? "success" : isError ? "error" : "info";

  const statusMessage =
    status === "success"
      ? "Account created successfully"
      : error?.data?.message;

  return (
    <div className="mt-0 lg:mt-8 w-full sm:w-[470px] mx-auto grid gap-6">
      <Avatar className="flex mx-auto" sx={{ m: 1, bgcolor: "secondary.main" }}>
        <IoMdLock size={17} />
      </Avatar>
      <p className="text-lg text-center sm:text-2xl font-medium">
        Create new Account
      </p>
      <form className="grid gap-8" onSubmit={handleSubmit(onSignup)}>
        {signupFields.map((field) => (
          <TextField
            className="rounded-lg"
            key={field.name}
            fullWidth
            type={field.type}
            label={field.placeholder}
            variant="outlined"
            error={errors[field.name]}
            helperText={errors[field.name]?.message}
            {...register(field.name, {
              required: {
                ...field.required,
              },
              minLength: {
                ...field.minLength,
              },
              maxLength: {
                ...field.maxLength,
              },
              pattern: {
                ...field.regex,
              },
            })}
          />
        ))}
        <MatButton type="submit" isLoading={isLoading}>
          Create account
        </MatButton>
        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-blue-500 hover:underline" to="/auth/login">
            Sign in
          </Link>
        </p>
      </form>
      <Toast
        open={toast.show}
        handleClose={toast.handleClose}
        status={status}
        message={statusMessage}
      />
    </div>
  );
}

function AuthPage() {
  const isLoginRoute = useRouteMatch("/auth/login");
  const isSignupRoute = useRouteMatch("/auth/signup");
  return (
    <div>
      <AuthNavbar />
      {isLoginRoute ? <Login /> : isSignupRoute && <SignUp />}
    </div>
  );
}
export default AuthPage;

function AuthNavbar() {
  return (
    <nav className="h-16 sm:h-20 w-full flex items-center justify-left text-tertiary bg-secondary px-3 md:px-32">
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#ffffff20]">
        <MdAdminPanelSettings size={30} />
      </div>
      <p className="text-white text-base md:text-xl ml-2 sm:ml-3">
        You can get Access to Admin Panel by signing in with Admin Credentials
      </p>
    </nav>
  );
}
