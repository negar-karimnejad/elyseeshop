import React from "react";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

function Instagram() {
  return (
    <Link
      to="https://www.instagram.com/"
      target="_blank"
      className="text-stone-400 dark:text-stone-200 dark:hover:text-white hover:text-pink-600 transition-all"
    >
      <BsInstagram />
    </Link>
  );
}

export default Instagram;
