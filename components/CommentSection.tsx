"use client";
import React, { useState } from "react";

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const handleAddComment = () => {
    if (!name || !comment) return;
    setComments([...comments, { name, comment }]);
    setName("");
    setComment("");
  };

  const handleDeleteComment = (index: number) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 max-w-[80%] md:max-w-[60%] mx-auto bg-[#491414] rounded-lg shadow-md border-[1px]">
      <h2 className="text-xl font-bold mb-4 text-[#75d848] hover:text-[#7665d6] text-center">
        Comments Section
      </h2>
      <input
        type="text"
        className="w-full mb-2 p-2 border border-gray-300 rounded text-[#222] focus:ring-2 focus:ring-[#75d848] focus:outline-none"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}/>
      <textarea
        className="w-full mb-2 p-2 border border-gray-300 rounded text-[#222] focus:ring-2 focus:ring-[#75d848] focus:outline-none"
        placeholder="Your Comment"
        rows={3}
        value={comment}
        onChange={(e) => setComment(e.target.value)}/>
      <button
        onClick={handleAddComment}
        className="w-full bg-[#2c6634] text-white py-2 rounded hover:bg-[#23652a] transition duration-300">
        Add Comment
      </button>

      <div className="mt-4">
        {comments.map((item, index) => (
          <div
            key={index}
            className="mb-3 p-3 bg-white rounded-lg shadow-md border border-gray-200">
            <p className="font-semibold text-[#75d848] mb-1">{item.name}</p>
            <p className="text-[#313d2c]">{item.comment}</p>
            <button
              onClick={() => handleDeleteComment(index)}
              className="text-[#d42626] hover:text-[#a92020] hover:underline text-sm float-right">
              Delete
            </button>
          </div>
        ))}
        {comments.length === 0 && (
          <p className="text-center text-[#ddd] mt-4">No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
