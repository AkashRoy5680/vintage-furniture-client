import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";

const AddItem = (event) => {
  const { register, handleSubmit } = useForm();
  const [user, loading, error] = useAuthState(auth);

  const onSubmit = (data) => {
    console.log(data);

    //send data to server
    const url = `http://localhost:5000/inventory`;
    fetch(url, user.parseInt("email"), {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Data is",result);
        if (result.insertedId) {
          console.log("inserted id:", result.insertedId);
          toast("Your Item is added !");
          event.target.reset();
        }
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="mt-3 text-success">Add New Item ...</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Product Name"
          {...register("name")}
        />
        <textarea
          className="mb-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-2"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Sold Item"
          type="number"
          {...register("soldItem")}
        />
        <input
          className="mb-2"
          placeholder="Supplier Name"
          {...register("supplierName")}
        />
        <input
          className="mb-2"
          placeholder="upload image"
          type="text"
          {...register("img")}
        />
        <input type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;