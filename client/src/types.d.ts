type Seat = {
    seatId: string;
    activeStatus: boolean;
    selectedStatus: boolean;
};


type SectionLayout = {
    section: string;
    rows: number;
    seatsPerRow: number;
    seats: Seat[];
};