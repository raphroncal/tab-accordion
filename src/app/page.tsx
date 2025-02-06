"use client";

import Accordion from "@/components/Accordion";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import {useEffect, useState} from "react";

export interface DataObject {
  title: string;
  content: string;
}

export const decodeHtml = (input: string): string => {
  const e = document.createElement("div");
  e.innerHTML = input;
  return e.innerHTML || e.textContent || "";
};

export default function Home() {
  const [data, setData] = useState<DataObject[]>();
  const [section, setSection] = useState<number>(0);
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

  const toggleDisplay = (index: number) => {
    setDisplayStates((prevState) =>
      prevState.map((state, i) => (i === index ? !state : false))
    );
  };

  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center px-12 py-6 space-y-5">
        <h1 className="font-mono">about us</h1>
        <h2 className="font-bold text-center text-base text-pretty lg:text-xl lg:w-1/2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          voluptatem facilis ipsum ipsa.
        </h2>
        <div className="content text-black lg:flex lg:gap-2 lg:w-full lg:overflow-hidden">
          {/* image */}
          <div className="mb-2 lg:mb-0 lg:relative lg:order-2">
            <img
              src="images/corporate.jpg"
              alt="image of a corporate team meeting"
              className="lg:flex lg:flex-grow lg:max-w-full lg:h-auto lg:object-cover"
            />
          </div>
          {/* accordion */}
          <div className="w-full lg:hidden">
            {data &&
              data.map((data: DataObject, index: number) => (
                <div key={index}>
                  <div>
                    <Accordion
                      title={data.title}
                      content={data.content}
                      isOpen={displayStates[index]}
                      toggle={() => {
                        // [];
                        toggleDisplay(index);
                      }}
                    ></Accordion>
                  </div>
                </div>
              ))}
          </div>
          {/* tab */}
          <div className="hidden lg:flex lg:flex-col h-fit w-[40rem] order-1">
            <div className="flex flex-row">
              {data &&
                data.map((data: DataObject, index: number) => (
                  <div
                    key={index}
                    className={`rounded-t-md w-40 py-1 bg-slate-100 border border-slate-300 cursor-pointer ${
                      section == index && "bg-slate-400"
                    }`}
                    onClick={() => {
                      setSection(index);
                    }}
                  >
                    <h3
                      className={`text-sm text-center ${
                        section == index && "text-slate-100 font-bold"
                      }`}
                    >
                      {data.title}
                    </h3>
                  </div>
                ))}
            </div>
            <div className="w-full min-h-52 px-6 py-3 bg-slate-100 border border-slate-300">
              <div
                dangerouslySetInnerHTML={
                  data && {
                    __html: decodeHtml(data[section].content),
                  }
                }
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
