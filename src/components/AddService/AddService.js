import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";
const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://chilling-demon-70491.herokuapp.com/places", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };
  return (
    <div className="add-service" style={{ marginTop: 100 }}>
      <h2 className="text-center">Please add a package</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control"
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <textarea {...register("description")} placeholder="Description" />
        <input
          className="form-control"
          type="number"
          {...register("price")}
          placeholder="Amount"
        />
        <input
          className="form-control"
          {...register("img")}
          placeholder="image url"
        />
        <input className="btn btn-primary form-control" type="submit" />
      </form>
    </div>
  );
};

export default AddService;
