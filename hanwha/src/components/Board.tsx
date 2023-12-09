import React, { useEffect, useState } from 'react';

import { job } from '../dummy/job';
import { Job } from '../type/dummy';

const Board: React.FC = () => {
  const [posts, setPosts] = useState<Job[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(20);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    setPosts(job);
  }, []);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const indexOfLastFilteredPost = currentPage * postsPerPage;
  const indexOfFirstFilteredPost = indexOfLastFilteredPost - postsPerPage;
  const currentFilteredPosts = filteredPosts.slice(
    indexOfFirstFilteredPost,
    indexOfLastFilteredPost,
  );

  return (
    <div>
      <h2>Job Board</h2>
      <p>
        <span>내용 검색 : </span>
        <input
          type="text"
          placeholder="검색..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </p>

      <ul>
        {currentFilteredPosts.map((post) => (
          <li key={post.id}>
            <span>{post.name} : </span>
            <span>{post.title}</span>
          </li>
        ))}
      </ul>

      <div>
        {Array.from({
          length: Math.ceil(filteredPosts.length / postsPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            style={{
              margin: '2px',
              padding: '8px 12px',
              backgroundColor: currentPage === index + 1 ? '#4CAF50' : '#ddd',
              color: currentPage === index + 1 ? 'white' : 'black',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Board;
