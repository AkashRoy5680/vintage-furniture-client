import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";
import PageTitle from "../../PageTitle/PageTitle";

const AddItem = (event) => {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);

  const onSubmit = (data) => {
    console.log(data);
    reset();

    const email = user.email;

    //send data to server
    const url = `https://pacific-beach-83563.herokuapp.com/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Data is", result);
        if (result.insertedId) {
          console.log("inserted id:", result.insertedId);
          toast("Your Item is added !");
        }
      });
  };

  return (
    <div className="w-50 mx-auto ">
      <PageTitle title="Additem"></PageTitle>
      <h2 className="mt-3 text-dark">Add New Item ...</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Product Name"
          {...register("name")}
          required
        />
        <input
          type="email"
          className="mb-2"
          placeholder="Email"
          value={user.email}
          readOnly
          {...register("email")}
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
