import React from 'react';

const Marquee = () => {
  const items = [
    "FSSAI Certified", "No Preservatives", "Farm to Powder",
    "Export Quality", "24-Month Shelf Life", "B2B Bulk Supply",
    "NABL Lab Tested", "No Artificial Colours", "Clean Label",
    "Nitrogen-Flushed Packaging", "ISO 22000 Certified", "Direct Farm Sourcing"
  ];

  // Repeat twice for infinite scroll seamless transition
  const repeatedItems = [...items, ...items];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {repeatedItems.map((item, index) => (
          <div key={index} className="marquee-item">
            <span>{item}</span>
            <span className="marquee-dot"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
