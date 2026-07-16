import {useRef} from "react";
import {useScroll} from "motion/react";
import Card from "./Card";
import { title } from "process";


const data = [
  {
    title: "Natural Language Analytics",
    description:
      "Transform complex business data into clear, actionable insights through conversation.",
    color: "bg-red-500",
    icon: "🧠",
  },
  {
    title: "Dynamic Visualizations",
    description:
      "AI automatically creates dashboards, charts, and reports tailored to your data.",
    color: "bg-blue-500",
    icon: "📈",
  },
  {
    title: "Autonomous Workflows",
    description:
      "Streamline operations by automating repetitive tasks and business processes.",
    color: "bg-green-500",
    icon: "⚡",
  },
  // {
  //   title: "",
  //   description: "",
  //   color: "bg-transparent",
  //   icon: "",
  // },
];


export default function Cards({progress}:{progress:any}){


 return (
  <div
 
   className="h-[350vh]"
  >

   {
    data.map((item,index)=>{

     const scale =
       1 - (data.length-index)*0.05;


     return (
      <Card
       key={index}
       index={index}
       title={item.title}
       description={item.description}
       color={item.color}
       progress={progress}
       targetScale={scale}
      />
     )

    })
   }

  </div>
 )
}