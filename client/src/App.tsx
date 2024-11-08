import { useState } from 'react';
import './App.css';

function App() {
    const numberOfRows = 3;
    const [seatId, setSeatId] = useState([
        { seatId: 'A1', activeStatus: true, selectedStatus: false },
        { seatId: 'B1', activeStatus: true, selectedStatus: false },
        { seatId: 'C1', activeStatus: true, selectedStatus: false },
        { seatId: 'A2', activeStatus: false, selectedStatus: false },
        { seatId: 'B2', activeStatus: true, selectedStatus: false },
        { seatId: 'C2', activeStatus: true, selectedStatus: false },
        { seatId: 'A3', activeStatus: true, selectedStatus: false },
        { seatId: 'B3', activeStatus: true, selectedStatus: false },
        { seatId: 'C3', activeStatus: false, selectedStatus: false },
    ]);

    const rows = [];
    for (let i = 0; i < seatId.length; i += numberOfRows) {
        rows.push(seatId.slice(i, i + numberOfRows));
    }

    const handleCheckboxClick = (index: number) => {
        const updatedSeats = seatId.map((seat, i) =>
            i === index ? { ...seat, selectedStatus: !seat.selectedStatus } : seat
        );
        setSeatId(updatedSeats);
    };

    const handleCheckButtonClick = () => {
        const selectedSeats = seatId.filter(seat => seat.selectedStatus).map(seat => seat.seatId);
        console.log("Selected Seats:", selectedSeats);
        alert("Selected Seats: "+selectedSeats);
    };

    return (
        <center>
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} style={{ marginBottom: '10px' }}>
                    {row.map((seat, index) => (
                        <span key={seat.seatId} style={{ margin: '5px' }}>
              <input
                  type="checkbox"
                  id={seat.seatId}
                  disabled={!seat.activeStatus}
                  checked={seat.selectedStatus}
                  onChange={() => handleCheckboxClick(rowIndex * numberOfRows + index)}
              />
              <label htmlFor={seat.seatId}>{seat.seatId}</label>
            </span>
                    ))}
                </div>
            ))}
            <br />
            <button onClick={handleCheckButtonClick}>Check</button>
        </center>
    );
}

export default App;
