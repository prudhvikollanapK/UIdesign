import React, { useState } from 'react';
import './DropdownSection.css';

const DropdownSection = () => {
  const [checkedItems, setCheckedItems] = useState(Array(4).fill(false));
  const [allChecked, setAllChecked] = useState(false);

  const handleAllChange = () => {
    const newAllChecked = !allChecked;
    setAllChecked(newAllChecked);
    setCheckedItems(Array(4).fill(newAllChecked));
  };

  const handleIndividualChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
    setAllChecked(newCheckedItems.every(item => item));
  };

  return (
    <div className="dropdown-section">
      <div className="dropdown">
        <div className="checkbox-item">
          <input
            type="checkbox"
            checked={allChecked}
            onChange={handleAllChange}
          />
          <label>All pages</label>
        </div>
        {['Page 1', 'Page 2', 'Page 3', 'Page 4'].map((page, index) => (
          <div key={index} className="checkbox-item">
            <input
              type="checkbox"
              checked={checkedItems[index]}
              onChange={() => handleIndividualChange(index)}
            />
            <label>{page}</label>
          </div>
        ))}
        <button className="done-button">Done</button>
      </div>
    </div>
  );
};

export default DropdownSection;
