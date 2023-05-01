import React from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

import { APIError, ToolType } from "../types";
import { formatPrice } from "../utilities/FormatPrice";
import { authHeader, getUserId, isLoggedIn } from "../auth";
import { Button } from "../components/Buttons";
import { button } from "../styling/tailwindClasses";

const NullTool: ToolType = {
  name: "",
  photoURL: "",
  rent: false,
  rentPrice: 0 || null,
  borrow: false,
  purchase: false,
  purchasePrice: 0 || null,
  userId: 0,
};

export default function Tool() {
  async function loadOneTool(id?: string) {
    const response = await fetch(`api/tools/${id}`);

    if (response.ok) {
      return response.json();
    } else {
      throw await response.json();
    }
  }
  const { id } = useParams<{ id: string }>();
  const { data: tool = NullTool } = useQuery<ToolType>(["one-tool", id], () =>
    loadOneTool(id)
  );

  const navigate = useNavigate();
  async function handleDelete(event: any) {
    event.preventDefault();
    const response = await fetch(`/api/Tools/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: authHeader(),
      },
    });

    if (response.status === 200 || response.status === 204) {
      navigate("/");
    }
  }

  return (
    <div className="flex flex-wrap justify-center p-14 md:flex md:flex-row">
      <img src={`${tool.photoURL}`} alt="Tool image" className="rounded" />
      <div className="p-4 ">
        <h2 className=" text-2xl ">{tool.name}</h2>

        {isLoggedIn() && tool.userId === getUserId() ? (
          <div className="my-4 flex align-middle">
            <Link to={`/tools/${id}/edit`}>
              <button className="duration-50 mr-2 w-[8rem] rounded-full bg-primary-500 px-4 py-3 text-white ease-in hover:bg-primary-300">
                Edit
              </button>
            </Link>
            <button
              className="duration-50 w-[8rem] rounded-full bg-primary-500 px-4 py-3 text-white ease-in hover:bg-primary-300"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        ) : null}

        <p className="mb-4 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          dictum nec ante porttitor elementum. Sed erat est, pharetra id neque
          et, ultricies varius turpis. Vivamus vulputate arcu ut nibh facilisis
          consectetur. Suspendisse potenti. Vestibulum eget metus sed lectus
          dignissim convallis eget vitae nulla. Fusce congue tortor orci. Proin
          lobortis mollis elit et dapibus. Quisque vestibulum est sed augue
          sagittis, eu efficitur sapien convallis. Maecenas eleifend leo mollis
          consequat tempor. Phasellus et leo pellentesque, eleifend magna eu,
          finibus enim. Phasellus semper, nisi et faucibus mollis, velit lorem
          commodo tellus, ac vestibulum sem eros sit amet dolor. In nec lorem
          quis odio gravida ullamcorper vel nec enim. Etiam non vestibulum dui.
          Nulla id ligula sit amet ligula convallis convallis. Maecenas mattis
          enim eget lectus efficitur volutpat.
        </p>
        <div>
          {tool.borrow === true ? (
            <Button label="Borrow" color="blue-500" hoverColor="blue-700" />
          ) : (
            ""
          )}
        </div>
        <div>
          {tool.rent && tool.rentPrice ? (
            <Button
              label={`${formatPrice(tool.rentPrice)} rental`}
              color="blue-500"
              hoverColor="blue-700"
            />
          ) : (
            ""
          )}
        </div>
        <div>
          {tool.purchase && tool.purchasePrice ? (
            <Button
              label={`${formatPrice(tool.purchasePrice)} purchase`}
              color="blue-500"
              hoverColor="blue-700"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
