import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";


export const Card = ({type, title, duration, genre, rating, releaseDate, imgUrl, episodes, platform }) => {
    const icons = {
        "pc": <FaComputer />,
        "xbox": <FaXbox />,
        "playstation": <FaPlaystation />
    }
    return (
        <div className="bg-cardBG flex flex-col w-[300px] h-[520px] hover:scale-105 rounded-xl">
            <div className="h-3/4 rounded-t-xl w-full">
                <img src={imgUrl} alt="Cover Image" className="w-full h-full rounded-t-xl" />
            </div>
            <div className="h-1/4 flex flex-col p-4">
                <p className="text-2xl text-white font-sans">{title}</p>
                <p className="text-cardSubtitleColor text-sm">{type}</p>
                <div className="w-full flex items-center justify-between">
                <p className="text-cardSubtitleColor text-sm">{type==="Movie" && duration+"/"}{type==="Anime" && episodes+" episodes/"}  {genre}/ {releaseDate}</p>
                <p className={`flex gap-x-1 ${type==="Movie" && "bg-yellow-400 text-[1rem] text-black"} ${type==="Anime" && "bg-yellow-400 text-[1rem] text-black"} ${type==="Game" && "text-xl text-cardSubtitleColor"}   px-2 rounded `}>{type==="Movie" && rating}{type==="Anime" && rating}{type==="Game" && platform.map((platform) => icons[platform])}</p>
                </div>
            </div>
            <button className="w-full self-center bg-cardButtonColor hover:bg-cardButtonColor/60 text-white py-2 rounded-b-xl">Add to Profile</button>

        </div>
    )
}