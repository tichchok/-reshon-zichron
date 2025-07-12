import React from 'react';
import { useLocation } from 'react-router-dom';
import GenerateZichronFromOffer from './GenerateZichronFromOffer';

export default function OfferView() {
  const location = useLocation();
  const { price, bonus, timeline } = location.state || {};

  if (!price) return <div>No offer found.</div>;

  return (
    <div>
      <h2>Review Smart Offer</h2>
      <p><strong>Price:</strong> {price}</p>
      <p><strong>Bonus/Terms:</strong> {bonus}</p>
      <p><strong>Timeline:</strong> {timeline}</p>
      <GenerateZichronFromOffer offer={{ price, bonus, timeline }} />
    </div>
  );
    }
