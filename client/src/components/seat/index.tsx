interface SeatProps {
    seat: { seatId: string; activeStatus: boolean; selectedStatus: boolean };
    sectionName: string;
    toggleSeatSelection: (sectionName: string, seatId: string) => void;
}

export const Seat = ({ seat, sectionName, toggleSeatSelection }: SeatProps) => {
    return (
        <span style={{ margin: '5px' }}>
            <input
                type="checkbox"
                id={seat.seatId}
                disabled={!seat.activeStatus}
                checked={seat.selectedStatus}
                onChange={() => toggleSeatSelection(sectionName, seat.seatId)}
            />
            <label htmlFor={seat.seatId}>{seat.seatId}</label>
        </span>
    );
};
