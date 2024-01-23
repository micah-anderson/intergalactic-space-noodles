import React from 'react'

const Likes = () => {
  return (
    <div className="text-red-600 text-9xl font-extrabold underline">
      <h1>Heres a list of random things I like and enjoy in life</h1>
      <ul>
        {/* Have buttons you click and they ruote to the thing */}
        <h2>What:</h2>
        <li>Youtube</li>
        <h3>Why: Because you can learn basically anything.</h3>
        <p>
          Specifically because:There's so from so many incredible creators, all
          with unique styles and expressions of themselves.
        </p>
        <h3>Recommendations: </h3>
        <ul>
          <li>Nisat & his channel: "The Spirited Man"</li>
          <li>Support him on patreon at...</li>
        </ul>
        <ul>
          <li>repeat</li>
          <li>etc</li>
        </ul>
      </ul>
    </div>
  );
}

export default Likes