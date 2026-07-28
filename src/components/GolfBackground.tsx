interface GolfBackgroundProps {
  color?: string;
  opacity?: number;
}

export default function GolfBackground({ color = '#1E8E3E', opacity = 0.08 }: GolfBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none" style={{ opacity }}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
        {/* Golf Ball - Top Left */}
        <g transform="translate(120, 80)">
          <circle cx="0" cy="0" r="45" fill="white" stroke={color} strokeWidth="3"/>
          <circle cx="-18" cy="-18" r="3" fill={color} fillOpacity="0.6"/>
          <circle cx="0" cy="-22" r="3" fill={color} fillOpacity="0.6"/>
          <circle cx="18" cy="-18" r="3" fill={color} fillOpacity="0.6"/>
          <circle cx="-22" cy="0" r="3" fill={color} fillOpacity="0.6"/>
          <circle cx="22" cy="0" r="3" fill={color} fillOpacity="0.6"/>
          <circle cx="-18" cy="18" r="3" fill={color} fillOpacity="0.6"/>
          <circle cx="0" cy="22" r="3" fill={color} fillOpacity="0.6"/>
          <circle cx="18" cy="18" r="3" fill={color} fillOpacity="0.6"/>
          <circle cx="0" cy="0" r="3" fill={color} fillOpacity="0.6"/>
        </g>

        {/* Golf Flag - Mid Left */}
        <g transform="translate(200, 400)">
          <line x1="0" y1="0" x2="0" y2="110" stroke={color} strokeWidth="5"/>
          <path d="M0 0 L55 22 L0 44 Z" fill={color}/>
          <circle cx="0" cy="110" r="7" fill={color}/>
        </g>

        {/* Golf Tee with Ball - Bottom Left */}
        <g transform="translate(150, 650)">
          <line x1="0" y1="60" x2="0" y2="130" stroke={color} strokeWidth="5"/>
          <path d="M-15 60 L15 60 L10 130 L-10 130 Z" fill={color}/>
          <circle cx="0" cy="25" r="32" fill="white" stroke={color} strokeWidth="3"/>
          <circle cx="-14" cy="18" r="2.5" fill={color} fillOpacity="0.6"/>
          <circle cx="0" cy="12" r="2.5" fill={color} fillOpacity="0.6"/>
          <circle cx="14" cy="18" r="2.5" fill={color} fillOpacity="0.6"/>
          <circle cx="0" cy="25" r="2.5" fill={color} fillOpacity="0.6"/>
        </g>

        {/* Golf Ball - Center Top */}
        <g transform="translate(700, 120)">
          <circle cx="0" cy="0" r="50" fill="white" stroke={color} strokeWidth="3"/>
          <circle cx="-20" cy="-20" r="3" fill={color} fillOpacity="0.6"/>
          <circle cx="0" cy="-25" r="3" fill={color} fillOpacity="0.6"/>
          <circle cx="20" cy="-20" r="3" fill={color} fillOpacity="0.6"/>
          <circle cx="-25" cy="0" r="3" fill={color} fillOpacity="0.6"/>
          <circle cx="25" cy="0" r="3" fill={color} fillOpacity="0.6"/>
          <circle cx="0" cy="0" r="3" fill={color} fillOpacity="0.6"/>
        </g>

        {/* Golf Ball - Center Bottom */}
        <g transform="translate(600, 620)">
          <circle cx="0" cy="0" r="52" fill="white" stroke={color} strokeWidth="3"/>
          <circle cx="-21" cy="-21" r="3" fill={color} fillOpacity="0.6"/>
          <circle cx="0" cy="-26" r="3" fill={color} fillOpacity="0.6"/>
          <circle cx="21" cy="-21" r="3" fill={color} fillOpacity="0.6"/>
          <circle cx="0" cy="0" r="3" fill={color} fillOpacity="0.6"/>
        </g>

        {/* Golf Ball - Top Right */}
        <g transform="translate(1180, 100)">
          <circle cx="0" cy="0" r="48" fill="white" stroke={color} strokeWidth="3"/>
          <circle cx="-19" cy="-19" r="3" fill={color} fillOpacity="0.6"/>
          <circle cx="0" cy="-24" r="3" fill={color} fillOpacity="0.6"/>
          <circle cx="19" cy="-19" r="3" fill={color} fillOpacity="0.6"/>
          <circle cx="0" cy="0" r="3" fill={color} fillOpacity="0.6"/>
        </g>

        {/* Golf Flag - Right Side */}
        <g transform="translate(1220, 450)">
          <line x1="0" y1="0" x2="0" y2="115" stroke={color} strokeWidth="5"/>
          <path d="M0 0 L58 24 L0 48 Z" fill={color}/>
          <circle cx="0" cy="115" r="8" fill={color}/>
        </g>

        {/* Golf Ball - Bottom Right */}
        <g transform="translate(1100, 680)">
          <circle cx="0" cy="0" r="55" fill="white" stroke={color} strokeWidth="3"/>
          <circle cx="-22" cy="-22" r="3" fill={color} fillOpacity="0.6"/>
          <circle cx="0" cy="-28" r="3" fill={color} fillOpacity="0.6"/>
          <circle cx="22" cy="-22" r="3" fill={color} fillOpacity="0.6"/>
          <circle cx="0" cy="0" r="3" fill={color} fillOpacity="0.6"/>
        </g>
      </svg>
    </div>
  );
}
