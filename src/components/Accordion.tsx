"use client";

import {DataObject} from "@/app/page";
import React, {useState} from "react";

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
  const decodeHtml = (input: string): string => {
    const e = document.createElement("div");
    e.innerHTML = input;
    return e.innerHTML || e.textContent || "";
  };
  return (
    <div className="px-20 mb-1 bg-slate-100" onClick={toggle}>
      <h3 className="text-lg font-bold">{title}</h3>
      {isOpen && (
        <div dangerouslySetInnerHTML={{__html: decodeHtml(content)}} />
      )}
    </div>
  );
};

export default Accordion;
