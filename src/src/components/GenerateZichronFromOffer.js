import React from 'react';
import FinalizeAgreement from './FinalizeAgreement';

export default function GenerateZichronFromOffer({ offer }) {
  const { price, bonus, timeline } = offer;

  const draftText = `
    This is a non-binding outline of agreed terms.
    Buyer proposes to purchase the property for ${price}.
    Additional terms: ${bonus || 'None specified'}.
    Target closing timeline: ${timeline || 'To be discussed'}.
  `.trim();

  return (
    <div>
      <h3>Zichron Devarim Preview</h3>
      <pre>{draftText}</pre>
      <FinalizeAgreement text={draftText} />
    </div>
  );
}
