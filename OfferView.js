import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GenerateZichronFromOffer from './GenerateZichronFromOffer';

export default function OfferView() {
  const { id } = useParams();
  const [offer, setOffer] = useState(null);
  const [response, setResponse] = useState('');
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`offer-${id}`);
    if (saved) {
      const parsed = JSON.parse(saved);
      setOffer(parsed);
      const created = new Date(parsed.timestamp);
      const now = new Date();
      const diffHours = (now - created) / 36e5;
      if (diffHours > 72) setExpired(true);
    }
  }, [id]);

  if (!offer) return <p>Loading offer...</p>;
  if (expired) return <p>This offer has expired.</p>;

  return (
    <div style={{ maxWidth: 700, margin: 'auto' }}>
      <h2>Offer Preview Received</h2>
      <pre style={{ background: '#f4f4f4', padding: 10 }}>{offer.generated}</pre>
      <GenerateZichronFromOffer offer={offer} />
    </div>
  );
}