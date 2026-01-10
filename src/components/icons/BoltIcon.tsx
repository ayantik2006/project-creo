import boltImage from "@/assets/images/Bolt.png";

interface BoltIconProps {
    className?: string;
    flipped?: boolean;
    style?: React.CSSProperties;
}

export function BoltIcon({ className = "", flipped = false, style }: BoltIconProps) {
    return (
        <img
            src={boltImage}
            alt="Bolt"
            className={className}
            style={{
                ...style,
                transform: flipped ? "scaleX(-1)" : undefined,
            }}
        />
    );
}

