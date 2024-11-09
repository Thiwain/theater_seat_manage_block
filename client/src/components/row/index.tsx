import {Seat} from "../seat";

interface RowProps {
    rowSeats: { seatId: string; activeStatus: boolean; selectedStatus: boolean }[];
    sectionName: string;
    toggleSeatSelection: (sectionName: string, seatId: string) => void;
}

export const Row = ({ rowSeats, sectionName, toggleSeatSelection }: RowProps) => {
    return (
        <div className="row">
            {rowSeats.map(seat => (
                <Seat
                    key={seat.seatId}
                    seat={seat}
                    sectionName={sectionName}
                    toggleSeatSelection={toggleSeatSelection}
                />
            ))}
        </div>
    );
};
