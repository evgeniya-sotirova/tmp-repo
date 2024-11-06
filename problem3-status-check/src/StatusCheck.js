import React, { useState } from 'react';

const StatusCheck = () => {
    const [item1, setItem1] = useState(true);
    const [item2, setItem2] = useState(true);
    const [item3, setItem3] = useState(true);
    const [item4, setItem4] = useState(true);
    return (
        <div>
            <ul style={{listStyleType: "none"}}>
                <li>
                    <input type="checkbox" checked={item1} onChange={(e) => {setItem1(e.target.checked)}} />
                    <span style={{ backgroundColor: (item1 ? "" : "red") }}>Item 1</span>
                </li>
                <li>
                    <input type="checkbox" checked={item2} onChange={(e) => {setItem2(e.target.checked)}} />
                    <span style={{ backgroundColor: ((item1 && item2) ? "" : "red") }}>Item 2</span>
                </li>
                <li>
                    <input type="checkbox" checked={item3} onChange={(e) => {setItem3(e.target.checked)}} />
                    <span style={{ backgroundColor: (item3 ? "" : "red") }}>Item 3</span>
                </li>
                <li>
                    <input type="checkbox" checked={item4} onChange={(e) => {setItem4(e.target.checked)}} />
                    <span style={{ backgroundColor: ((item1 && item2 && item3 && item4) ? "" : "red") }}>Item 4</span>
                </li>
            </ul>
        </div>
    );
}

export default StatusCheck;

