import React from 'react';

type PostCardProps = {
    title: string
    body: string
};

const PostCard = ({ title, body }:PostCardProps) => (
    <article className=" border rounded-lg p-4 shadow-sm bg-white">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{body}</p>
    </article>
);

export default PostCard;