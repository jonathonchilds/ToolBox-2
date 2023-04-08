import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import backgroundImg from "../images/pointy-glove-guy.jpg";
import logo from "../images/logo.png";
import { APIError, ToolType } from "../types";

export default function AddATool() {
  const [newTool, setNewTool] = useState<ToolType>({
    name: "",
    imageUrl: "",
    rent: false,
    rentPrice: 0,
    borrow: false,
    borrowPrice: 0,
    purchase: false,
    purchasePrice: 0,
  });

  const [errorMessage, setErrorMessage] = useState("");

  async function submitNewTool(tool: ToolType) {
    const response = await fetch("/api/Tools", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(tool),
    });
    if (response.ok) {
      return response.json();
    } else {
      throw await response.json();
    }
  }

  const navigate = useNavigate();
  const createNewTool = useMutation(submitNewTool, {
    onSuccess: function () {
      navigate("/");
    },
    onError: function (apiError: APIError) {
      setErrorMessage(Object.values(apiError.errors).join(" "));
    },
  });

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    createNewTool.mutate(newTool);
  }

  function handleStringFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTool({ ...newTool, [event.target.name]: event.target.value });
  }

  function handlePriceFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    const priceInCents = Math.round(parseFloat(event.target.value) * 100);
    setNewTool({
      ...newTool,
      [event.target.name]: priceInCents,
    });
  }

  function handleRadioClick(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTool({
      ...newTool,
      [event.target.name]: event.target.value === "Yes" ? true : false,
    });
  }

  return (
    <section className="relative h-screen w-full bg-zinc-900/90">
      <img
        src={backgroundImg}
        className="absolute h-full w-full object-cover mix-blend-overlay"
        alt="Friendly machinist with a mustache, a glove, and a smile."
      />

      <div className="flex items-center justify-center p-8">
        <form
          onSubmit={handleFormSubmit}
          className="relative mx-auto w-full max-w-[400px] rounded-lg bg-secondary-400 p-8 shadow-lg"
        >
          {errorMessage ? (
            <p className="flex justify-center border-2 border-solid border-red-700 bg-gray-50">
              {errorMessage}
            </p>
          ) : null}
          <div className="flex justify-center py-4 ">
            <img
              src={logo}
              className="max-w-screen-lg relative flex justify-center"
            />
          </div>
          <h1 className=" align-items-center relative m-4 mt-2 flex justify-center text-xl font-semibold">
            Add a tool!
          </h1>
          <div className="flex justify-around"></div>
          <p className="mb-4 flex flex-col">
            <input
              name="name"
              className=" my-2 rounded-full  bg-gray-50 px-3 py-2"
              type="text"
              onChange={handleStringFieldChange}
              placeholder="Name of the tool?"
            />
          </p>
          <div className="mb-4 flex flex-col">
            <label className="font-semibold">
              Can people borrow this tool (at no charge)?
            </label>
            <div className="flex w-full justify-around py-2">
              <div>
                <label className="px-2">Yes</label>
                <input
                  type="radio"
                  name="borrow"
                  value="Yes"
                  onChange={handleRadioClick}
                  className=" relative bg-gray-50"
                />
              </div>
              <div>
                <label className="px-2">No</label>
                <input
                  type="radio"
                  name="borrow"
                  value="No"
                  onChange={handleRadioClick}
                  className="relative border bg-gray-50"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Can this tool be rented?</label>
            <div className="flex w-full justify-around py-2">
              <div>
                <label className="px-2">Yes</label>
                <input
                  type="radio"
                  name="rent"
                  value="Yes"
                  onChange={handleRadioClick}
                  className="relative border bg-gray-50"
                />
              </div>
              <div>
                <label className="px-2">No</label>
                <input
                  type="radio"
                  name="rent"
                  value="No"
                  onChange={handleRadioClick}
                  className="relative border bg-gray-50"
                />
              </div>
            </div>
            <p className="mb-4 flex flex-col">
              <input
                name="rentPrice"
                className="my-1 rounded-full  bg-gray-50 px-3  py-2"
                type="text"
                onChange={handlePriceFieldChange}
                placeholder="Rental price per day (e.g. 19.99)"
              />
            </p>
          </div>
          <div className=" mb-4 flex flex-col ">
            <label className="font-semibold">Can this tool be purchased?</label>
            <div className="flex w-full justify-around py-2">
              <div>
                <label className="px-2">Yes</label>
                <input
                  type="radio"
                  name="purchase"
                  value="Yes"
                  onChange={handleRadioClick}
                  className="relative border bg-gray-50"
                />
              </div>
              <div>
                <label className="px-2">No</label>
                <input
                  type="radio"
                  name="purchase"
                  value="No"
                  onChange={handleRadioClick}
                  className="relative  border bg-gray-50"
                />
              </div>
            </div>
            <p className="mb-4 flex flex-col">
              <input
                name="purchasePrice"
                className="my-1 rounded-full  bg-gray-50 px-3 py-2"
                type="text"
                onChange={handlePriceFieldChange}
                placeholder="Purchase price (e.g. 19.99)"
              />
            </p>
          </div>
          <button className="mt-2 w-full rounded-full bg-gray-500 py-3 text-white hover:bg-primary-500">
            Add Tool
          </button>
        </form>
      </div>
    </section>
  );
}
