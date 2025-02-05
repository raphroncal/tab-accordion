"use client";

import Accordion from "@/components/Accordion";
import NavBar from "@/components/NavBar";
import {useEffect, useState} from "react";

export interface DataObject {
  title: string;
  content: string;
}

export default function Home() {
  const [data, setData] = useState<DataObject[]>();
  const [displayStates, setDisplayStates] = useState<boolean[]>([]);

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

  useEffect(() => {
    if (data) {
      // Initialize all displays to false except the first
      let initialStates = new Array(data.length).fill(false);
      initialStates[0] = true;
      setDisplayStates(initialStates);
    }
  }, [data]);

  useEffect(() => {
    console.log(displayStates);
  }, [displayStates]);

  const toggleDisplay = (index: number) => {
    setDisplayStates((prevState) =>
      prevState.map((state, i) => (i === index ? !state : false))
    );
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
                <Accordion
                  title={data.title}
                  content={data.content}
                  isOpen={displayStates[index]}
                  toggle={() => {
                    toggleDisplay(index);
                  }}
                ></Accordion>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
