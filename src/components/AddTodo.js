import { TextField } from "@mui/material";
import React from "react";
import { MatButton } from ".";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { useState } from "react";
import { useCreateTodoMutation } from "../api/api";

const addTodoFields = [
  {
    name: "description",
    type: "text",
    required: {
      value: true,
      message: "This field is required",
    },
    label: "Breif text for what you want to accomplish.",
  },
  {
    name: "dueDate",
    type: "date",
    label: "When do you want to complete it?",
    defaultValue: "02-12-2022",
    required: {
      value: true,
      message: "This field is required",
    },
  },
];

const tagFields = [
  {
    label: "Personal",
    value: "personal",
  },
  {
    label: "Home",
    value: "home",
  },
  {
    label: "Office",
    value: "office",
  },
];

function AddTodo({ handleClose }) {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const [tag, setTag] = useState(tagFields[0]);

  const [createTodo, { isLoading }] = useCreateTodoMutation();

  const handleAddTodo = async (data) => {
    data = { ...data, tag: tag.value };
    await createTodo({ ...data });
    handleClose();
  };

  return (
    <>
      <div className="w-full h-[100vh] top-0 left-0 bg-[#00000020] fixed flex items-center justify-center">
        <div className="w-[600px] bg-white rounded-xl p-6">
          <h2 className="text-2xl font-medium mb-6">Add Task</h2>
          <form className="grid gap-8" onSubmit={handleSubmit(handleAddTodo)}>
            {addTodoFields.map((field) => (
              <div>
                <p className="text-sm text-gray-500 mb-2">{field.label}</p>
                <TextField
                  className="rounded-lg"
                  key={field.name}
                  fullWidth
                  type={field.type}
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
              </div>
            ))}
            <div>
              <p className="text-sm text-gray-500 mb-2">Tag</p>
              <Select
                options={tagFields}
                isSearchable={false}
                styles={{ control: (styles) => ({ ...styles, height: 54 }) }}
                value={tag}
                onChange={(opt) => setTag(opt)}
              />
            </div>
            <div className="flex gap-5">
              <MatButton
                className={"w-full"}
                variant="outlined"
                type="button"
                onClick={handleClose}
              >
                Cancel
              </MatButton>
              <MatButton
                isLoading={isLoading}
                className={"w-full"}
                type="submit"
              >
                Add
              </MatButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
