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

  return (
    <div>
      <NavBar></NavBar>
      <div className="flex flex-col items-center px-12 py-6 space-y-5">
        <h1 className="font-mono">about us</h1>
        <h2 className="font-bold text-center text-xl text-pretty w-1/2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          voluptatem facilis ipsum ipsa.
        </h2>
        <div>
          {data &&
            data.map((data: DataObject, index: number) => (
              <div key={index}>
                <h3>{data.title}</h3>
                <p>{data.content}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
