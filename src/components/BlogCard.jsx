import React from "react";

const BlogCard = ({ blog }) => {
  const { date, title, img, comment } = blog;
  return (
    <div className="space-y-4">
      <img
        className="hover:scale-105 transition-transform rounded-lg"
        src={img}
        alt={title}
      />
      <div className="flex justify-between text-accent font-medium">
        <span>{date}</span>
        <span className="text-sm text-black">{comment} comments</span>
      </div>
      <h3 className="text-slate-600 text-xl">{title}</h3>{" "}
    </div>
  );
};

export default BlogCard;
