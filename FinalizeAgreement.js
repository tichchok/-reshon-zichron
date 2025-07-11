import React, { useState } from 'react';

export default function FinalizeAgreement({ contract }) {
  const [signed, setSigned] = useState(false);
  const [signature, setSignature] = useState('');

  const handleSign = () => {
    if (signature.trim().length > 0) {
      setSigned(true);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([contract + `\n\nSigned by: ${signature}`], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Zichron_Agreement.txt';
    link.click();
  };

  return (
    <div className="mt-4">
      {!signed ? (
        <>
          <input
            type="text"
            placeholder="Full name / signature"
            value={signature}
            onChange={e => setSignature(e.target.value)}
            className="border rounded w-full p-2 mb-2"
          />
          <button onClick={handleSign} className="bg-blue-600 text-white px-4 py-2 rounded">Sign Agreement</button>
        </>
      ) : (
        <>
          <p className="text-green-600 font-semibold mb-2">Agreement signed by: {signature}</p>
          <button onClick={handleDownload} className="bg-green-600 text-white px-4 py-2 rounded">Download Signed Copy</button>
        </>
      )}
    </div>
  );
}