import React, { useState } from 'react';
import './CheckboxSection.css';

const CheckboxSection = () => {
  const [checkedItems, setCheckedItems] = useState(Array(8).fill(false));
  const [allChecked, setAllChecked] = useState(false);

  const handleAllChange = () => {
    const newAllChecked = !allChecked;
    setAllChecked(newAllChecked);
    setCheckedItems(Array(8).fill(newAllChecked));
  };

  const handleIndividualChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
    setAllChecked(newCheckedItems.every(item => item));
  };

  return (
    <div className="checkbox-section">
      <div className="checkbox-item">
        <input
          type="checkbox"
          checked={allChecked}
          onChange={handleAllChange}
        />
        <label>All pages</label>
      </div>
      {checkedItems.map((item, index) => (
        <div key={index} className="checkbox-item">
          <input
            type="checkbox"
            checked={item}
            onChange={() => handleIndividualChange(index)}
          />
          <label>All pages</label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxSection;
