import React from 'react'

export default (props) => {
  if (!props.bids.length) {
    return ''
  }

  return (
    <div>
      <p>Bids:</p>
      {props.bids
        .sort((a, b) => b.created - a.created)
        .map((bid, index) => (
          <div key={index}>
            {bid.amount}x {bid.carTitle} <i>({bid.created})</i>
          </div>
        ))}
    </div>
  )
}
