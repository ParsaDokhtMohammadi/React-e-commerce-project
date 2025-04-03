import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

const CartForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const CartLength = useSelector((state) => state.Movies.cart).length;

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Order placed successfully!");
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 border rounded p-4 justify-center"
      >

        <label htmlFor="fullname">Full Name</label>
        <input
          {...register("fullname", { required: "Full name is required" })}
          className="bg-white rounded px-1 max-w-[350px] text-black"
          placeholder="Enter full name"
        />
        {errors.fullname && <p className="text-red-500">{errors.fullname.message}</p>}

        <label htmlFor="email">E-mail</label>
        <input
          {...register("email", { 
            required: "Email is required", 
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
          })}
          className="bg-white rounded px-1 max-w-[350px] text-black"
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

    
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          {...register("phoneNumber", { required: "Phone number is required" })}
          className="bg-white rounded px-1 max-w-[350px] text-black"
          placeholder="Enter your phone number"
        />
        {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}

        <label htmlFor="postalCode">Postal Code</label>
        <input
          type="number"
          {...register("postalCode", { required: "Postal code is required" })}
          className="bg-white rounded px-1 max-w-[350px] text-black"
          placeholder="Enter your postal code"
        />
        {errors.postalCode && <p className="text-red-500">{errors.postalCode.message}</p>}

      
        <div className="flex gap-2">
          <label className="w-[172px]" htmlFor="province">Province</label>
          <label htmlFor="city">City</label>
        </div>
        <div className="flex gap-2">
          <input
            {...register("province", { required: "Province is required" })}
            className="bg-white rounded px-1 max-w-[172px] text-black"
            placeholder="Enter province"
          />
          <input
            {...register("city", { required: "City is required" })}
            className="bg-white rounded px-1 max-w-[172px] text-black"
            placeholder="Enter city"
          />
        </div>
        {errors.province && <p className="text-red-500">{errors.province.message}</p>}
        {errors.city && <p className="text-red-500">{errors.city.message}</p>}

     
        <label htmlFor="address">Address</label>
        <input
          {...register("address", { required: "Address is required" })}
          className="bg-white rounded px-1 max-w-[350px] text-black"
          placeholder="Enter your address"
        />
        {errors.address && <p className="text-red-500">{errors.address.message}</p>}

  
        <div className="flex flex-col border-t gap-2">
          <h1>Total items: {CartLength}</h1>
          <h1>Total price: ${(16.99 * CartLength).toFixed(2)}</h1>
        </div>

     
        <button
          type="submit"
          className="flex items-center gap-2.5 p-2 px-4 rounded-xl bg-[#27AE60] cursor-pointer 
                    hover:shadow-[5px_5px_8px_4px] hover:shadow-[#EEE] transition-all duration-300 w-fit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CartForm;
