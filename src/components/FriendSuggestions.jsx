import { FaUserPlus } from 'react-icons/fa';

const FriendSuggestions = () => {
  const suggestions = [
    { name: 'John Doe', avatar: 'https://cdn-icons-png.freepik.com/512/4209/4209019.png' },
    { name: 'Jane Smith', avatar: 'https://cdn-icons-png.freepik.com/512/4209/4209019.png' },
    { name: 'Michael Brown', avatar: 'https://cdn-icons-png.freepik.com/512/4209/4209019.png' },
    { name: 'Emily Davis', avatar: 'https://cdn-icons-png.freepik.com/512/4209/4209019.png' },
  ];

  return (
    <div className="space-y-6">
      {/* Friend Suggestions */}
      {suggestions.map((friend, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded-3xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
          style={{ height: '90px' }}
        >
          {/* Profile and Username Section */}
          <div className="flex items-center space-x-4 mb-2">
            <img src={friend.avatar} alt={friend.name} className="w-16 h-16 rounded-full border-2 border-blue-500" />
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-600">@{friend.name}</span>
              <div className="bg-blue-500 p-3 rounded-full cursor-pointer hover:bg-blue-600">
                <FaUserPlus className="text-white" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendSuggestions;
