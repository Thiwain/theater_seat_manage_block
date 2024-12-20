import { useState } from 'react';
import './App.css';
import { mockSeatLayoutLCR, mockSeatLayoutBOX } from "./data";
import { Section } from "./components/section";

function App() {
    const [seatLayout, setSeatLayout] = useState<SectionLayout[]>([
        ...mockSeatLayoutLCR,
    ]);
    const [boxLayout, setBoxLayout] = useState<SectionLayout[]>([
        ...mockSeatLayoutBOX,
    ]);

    const toggleSeatSelection = (sectionName: string, seatId: string) => {
        setSeatLayout(prevLayout =>
            prevLayout.map(section => {
                if (section.section === sectionName) {
                    return {
                        ...section,
                        seats: section.seats.map(seat =>
                            seat.seatId === seatId
                                ? { ...seat, selectedStatus: !seat.selectedStatus }
                                : seat
                        ),
                    };
                }
                return section;
            })
        );

        setBoxLayout(prevLayout =>
            prevLayout.map(section => {
                if (section.section === sectionName) {
                    return {
                        ...section,
                        seats: section.seats.map(seat =>
                            seat.seatId === seatId
                                ? { ...seat, selectedStatus: !seat.selectedStatus }
                                : seat
                        ),
                    };
                }
                return section;
            })
        );
    };

    const getSelectedSeats = () => {
        const selectedSeats = [
            ...seatLayout.flatMap(section =>
                section.seats
                    .filter(seat => seat.selectedStatus)
                    .map(seat => seat.seatId)
            ),
            ...boxLayout.flatMap(section =>
                section.seats
                    .filter(seat => seat.selectedStatus)
                    .map(seat => seat.seatId)
            ),
        ];
        alert(`Selected Seats: ${selectedSeats.join(', ')}`);
    };

    return (
        <center>
            <div style={{
                height: '20px', width: '350px', backgroundColor: 'blue',
                borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}>
                <span>Screen</span>
            </div>
            <br/>

            <div className="seat-layout-container">
                {seatLayout.map(section => (
                    <Section
                        key={section.section}
                        section={section}
                        toggleSeatSelection={toggleSeatSelection}
                    />
                ))}
            </div>
            <br/>
            <div className="seat-layout-container">
                {boxLayout.map(section => (
                    <Section
                        key={section.section}
                        section={section}
                        toggleSeatSelection={toggleSeatSelection}
                    />
                ))}
            </div>

            <br/>
            <button onClick={getSelectedSeats}>Check</button>
        </center>
    );
}

export default App;
