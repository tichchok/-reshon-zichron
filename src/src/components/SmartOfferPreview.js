import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SmartOfferPreview() {
  const [form, setForm] = useState({
    price: '',
    bonus: '',
    timeline: '',
    notes: '',
    generated: ''
  });

  const navigate = useNavigate();

  const generateOfferText = () => {
    const { price, bonus, timeline, notes } = form;
    const bulletPoints = [];
    if (price) bulletPoints.push(`• Purchase price offered: ₪${price}`);
    if (bonus) bulletPoints.push(`• Additional offer: ${bonus}`);
    if (timeline) bulletPoints.push(`• Proposed timeline: ${timeline}`);
    if (notes) bulletPoints.push(`• Notes: ${notes}`);

    const final = `Proposed Offer Preview:\n\n${bulletPoints.join('\n')}`;
    const id = Date.now().toString();
    localStorage.setItem(`offer-${id}`, JSON.stringify({ ...form, generated: final, timestamp: new Date().toISOString() }));
    navigate(`/offer/${id}`);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-2">Smart Offer Preview</h2>
      <label className="block mt-2">Price Offer (₪)</label>
      <input type="number" name="price" value={form.price} onChange={handleChange} className="border rounded w-full p-2" />
      <label className="block mt-2">Bonus / Creative Add-on</label>
      <input type="text" name="bonus" value={form.bonus} onChange={handleChange} className="border rounded w-full p-2" />
      <label className="block mt-2">Suggested Timeline</label>
      <input type="text" name="timeline" value={form.timeline} onChange={handleChange} className="border rounded w-full p-2" />
      <label className="block mt-2">Other Notes (optional)</label>
      <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} className="border rounded w-full p-2" />
      <button onClick={generateOfferText} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Generate Offer Summary</button>
    </div>
  );
                                                        }
