import React, { useEffect, useState } from "react";
import { BiSolidCopy } from "react-icons/bi";
import Modal from "./Modal";
const Copy = ({ generatedPass }) => {
  const [Modall, setModel] = useState(false);
  useEffect(() => {
    if (Modall) {
      setTimeout(() => {
        setModel(false);
      }, 800);
    }
  });
  return (
    <>
      <button
        className="copy_btn"
        title="copy"
        onClick={() => {
          navigator.clipboard.writeText(generatedPass);

          setModel(true);
        }}
      >
        <BiSolidCopy className="icon_copy" size={20} color="#121212" />
      </button>
      {Modall ? (
        <>
          <Modal />
        </>
      ) : null}
    </>
  );
};

export default Copy;
