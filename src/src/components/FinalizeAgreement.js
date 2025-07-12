import React, { useState } from 'react';

export default function FinalizeAgreement({ text }) {
  const [signed, setSigned] = useState(false);

  const handleDownload = () => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Zichron_Devarim.txt';
    link.click();
  };

  return (
    <div>
      <h4>Finalize Agreement</h4>
      <label>
        <input type="checkbox" checked={signed} onChange={() => setSigned(!signed)} />
        I confirm this preview is ready to finalize
      </label>
      <br />
      <button onClick={handleDownload} disabled={!signed}>Download Draft</button>
    </div>
  );
}
