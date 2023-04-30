import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { APIError, ToolType, UploadResponse } from "../types";
import { authHeader } from "../auth";
import { button } from "../styling/tailwindClasses";

export default function EditTool() {
  const params = useParams();
  const id = params.id;

  const navigate = useNavigate();

  const [isUploading, setIsUploading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [tool, setTool] = useState<ToolType>({
    name: "",
    photoURL: "",
    rent: false,
    rentPrice: 0,
    borrow: false,
    purchase: false,
    purchasePrice: 0,
    userId: 0,
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFile,
  });

  useEffect(() => {
    async function fetchTool() {
      const response = await fetch(`/api/Tools/${id}`);
      if (response.ok) {
        const apiData = await response.json();
        setTool(apiData);
      }
    }
    fetchTool();
  }, [id]);

  function _stringFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTool({ ...tool, [event.target.name]: event.target.value });
  }

  function _priceFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    const priceInCents = Math.round(parseFloat(event.target.value) * 100);
    setTool({
      ...tool,
      [event.target.name]: priceInCents,
    });
  }

  function _radioClick(event: React.ChangeEvent<HTMLInputElement>) {
    setTool({
      ...tool,
      [event.target.name]: event.target.value === "Yes" ? true : false,
    });
  }

  async function _formSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch(`/api/Tools/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: authHeader(),
      },
      body: JSON.stringify(tool),
    });
    if (response.status === 401) {
      setErrorMessage("Not Authorized");
    } else {
      if (response.status === 400) {
        const json = await response.json();
        setErrorMessage(Object.values(json.errors).join(" "));
      } else {
        navigate("/");
      }
    }
  }

  async function onDropFile(acceptedFiles: File[]) {
    setIsUploading(true);
    const fileToUpload = acceptedFiles[0];
    const formData = new FormData();
    formData.append("file", fileToUpload);
    try {
      setIsUploading(true);
      const response = await fetch("/api/Uploads", {
        method: "POST",
        headers: {
          Authorization: authHeader(),
        },
        body: formData,
      });
      setIsUploading(false);
      if (response.status === 200) {
        const apiResponse = await response.json();
        const url = apiResponse.url;
        setTool({ ...tool, photoURL: url });
      } else {
        setErrorMessage("Unable to upload image");
      }
    } catch (error) {
      console.debug(error);
      setErrorMessage("Unable to upload image");
      setIsUploading(false);
    }
  }

  let dropZoneMessage = "Drag & drop a new picture of the tool, here!";
  if (isUploading) {
    dropZoneMessage = "Uploading...";
  }
  if (isDragActive) {
    dropZoneMessage = "Drop the files here ...";
  }

  if (!tool.id) {
    return <p>Tool not found!</p>;
  }
  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-center p-10 ">
        <form
          onSubmit={_formSubmit}
          className="mx-auto w-full max-w-[415px] rounded bg-slate-100 p-10 shadow-xl"
        >
          {errorMessage ? (
            <p className="flex justify-center border-2 border-solid border-red-700 bg-gray-50">
              {errorMessage}
            </p>
          ) : null}
          <h1 className=" align-items-center flex justify-center pb-4 text-2xl">
            Edit Tool
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
                  onChange={_radioClick}
                />
              </div>
              <div>
                <label className="px-2">No</label>
                <input
                  type="radio"
                  name="borrow"
                  value="No"
                  onChange={_radioClick}
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
                  onChange={_radioClick}
                />
              </div>
              <div>
                <label className="px-2">No</label>
                <input
                  type="radio"
                  name="rent"
                  value="No"
                  onChange={_radioClick}
                />
              </div>
            </div>
            <p className="mb-4 flex flex-col">
              <input
                name="rentPrice"
                className="my-1 rounded-full px-3  py-2"
                type="text"
                onChange={_priceFieldChange}
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
                  onChange={_radioClick}
                />
              </div>
              <div>
                <label className="px-2">No</label>
                <input
                  type="radio"
                  name="purchase"
                  value="No"
                  onChange={_radioClick}
                />
              </div>
            </div>
            <p className="mb-4 flex flex-col">
              <input
                name="purchasePrice"
                className="my-1 rounded-full px-3 py-2"
                type="text"
                onChange={_priceFieldChange}
                placeholder="Purchase price (e.g. 19.99)"
              />
            </p>
          </div>
          {tool.photoURL && (
            <p>
              <img alt="Tool Photo" width={200} src={tool.photoURL} />
            </p>
          )}
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
