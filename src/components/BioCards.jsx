import Card from "./Card";
import profilePic from '../assets/images/profilePic.png'


export default function BioCards() {
  

  return (
    <section className="flex justify-around p-15 bg-cyan-900">
      <Card>
        <div className="bg-slate-400 w-52 flex flex-col items-center p-4 rounded-lg">
          <img src={profilePic} alt="profile pic" className="w-44" />
          <h2 className="p-2 font-bold">Bobby Three</h2>
          <p>Software Developer</p>
        </div>
      </Card>
      <Card>
        <div className="bg-slate-400 w-52 flex flex-col items-center p-4 rounded-lg">
          <img src={profilePic} alt="profile pic" className="w-44" />
          <h2 className="p-2 font-bold">Bobby Three</h2>
          <p>Software Developer</p>
        </div>
      </Card>
      <Card>
        <div className="bg-slate-400 w-52 flex flex-col items-center p-4 rounded-lg">
          <img src={profilePic} alt="profile pic" className="w-44" />
          <h2 className="p-2 font-bold">Bobby Three</h2>
          <p>Software Developer</p>
        </div>
      </Card>
    </section>
      
  );
}