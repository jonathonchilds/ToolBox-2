import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { ToolType } from "src/types";

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

export function Tool() {
  const { id } = useParams<{ id: string }>();
  const { data: tool = NullTool } = useQuery<ToolType>(["one-tool", id], () =>
    loadOneTool(id)
  );
  return <div>{tool.name}</div>;
}
