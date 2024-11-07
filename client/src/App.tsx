import './App.css';
function App() {
    const numberOfRows=3;
    const seatId = [
        { seatId: 'A1', activeStatus: true },
        { seatId: 'B1', activeStatus: true },
        { seatId: 'C1', activeStatus: true },
        { seatId: 'A2', activeStatus: false },
        { seatId: 'B2', activeStatus: true },
        { seatId: 'C2', activeStatus: true },
        { seatId: 'A3', activeStatus: true },
        { seatId: 'B3', activeStatus: true },
        { seatId: 'C3', activeStatus: false },
    ];
    const rows = [];
    for (let i = 0; i < seatId.length; i += numberOfRows) {
        rows.push(seatId.slice(i, i + numberOfRows));
    }
    return (
        <div align="center">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} style={{ marginBottom: '10px' }}>
                    {row.map((seat) => (
                        <span key={seat.seatId} style={{ margin: '5px' }}>
              <input
                  type="checkbox"
                  id={seat.seatId}
                  disabled={!seat.activeStatus}
              />
              <label htmlFor={seat.seatId}>{seat.seatId}</label>
            </span>
                    ))}
                </div>
            ))}
        </div>
    );
}
export default App;
