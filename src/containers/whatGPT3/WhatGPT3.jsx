import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is BSI-AI" text="BSI-AI is an AI research and deployment company. Our mission is to ensure that artificial general intelligence benefits all of humanity.
" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Creating
Images from Text" text="We’ve trained a neural network called DALL·E that creates images from text captions for a wide range of concepts expressible in natural language." />
      <Feature title="Image GPT" text="We find that, just as a large transformer model trained on language can generate coherent text, the same exact model trained on pixel sequences can generate coherent image completions and samples." />
    </div>
  </div>
);

export default WhatGPT3;
