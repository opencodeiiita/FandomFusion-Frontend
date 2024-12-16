import React from "react";

const contributors = [
	{
		name: "Your Name",
		github: "https://github.com/yourusername",
		avatar: "https://github.com/yourusername.png",
	},
	// Add more contributors here
	{
		name:"Nitya Bhavsar",
		github:"https://github.com/NityaB25",
		avatar:"https://avatars.githubusercontent.com/u/149292926?s=400&v=4",
	}
];

const Contributors = () => {
	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<h1 className="text-3xl font-bold text-center mb-6">
				Our Amazing Contributors of FandomFusion
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{contributors.map((contributor, index) => (
					<div
						key={index}
						className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4"
					>
						<img
							src={contributor.avatar}
							alt={`${contributor.name}'s avatar`}
							className="w-20 h-20 rounded-full mb-4"
						/>
						<h2 className="text-lg font-semibold">{contributor.name}</h2>
						<a
							href={contributor.github}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 hover:underline mt-2"
						>
							View GitHub Profile
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Contributors;
