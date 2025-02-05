"use client";

import NavBar from "@/components/NavBar";
import {useEffect, useState} from "react";

export default function Home() {
  interface DataObject {
    title: string;
    content: string;
  }

  const [data, setData] = useState<DataObject[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data/data.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  const decodeHtml = (input: string): string => {
    const e = document.createElement("div");
    e.innerHTML = input;
    return e.innerHTML || e.textContent || "";
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="flex flex-col items-center px-12 py-6 space-y-5">
        <h1 className="font-mono">about us</h1>
        <h2 className="font-bold text-center text-xl text-pretty w-1/2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          voluptatem facilis ipsum ipsa.
        </h2>
        <div className="content text-black">
          {data &&
            data.map((data: DataObject, index: number) => (
              <div key={index}>
                <h3>{data.title}</h3>
                <div
                  dangerouslySetInnerHTML={{__html: decodeHtml(data.content)}}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
