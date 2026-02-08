interface WaveDividerProps {
    color?: string;
    flip?: boolean;
    className?: string;
}

export default function WaveDivider({
    color = "#DC143C",
    flip = false,
    className = ""
}: WaveDividerProps) {
    return (
        <div className={`w-full ${className}`} style={{ transform: flip ? 'scaleY(-1)' : 'none' }}>
            <svg
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="w-full h-[90px] md:h-[120px]"
            >
                <path
                    d="M0,60 C300,120 600,40 900,90 C1200,140 1200,90 1200,110 L1200,120 L0,120 Z"
                    fill={color}
                />
            </svg>
        </div>
    );
}
