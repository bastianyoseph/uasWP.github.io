import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Jun 26, 2022" text="BSI-AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Jul 26, 2022" text="How to create a url generator ?" />
        <Article imgUrl={blog03} date="Aug 26, 2022" text="Solve an error From users BSI-AI" />
        <Article imgUrl={blog04} date="Sep 26, 2022" text="Create ChatBots with BSI-AI" />
        <Article imgUrl={blog05} date="Oct 26, 2022" text="Find your phone with BSI-AI" />
      </div>
    </div>
  </div>
);

export default Blog;
