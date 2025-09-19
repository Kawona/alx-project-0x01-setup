import React, { useEffect, useState } from 'react';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '../../interfaces';

const UsersPage: React.FC = () => {
  const [posts, setPosts] = useState<UserProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <UserCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default UsersPage;