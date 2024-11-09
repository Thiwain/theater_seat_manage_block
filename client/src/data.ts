export const mockSeatLayoutLCR = [
    {
        section: 'L',
        rows: 3,
        seatsPerRow: 3,
        seats: [
            { seatId: 'LA1', activeStatus: true, selectedStatus: false },
            { seatId: 'LB1', activeStatus: true, selectedStatus: false },
            { seatId: 'LC1', activeStatus: true, selectedStatus: false },
            { seatId: 'LA2', activeStatus: false, selectedStatus: false },
            { seatId: 'LB2', activeStatus: true, selectedStatus: false },
            { seatId: 'LC2', activeStatus: true, selectedStatus: false },
            { seatId: 'LA3', activeStatus: true, selectedStatus: false },
            { seatId: 'LB3', activeStatus: true, selectedStatus: false },
            { seatId: 'LC3', activeStatus: false, selectedStatus: false },
        ],
        sectionBrake:false
    },
    {
        section: 'C',
        rows: 4,
        seatsPerRow: 3,
        seats: [
            { seatId: 'CA1', activeStatus: true, selectedStatus: false },
            { seatId: 'CB1', activeStatus: true, selectedStatus: false },
            { seatId: 'CC1', activeStatus: true, selectedStatus: false },
            { seatId: 'CA2', activeStatus: false, selectedStatus: false },
            { seatId: 'CB2', activeStatus: true, selectedStatus: false },
            { seatId: 'CC2', activeStatus: true, selectedStatus: false },
            { seatId: 'CA3', activeStatus: true, selectedStatus: false },
            { seatId: 'CB3', activeStatus: true, selectedStatus: false },
            { seatId: 'CC3', activeStatus: false, selectedStatus: false },
            { seatId: 'CA4', activeStatus: true, selectedStatus: false },
            { seatId: 'CB4', activeStatus: true, selectedStatus: false },
            { seatId: 'CC4', activeStatus: false, selectedStatus: false },
        ],
        sectionBrake:false
    },
    {
        section: 'R',
        rows: 3,
        seatsPerRow: 3,
        seats: [
            { seatId: 'RA1', activeStatus: true, selectedStatus: false },
            { seatId: 'RB1', activeStatus: true, selectedStatus: false },
            { seatId: 'RC1', activeStatus: true, selectedStatus: false },
            { seatId: 'RA2', activeStatus: false, selectedStatus: false },
            { seatId: 'RB2', activeStatus: true, selectedStatus: false },
            { seatId: 'RC2', activeStatus: true, selectedStatus: false },
            { seatId: 'RA3', activeStatus: true, selectedStatus: false },
            { seatId: 'RB3', activeStatus: true, selectedStatus: false },
            { seatId: 'RC3', activeStatus: false, selectedStatus: false },
        ],
        sectionBrake:false
    },
];

export const mockSeatLayoutBOX=[
    {
    section: 'BOX',
    rows: 2,
    seatsPerRow: 6,
    seats: [
        { seatId: 'BOXA1', activeStatus: true, selectedStatus: false },
        { seatId: 'BOXB1', activeStatus: true, selectedStatus: false },
        { seatId: 'BOXC1', activeStatus: true, selectedStatus: false },
        { seatId: 'BOXD1', activeStatus: false, selectedStatus: false },
        { seatId: 'BOXE1', activeStatus: true, selectedStatus: false },
        { seatId: 'BOXF1', activeStatus: true, selectedStatus: false },
        { seatId: 'BOXA2', activeStatus: true, selectedStatus: false },
        { seatId: 'BOXB2', activeStatus: true, selectedStatus: false },
        { seatId: 'BOXC2', activeStatus: true, selectedStatus: false },
        { seatId: 'BOXD2', activeStatus: false, selectedStatus: false },
        { seatId: 'BOXE2', activeStatus: true, selectedStatus: false },
        { seatId: 'BOXF2', activeStatus: true, selectedStatus: false },
    ],
        sectionBrake:true
    },
];
