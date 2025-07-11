import React, { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    buyer: "",
    seller: "",
    address: "",
    price: "",
    currency: "₪",
    conditions: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const agreementText = `
הסכם זכרון דברים

הקונה ${form.buyer || "________"} והמוכר ${form.seller || "________"} מסכימים לרכישת הנכס ברחוב ${
    form.address || "________"
  } במחיר כולל של ${form.price || "________"} ${form.currency}.

התשלום יתבצע לפי התנאים הבאים:
${form.conditions || "________"}

הערות נוספות:
${form.notes || "________"}

הסכם זה מהווה התחייבות ראשונית, וייחתם בהמשך הסכם מכר מלא.
  `.trim();

  return (
    <div style={{ maxWidth: 700, margin: "auto", padding: 24, fontFamily: "sans-serif" }}>
      <h1 style={{ marginBottom: 0 }}>📝 Zichron Devarim Generator</h1>
      <p style={{ marginTop: 0, color: "#666" }}>Fill in details to generate your draft agreement</p>

      <div style={{ display: "grid", gap: 12, marginTop: 24 }}>
        <input placeholder="Buyer Name" name="buyer" value={form.buyer} onChange={handleChange} />
        <input placeholder="Seller Name" name="seller" value={form.seller} onChange={handleChange} />
        <input placeholder="Property Address" name="address" value={form.address} onChange={handleChange} />
        <input placeholder="Total Price" name="price" value={form.price} onChange={handleChange} />
        <select name="currency" value={form.currency} onChange={handleChange}>
          <option value="₪">₪ (Shekel)</option>
          <option value="$">$ (USD)</option>
          <option value="€">€ (Euro)</option>
        </select>
        <textarea placeholder="Payment Terms / Conditions" name="conditions" value={form.conditions} onChange={handleChange} />
        <textarea placeholder="Other Notes (optional)" name="notes" value={form.notes} onChange={handleChange} />
      </div>

      <h2 style={{ marginTop: 40 }}>📄 Agreement Preview</h2>
      <pre style={{ background: "#f9f9f9", padding: 16, whiteSpace: "pre-wrap", lineHeight: 1.6 }}>
        {agreementText}
      </pre>
    </div>
  );
  }
