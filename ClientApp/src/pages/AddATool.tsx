import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import backgroundImg from "../images/pointy-glove-guy.jpg";
import logo from "../images/logo.png";
import { ToolType } from "../types";

export default function AddATool() {
  const [newTool, setNewTool] = useState<ToolType>({
    id: undefined,
    name: "",
    imageUrl: "",
    rent: false,
    rentPrice: 0,
    borrow: false,
    borrowPrice: 0,
    purchase: false,
    purchasePrice: 0,
  });

  async function submitNewTool(tool: ToolType) {
    const response = await fetch("/api/Tools", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(tool),
    });
    return response.json();
  }

  const navigate = useNavigate();
  const createNewTool = useMutation(submitNewTool, {
    onSuccess: function () {
      navigate("/");
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
      <div className="flex h-full items-center justify-center p-8">
        <form
          onSubmit={handleFormSubmit}
          className="relative mx-auto w-full max-w-[400px] bg-secondary-400 p-8 shadow-lg"
        >
          <div className="flex justify-center py-4 ">
            <img
              src={logo}
              className="relative flex max-w-[50%] justify-center py-2"
            />
          </div>

          <div className="flex justify-around pb-8 pt-4"></div>

          <p className="mb-4 flex flex-col">
            <label>Add a tool:</label>
            <input
              name="name"
              className="relative my-2 border bg-gray-50 "
              type="text"
              onChange={handleStringFieldChange}
              placeholder="Enter the name of the tool"
            />
          </p>
          <div className="mb-4 flex flex-col">
            <label>Can people borrow this tool (at no charge)?</label>
            <div className="flex w-full justify-around py-2">
              <div>
                <label className="px-2">Yes</label>
                <input
                  type="radio"
                  name="borrow"
                  value="Yes"
                  onChange={handleRadioClick}
                  className="relative border bg-gray-50"
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
          <div className="mb-4 flex flex-col">
            <label>Can this tool be rented?</label>
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
                className="relative border bg-gray-50 "
                type="text"
                onChange={handlePriceFieldChange}
                placeholder="Enter a price in dollars and cents (19.99)"
              />
            </p>
          </div>
          <div className=" mb-4 flex flex-col ">
            <label>Can this tool be purchased?</label>
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
                  className="relative border bg-gray-50"
                />
              </div>
            </div>
            <p className="mb-4 flex flex-col">
              <input
                name="purchasePrice"
                className="relative border bg-gray-50 "
                type="text"
                onChange={handlePriceFieldChange}
                placeholder="Enter a price in dollars and cents (19.99)"
              />
            </p>
          </div>
          <button className="mt-2 w-full bg-gray-500 py-3 text-white hover:bg-primary-500">
            Add Tool
          </button>
        </form>
      </div>
    </section>
  );
}
