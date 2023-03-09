import React from "react";
import MiterSaw from "../assets/dewalt_miter_saw.jpeg";

function ToolTile() {
  return (
    <div className="p-4">
      <figure className="rounded-lg border-gray-500 p-8 outline hover:cursor-pointer hover:outline-secondary-500 dark:bg-slate-800 md:flex md:p-0">
        <img
          className="m-auto h-24 w-24 md:h-auto md:w-48 md:rounded"
          src={MiterSaw}
          alt=""
          width="334"
          height="462"
        />
        <div className="space-y-4 pt-6 text-center md:p-8 md:text-left">
          <blockquote>
            <p className="text-lg font-medium text-secondary-500">Miter Saw</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Dewalt</div>
            <div className="text-slate-700 dark:text-slate-500">Can Borrow</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default ToolTile;
