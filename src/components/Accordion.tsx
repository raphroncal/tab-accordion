"use client";

import {decodeHtml} from "@/app/page";
import React from "react";

interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  toggle: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  isOpen,
  toggle,
}) => {
  return (
    <div className="mb-1 px-4 bg-slate-100" onClick={toggle}>
      <div className="flex flex-row justify-between items-center py-2">
        <p className="w-max text-lg font-bold">{title}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          className={isOpen ? "rotate-180" : undefined}
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5.307 8.713A.75.75 0 0 1 6 8.25h12a.75.75 0 0 1 .53 1.28l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1-.163-.817"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isOpen && (
        <div
          dangerouslySetInnerHTML={{__html: decodeHtml(content)}}
          className="py-2"
        />
      )}
    </div>
  );
};

export default Accordion;
