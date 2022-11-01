type ProjectCardProps = {
    title: string
    photo: string
    description: string
    url: string
  }
  
  export default function Project({title, photo, description, url}: ProjectCardProps) {
    return (
        <div className="container mx-auto flex flex-col items-center px-1 justify-center w-3/4 md:w-full border-emerald-900 border rounded-3xl bg-neutral-50 hover:shadow-2xl translate-y-2 hover:translate-y-0 transition hover:scale-105 ease-in-out duration-300 pb-4">
            <h2 className="text-3xl text-emerald-800 font-semibold p-3">{title}</h2>
            <img src={`${photo}`} alt={`Image of ${title}`} className="w-full rounded-md" />
            <p className="mx-2 text-center py-4">{description}</p>
            <a href={`https://${url}`} target="_blank" className="p-2 text-emerald-900 font-medium">Check out this project on github</a>
        </div>
    )
  }