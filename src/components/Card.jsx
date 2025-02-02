
export default function Card({children}) {

  return (
    <div className="bg-slate-400 w-52 flex flex-col items-center p-4 rounded-lg">
      {children}
    </div>
  );
}