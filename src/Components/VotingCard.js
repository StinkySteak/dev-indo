import React, { useState } from 'react'
import './VotingCard.css'

function VotingCard(props) {

  const [hasVote, setHasVote] = useState(false);

  function onButtonClick() {
    setHasVote(true);
  }

  return (
    <div className='votingcard flex-center'>
      <div className=' votingcard-left'>
        <div className='flex-left'>
          <h1>{props.title}</h1>
        </div>
      </div>
      <div className=' votingcard-right'>
        <div className='flex-right'>
          <div className='votingcard-score flex-center'>
            <p>Voting Score: {props.score}</p>
          </div>
          <div>
            {!hasVote && <div>
              <button onClick={props.action}>
                Upvote
              </button>
              <button onClick={props.action}>
                Downvote
              </button>
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VotingCard