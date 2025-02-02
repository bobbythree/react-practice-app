import Card from "./Card";
import dev from '../assets/images/dev.png'
import dog from '../assets/images/dog.png'
import astronaut from '../assets/images/astronaut.png'



export default function BioCards() {
  const bios = [
    {
      id: 1,
      title: 'Bobby Three',
      subtitle: 'Software Developer',
      img: dev,
      alt: 'picture of a software dev'
    },
    {
      id: 2,
      title: 'Gustavo Fluffybutt',
      subtitle: 'Dog',
      img: dog,
      alt: 'picture of a dog'
    },{
      id: 3,
      title: 'Rocketman Jim',
      subtitle: 'Astronaut',
      img: astronaut,
      alt: 'picture of an astronaut'
    }
  ]

  return (
    <section className="flex justify-around p-15 bg-cyan-900">
      {bios.map(bio => (
        <Card>
          <img src={bio.img} alt={bio.alt} key={bio.id} className="w-44" />
          <h2 className="p-4 font-bold">{bio.title}</h2>
          <p>{bio.subtitle}</p>        
        </Card>
      ))}
    </section>      
  );
}