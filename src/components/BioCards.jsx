import { useState } from "react";
import Card from "./Card";
import bios from '../bios.json'

export default function BioCards() {
  const [showMore, setShowMore] = useState(false);

  const handleToggleExpand = (id) => {
    setShowMore(prev => ({
      ...prev,
      [id]: !prev[id] // Toggle the state for the specific ID
    }));
  };

  return (
    <section className="flex justify-around p-15 bg-base-200">
      {bios.map(bio => {
        const isExpanded = showMore[bio.id] || false; // Check if *this* card is expanded
        const displayedDescription = isExpanded ? bio.description : bio.description.substring(0, 40) + "...";
  
      return(
        <Card key={bio.id}>
          <img src={bio.img} alt={bio.alt} key={bio.id} className="w-44" />
          <h2 className="p-4 pb-2 font-bold">{bio.title}</h2>
          <p>{bio.subtitle}</p> 
          <p className="pt-2">{displayedDescription}</p>     
          <button onClick={() => handleToggleExpand(bio.id)} 
          className="text-sm pt-2 text-slate-800 hover:text-slate-600 border-b-2">
            {showMore ? 'less' : "more"}
          </button>
        </Card>
      );
      })}
    </section>      
  );
}