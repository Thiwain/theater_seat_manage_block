import {SectionLayout} from "../../App.tsx";
import {Row} from "../row";

interface SectionProps {
    section: SectionLayout;
    toggleSeatSelection: (sectionName: string, seatId: string) => void;
}

export const Section = ({ section, toggleSeatSelection }: SectionProps) => {
    return (
        <div>
            <h3>{section.section} Section</h3>
            {Array.from({ length: section.rows }).map((_, rowIndex) => (
                <Row
                    key={rowIndex}
                    rowSeats={section.seats.slice(
                        rowIndex * section.seatsPerRow,
                        (rowIndex + 1) * section.seatsPerRow
                    )}
                    sectionName={section.section}
                    toggleSeatSelection={toggleSeatSelection}
                />
            ))}
        </div>
    );
};
