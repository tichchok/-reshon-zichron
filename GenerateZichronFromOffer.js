import React, { useState } from 'react';
import FinalizeAgreement from './FinalizeAgreement';

export default function GenerateZichronFromOffer({ offer }) {
  const [contract, setContract] = useState('');
  const [generated, setGenerated] = useState(false);

  const generateContract = () => {
    const bullets = [];
    if (offer.price) bullets.push(`Purchase Price: ₪${offer.price}`);
    if (offer.bonus) bullets.push(`Additional Consideration: ${offer.bonus}`);
    if (offer.timeline) bullets.push(`Proposed Timeline: ${offer.timeline}`);
    if (offer.notes) bullets.push(`Notes: ${offer.notes}`);

    const clauses = bullets.map((b, i) => `${i + 1}. ${b}`).join('\n\n');
    const header = `Preliminary Binding Agreement (Zichron Devarim)\n\nDate: ${new Date().toLocaleDateString()}\n\nBuyer and Seller agree to the following terms:`;
    setContract(`${header}\n\n${clauses}`);
    setGenerated(true);
  };

  return (
    <div>
      <button onClick={generateContract} className="bg-green-600 text-white px-4 py-2 rounded mt-4">Generate Agreement</button>
      {generated && (
        <>
          <pre className="whitespace-pre-wrap mt-4">{contract}</pre>
          <FinalizeAgreement contract={contract} />
        </>
      )}
    </div>
  );
}