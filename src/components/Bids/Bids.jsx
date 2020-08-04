import React from 'react'

export default (props) => {
  if (!props.bids.length) {
    return ''
  }

  return (
    <div>
      <p>Bids:</p>
      <ul>
        {props.bids
          .sort((a, b) => b.created - a.created)
          .map((bid) => (
            <li key={bid.id}>
              {bid.amount}x {bid.carTitle} <i>({bid.created})</i>
            </li>
          ))}
      </ul>
    </div>
  )
}
