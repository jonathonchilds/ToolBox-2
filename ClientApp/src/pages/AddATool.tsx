import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { APIError, ToolType } from "../types";
import { authHeader } from "../auth";

export default function AddATool() {
  const [newTool, setNewTool] = useState<ToolType>({
    name: "",
    photoURL: "",
    rent: false,
    rentPrice: 0,
    borrow: false,
    purchase: false,
    purchasePrice: 0,
  });

  const [errorMessage, setErrorMessage] = useState<Record<string, string[]>>();

  function _stringFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTool({ ...newTool, [event.target.name]: event.target.value });
  }

  async function submitNewTool(tool: ToolType) {
    const response = await fetch("/api/Tools", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: authHeader(),
      },
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
      console.log(Object.values(apiError.errors));
    },
  });

  async function _formSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    createNewTool.mutate(newTool);
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
    <div className="h-full w-full">
      <div className="flex items-center justify-center p-10 ">
        <form
          onSubmit={_formSubmit}
          className="mx-auto w-full max-w-[415px] rounded bg-slate-100 p-10 shadow-xl"
        >
          {/* {errorMessage.email[0] ? (
            <p className="flex justify-center border-2 border-solid border-red-700 bg-gray-50">
              {errorMessage}
            </p>
          ) : null} */}
          <h1 className=" align-items-center flex justify-center pb-4 text-2xl">
            Add a Tool
          </h1>
          <p className="mb-4 flex flex-col pb-2">
            <input
              autoFocus
              name="name"
              className="my-2 rounded px-3 py-2"
              type="text"
              onChange={_stringFieldChange}
              placeholder="Tool Name"
            />
          </p>
          <div className="mb-4 flex flex-col pb-6">
            <label>Can people borrow this tool (at no charge)?</label>
            <div className="flex w-full justify-around py-2">
              <div>
                <label className="px-2">Yes</label>
                <input
                  type="radio"
                  name="borrow"
                  value="Yes"
                  onChange={handleRadioClick}
                />
              </div>
              <div>
                <label className="px-2">No</label>
                <input
                  type="radio"
                  name="borrow"
                  value="No"
                  onChange={handleRadioClick}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col pb-6">
            <label>Can this tool be rented?</label>
            <div className="flex w-full justify-around py-2">
              <div>
                <label className="px-2">Yes</label>
                <input
                  type="radio"
                  name="rent"
                  value="Yes"
                  onChange={handleRadioClick}
                />
              </div>
              <div>
                <label className="px-2">No</label>
                <input
                  type="radio"
                  name="rent"
                  value="No"
                  onChange={handleRadioClick}
                />
              </div>
            </div>
            <p className="mb-4 flex flex-col">
              <input
                name="rentPrice"
                className="my-1 rounded px-3  py-2"
                type="text"
                onChange={handlePriceFieldChange}
                placeholder="Rental price per day (e.g. 19.99)"
              />
            </p>
          </div>
          <div className=" mb-4 flex flex-col pb-6 ">
            <label>Can this tool be purchased?</label>
            <div className="flex w-full justify-around py-2">
              <div>
                <label className="px-2">Yes</label>
                <input
                  type="radio"
                  name="purchase"
                  value="Yes"
                  onChange={handleRadioClick}
                />
              </div>
              <div>
                <label className="px-2">No</label>
                <input
                  type="radio"
                  name="purchase"
                  value="No"
                  onChange={handleRadioClick}
                />
              </div>
            </div>
            <p className="mb-4 flex flex-col">
              <input
                name="purchasePrice"
                className="my-1 rounded px-3 py-2"
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
    </div>
  );
}
