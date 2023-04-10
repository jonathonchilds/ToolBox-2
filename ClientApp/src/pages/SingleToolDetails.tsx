import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "../components/Buttons";

import { ToolType } from "src/types";
import { formatPrice } from "../utilities/FormatPrice";

async function loadOneTool(id?: string) {
  const response = await fetch(`api/tools/${id}`);

  if (response.ok) {
    return response.json();
  } else {
    throw await response.json();
  }
}

const NullTool: ToolType = {
  name: "",
  imageUrl: "",
  rent: false,
  rentPrice: 0,
  borrow: false,
  borrowPrice: 0,
  purchase: false,
  purchasePrice: 0,
};

export default function Tool() {
  const { id } = useParams<{ id: string }>();
  const { data: tool = NullTool } = useQuery<ToolType>(["one-tool", id], () =>
    loadOneTool(id)
  );
  return (
    <div className="flex flex-wrap justify-center p-14 md:flex md:flex-row">
      <img src={`${tool.imageUrl}`} alt="Tool image" className="rounded" />
      <div className="p-4 ">
        <h2 className="mb-2 text-2xl ">{tool.name}</h2>
        <p className="leading-relaxed text-gray-700">
          Tool description goes here.
        </p>
        <div>
          {tool.borrow === true ? (
            <Button label="Borrow" color="blue-500" hoverColor="blue-700" />
          ) : (
            ""
          )}
        </div>
        <div>
          {tool.rent === true ? (
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
          {tool.purchase === true ? (
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
