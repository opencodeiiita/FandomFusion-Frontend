import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  Star,
  Popcorn,
  Sparkles,
  MousePointerClickIcon as CursorClick,
} from "lucide-react";
import { Badge } from "./Badge";
import { Button } from "./Button";

const tagColors = {
  game: ["bg-red-500", "bg-green-500"],
  movie: ["bg-red-500", "bg-green-500"],
  anime: ["bg-red-500", "bg-green-500"],
};

const ratingIcons = {
  game: <Star className="inline-block w-4 h-4 text-yellow-400" />,
  movie: <Popcorn className="inline-block w-4 h-4 text-yellow-400" />,
  anime: <Sparkles className="inline-block w-4 h-4 text-yellow-400" />,
};

const ctaLabels = {
  game: "Connect with Fellow Gamers",
  movie: "Join Our Movie Buffs Chat",
  anime: "Join the Otaku Family!",
};

export function Card({
  type,
  title,
  subtitle,
  imageUrl,
  rating,
  votes,
  tags,
  stats,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-sm mx-auto overflow-hidden shadow-2xl h-[460px] rounded-lg">
        <div className="relative p-0">
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute top-2 left-2 flex gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={tag}
                text={tag}
                color={index === 1 ? "info" : "success"}
                className={`${tagColors[type][index]} text-white`}
              />
            ))}
          </div>
        </div>
        <div className="p-4 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>
            <p className="text-sm text-gray-500 text-center mb-4">{subtitle}</p>
            <div className="flex justify-between items-center mb-4">
              <div className="text-green-500 font-bold">
                {rating}% {ratingIcons[type]}
              </div>
              <div className="text-sm text-gray-500">
                {votes.toLocaleString()} Votes
              </div>
            </div>
          </div>

          <div className="flex w-full justify-between gap-2">
            <div className="flex items-center">
              <div className="flex flex-col">
                <span className="ml-2 text-sm font-bold flex gap-4 justify-start">
                  {stats.primary.icon}
                  {stats.primary.value.toLocaleString()}+
                </span>
                <span className="ml-2 text-sm flex justify-center">
                  {stats.primary.label}
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col">
                <span className="ml-2 text-sm font-bold flex gap-4 justify-start">
                  {stats.secondary.icon}
                  {stats.secondary.value.toLocaleString()}
                </span>
                <span className="ml-2 text-sm flex justify-center">
                  {stats.secondary.label}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 w-full">
          <Button className="w-full relative" variant={"success"}>
            {ctaLabels[type]}
            <motion.div
              className="absolute right-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <CursorClick className="w-4 h-4" />
            </motion.div>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

Card.propTypes = {
  type: PropTypes.oneOf(["game", "movie", "anime"]).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  votes: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  stats: PropTypes.shape({
    primary: PropTypes.shape({
      icon: PropTypes.node,
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
    secondary: PropTypes.shape({
      icon: PropTypes.node,
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
