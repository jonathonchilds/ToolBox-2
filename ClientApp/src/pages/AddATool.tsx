import React, { useState } from "react";
import backgroundImg from "../assets/pointy-glove-guy.jpg";
import logo from "../assets/logo.png";
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

  const [selectedRadioBtn, setSelectedRadioBtn] = React.useState("");

  function handleStringFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTool({ ...newTool, [event.target.name]: event.target.value });
  }

  const isRadioSelected = (value: string): boolean =>
    selectedRadioBtn === value;

  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSelectedRadioBtn(e.currentTarget.value);

  return (
    <section className="relative h-screen w-full bg-zinc-900/90">
      <img
        src={backgroundImg}
        className="absolute h-full w-full object-cover mix-blend-overlay"
        alt="Friendly machinist with a mustache, a glove, and a smile."
      />
      <div className="flex h-full items-center justify-center p-8">
        <form className="relative mx-auto w-full max-w-[400px] bg-secondary-400 p-8 shadow-lg">
          <div className="flex justify-center py-4 ">
            <img
              src={logo}
              className="relative flex max-w-[50%] justify-center py-2"
            />
          </div>

          <div className="flex justify-around pb-8 pt-4"></div>

          <p className="mb-4 flex flex-col">
            <label>Name of tool:</label>
            <input
              name="name"
              className="relative my-2 border bg-gray-50 "
              type="text"
            />
          </p>
          <p className="mb-4 flex flex-col">
            <label>Can people borrow this tool (at no charge)?</label>
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
                  checked={isRadioSelected("no")}
                  onChange={handleRadioClick}
                  className="relative border bg-gray-50"
                />
              </div>
            </div>
          </p>
          <p className="mb-4 flex flex-col">
            <label>Can this tool be rented?</label>
            <div className="flex w-full justify-around py-2">
              <div>
                <label className="px-2">Yes</label>
                <input
                  type="radio"
                  name="rent"
                  value="Yes"
                  checked={isRadioSelected("yes")}
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
                  checked={isRadioSelected("no")}
                  onChange={handleRadioClick}
                  className="relative border bg-gray-50"
                />
              </div>
            </div>
          </p>
          <div className=" mb-4 flex flex-col ">
            <label>Can this tool be purchased?</label>
            <div className="flex w-full justify-around py-2">
              <div>
                <label className="px-2">Yes</label>
                <input
                  type="radio"
                  name="rent"
                  value="Yes"
                  checked={isRadioSelected("yes")}
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
                  checked={isRadioSelected("no")}
                  onChange={handleRadioClick}
                  className="relative border bg-gray-50"
                />
              </div>
            </div>
          </div>
          <button className="mt-8 w-full bg-gray-500 py-3 text-white hover:bg-primary-500">
            Add Tool
          </button>
        </form>
      </div>
    </section>
  );
}
