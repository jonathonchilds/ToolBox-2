import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { APIError, ToolType, UploadResponse } from "../types";
import { authHeader } from "../auth";
import { button } from "../styling/tailwindClasses";

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
  const [isUploading, setIsUploading] = useState(false);

  function _stringFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTool({ ...newTool, [event.target.name]: event.target.value });
  }

  function onDropFile(acceptedFiles: File[]) {
    setIsUploading(true);
    const fileToUpload = acceptedFiles[0];
    uploadFileMutation.mutate(fileToUpload);
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFile,
  });

  async function uploadFile(fileToUpload: File) {
    // Create a formData object so we can send this
    // to the API that is expecting some form data.
    const formData = new FormData();

    // Append a field that is the form upload itself
    formData.append("file", fileToUpload);

    // Use fetch to send an authorization header and
    // a body containing the form data with the file
    const response = await fetch("/api/Uploads", {
      method: "POST",
      headers: {
        Authorization: authHeader(),
      },
      body: formData,
    });

    if (response.ok) {
      return response.json();
    } else {
      throw "Unable to upload image!";
    }
  }

  const uploadFileMutation = useMutation(uploadFile, {
    onSuccess: function (apiResponse: UploadResponse) {
      const url = apiResponse.url;

      submitNewTool({ ...newTool, photoURL: url });
    },

    onError: function (apiError: APIError) {
      console.log(Object.values(apiError.errors));
    },
    onSettled: function () {
      setIsUploading(false);
    },
  });

  let dropZoneMessage = "Drag & drop a picture of the tool, here!";
  if (isUploading) {
    dropZoneMessage = "Uploading...";
  }
  if (isDragActive) {
    dropZoneMessage = "Drop the files here ...";
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
              className="my-2 rounded-full px-3 py-2"
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
                className="my-1 rounded-full px-3  py-2"
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
                className="my-1 rounded-full px-3 py-2"
                type="text"
                onChange={handlePriceFieldChange}
                placeholder="Purchase price (e.g. 19.99)"
              />
            </p>
          </div>
          <div className="border-10 mb-8 flex cursor-pointer rounded border border-gray-500 p-4 text-gray-500">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {dropZoneMessage}
            </div>
          </div>
          <button className={button}>Add Tool</button>
        </form>
      </div>
    </div>
  );
}
