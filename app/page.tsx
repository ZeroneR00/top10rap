import { rappers } from "./data/rappers";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="p-4">
        <h1 className="text-2xl font-bold">Rappers TOP:</h1>
        
          {rappers.map((rapper) => (
            <ul className="p-4 m-3 border border-zinc-500 rounded-md" key={rapper.id}> 
          
              <li>Nape:{rapper.name}</li>
              <li>Slug: {rapper.slug}</li>
              <li>Real Name: {rapper.realName}</li>
              <li>Image: {rapper.image}</li>
              <li>Rank: {rapper.rank}</li>
              <li>Bio: {rapper.bio}</li>
            </ul>
          ))}
      </main>
    </div>
  );
}
