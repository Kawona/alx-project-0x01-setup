import React from 'react';
import PostCard from '../../components/common/PostCard';

const PostsPage: React.FC = () => {
    const posts = [
        { id: 1, title: 'First post', body: 'This is the body of the first post.' },
        { id: 2, title: 'second post', body: 'This is the body of the second post.' },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            <div className="grid gap-4">
                {posts.map((p) => (
                    <PostCard key={p.id} title={p.title} body={p.body} />
                ))}
            </div>
        </div>
    );
};

export default PostsPage;