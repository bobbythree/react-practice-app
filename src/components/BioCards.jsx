import { useState } from "react";
import Card from "./Card";
import dev from '../assets/images/dev.png'
import dog from '../assets/images/dog.png'
import astronaut from '../assets/images/astronaut.png'



export default function BioCards() {
  const [showMore, setShowMore] = useState(false);

  const bios = [
    {
      id: 1,
      title: 'Bobby Three',
      subtitle: 'Software Developer',
      description: 'sdf sadf asdf sadf sdaf sad sad sadf sdf sad sadf sadf sd asdf sdf sadf',
      img: dev,
      alt: 'picture of a software dev'
    },
    {
      id: 2,
      title: 'Gustavo Fluffybutt',
      subtitle: 'Dog',
      description: 'sdf sadf asdf sadf sdaf sad sad sadf sdf sad sadf sadf sd asdf sdf sadf',
      img: dog,
      alt: 'picture of a dog'
    },{
      id: 3,
      title: 'Rocketman Jim',
      subtitle: 'Astronaut',
      description: 'sdf sadf asdf sadf sdaf sad sad sadf sdf sad sadf sadf sd asdf sdf sadf',
      img: astronaut,
      alt: 'picture of an astronaut'
    }
  ]

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