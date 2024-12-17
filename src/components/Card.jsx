



export const Card = ({ title, duration, genre, rating, releaseDate, imgUrl }) => {
    return (
        <div className="bg-cardBG flex flex-col w-[300px] h-[520px] hover:scale-105 rounded-xl">
            <div className="h-3/4 rounded-t-xl w-full">
                <img src={imgUrl} alt="Movie Cover Image" className="w-full h-full rounded-t-xl" />
            </div>
            <div className="h-1/4 flex flex-col p-4">
                <p className="text-2xl text-white font-sans">{title}</p>
                <div className="w-full flex justify-between">
                <p className="text-cardSubtitleColor text-sm">{duration} / {genre} / {releaseDate}</p>
                <p className=" text-[1rem] bg-yellow-400 px-2 rounded text-black">{rating}</p>
                </div>
            </div>
            <button className="w-full self-center bg-cardButtonColor hover:bg-cardButtonColor/60 text-white py-2 rounded-b-xl">Watch Now</button>

        </div>
    )
}