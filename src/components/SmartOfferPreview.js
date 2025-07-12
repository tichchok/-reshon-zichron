import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SmartOfferPreview() {
  const [price, setPrice] = useState('');
  const [bonus, setBonus] = useState('');
  const [timeline, setTimeline] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const offerId = 'demo123'; // temporary static ID
    navigate(`/offer/${offerId}`, {
      state: { price, bonus, timeline },
    });
  };

  return (
    <div>
      <h2>Create Smart Offer</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Offer Price:
          <input value={price} onChange={e => setPrice(e.target.value)} required />
        </label>
        <label>
          Bonus/Terms:
          <input value={bonus} onChange={e => setBonus(e.target.value)} />
        </label>
        <label>
          Preferred Timeline:
          <input value={timeline} onChange={e => setTimeline(e.target.value)} />
        </label>
        <button type="submit">Generate Offer</button>
      </form>
    </div>
  );
    }
