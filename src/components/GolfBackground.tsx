interface GolfBackgroundProps {
  color?: string;
  opacity?: number;
}

export default function GolfBackground({ color = '#1E8E3E', opacity = 0.13 }: GolfBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none" style={{ opacity }}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
        {/* Golf Ball - Far Top Left */}
        <g transform="translate(60, 50) scale(0.7)">
          <circle cx="0" cy="0" r="45" fill="white" stroke={color} strokeWidth="3"/>
          <circle cx="-18" cy="-18" r="3" fill={color}/>
          <circle cx="0" cy="-22" r="3" fill={color}/>
          <circle cx="18" cy="-18" r="3" fill={color}/>
          <circle cx="-22" cy="0" r="3" fill={color}/>
          <circle cx="22" cy="0" r="3" fill={color}/>
          <circle cx="0" cy="0" r="3" fill={color}/>
        </g>

        {/* Golf Flag - Top Left */}
        <g transform="translate(310, 40)">
          <line x1="0" y1="0" x2="0" y2="95" stroke={color} strokeWidth="5"/>
          <path d="M0 0 L50 20 L0 40 Z" fill={color}/>
          <circle cx="0" cy="95" r="6" fill={color}/>
        </g>

        {/* Golf Ball - Top Center Left */}
        <g transform="translate(480, 90) scale(0.85)">
          <circle cx="0" cy="0" r="48" fill="white" stroke={color} strokeWidth="3"/>
          <circle cx="-19" cy="-19" r="3" fill={color}/>
          <circle cx="0" cy="-24" r="3" fill={color}/>
          <circle cx="19" cy="-19" r="3" fill={color}/>
          <circle cx="0" cy="0" r="3" fill={color}/>
        </g>

        {/* Golf Club (iron) - Top Center */}
        <g transform="translate(680, 30) rotate(15)">
          <line x1="0" y1="0" x2="0" y2="120" stroke={color} strokeWidth="5"/>
          <path d="M-18 0 L18 0 L22 35 L14 50 L-14 50 L-22 35 Z" fill="none" stroke={color} strokeWidth="4"/>
          <line x1="0" y1="0" x2="0" y2="-8" stroke={color} strokeWidth="7"/>
        </g>

        {/* Golf Ball - Top Right */}
        <g transform="translate(980, 60) scale(0.75)">
          <circle cx="0" cy="0" r="45" fill="white" stroke={color} strokeWidth="3"/>
          <circle cx="-18" cy="-18" r="3" fill={color}/>
          <circle cx="0" cy="-22" r="3" fill={color}/>
          <circle cx="18" cy="-18" r="3" fill={color}/>
          <circle cx="0" cy="0" r="3" fill={color}/>
        </g>

        {/* Golf Flag - Top Right */}
        <g transform="translate(1180, 30)">
          <line x1="0" y1="0" x2="0" y2="100" stroke={color} strokeWidth="5"/>
          <path d="M0 0 L55 22 L0 44 Z" fill={color}/>
          <circle cx="0" cy="100" r="7" fill={color}/>
        </g>

        {/* Golf Hole/Cup - Mid Left */}
        <g transform="translate(90, 360)">
          <ellipse cx="0" cy="0" rx="30" ry="10" fill="none" stroke={color} strokeWidth="4"/>
          <ellipse cx="0" cy="-3" rx="28" ry="8" fill={color} fillOpacity="0.15"/>
          <line x1="0" y1="-10" x2="0" y2="-80" stroke={color} strokeWidth="5"/>
          <path d="M0 -80 L48 -60 L0 -40 Z" fill={color}/>
        </g>

        {/* Golf Ball - Mid Left Center */}
        <g transform="translate(380, 320) scale(0.9)">
          <circle cx="0" cy="0" r="50" fill="white" stroke={color} strokeWidth="3"/>
          <circle cx="-20" cy="-20" r="3" fill={color}/>
          <circle cx="0" cy="-25" r="3" fill={color}/>
          <circle cx="20" cy="-20" r="3" fill={color}/>
          <circle cx="-25" cy="0" r="3" fill={color}/>
          <circle cx="25" cy="0" r="3" fill={color}/>
          <circle cx="0" cy="0" r="3" fill={color}/>
        </g>

        {/* Golf Tee with Ball - Mid Center */}
        <g transform="translate(620, 380)">
          <line x1="0" y1="40" x2="0" y2="95" stroke={color} strokeWidth="5"/>
          <path d="M-12 40 L12 40 L8 95 L-8 95 Z" fill={color}/>
          <circle cx="0" cy="15" r="28" fill="white" stroke={color} strokeWidth="3"/>
          <circle cx="-12" cy="8" r="2.5" fill={color}/>
          <circle cx="0" cy="2" r="2.5" fill={color}/>
          <circle cx="12" cy="8" r="2.5" fill={color}/>
          <circle cx="0" cy="15" r="2.5" fill={color}/>
        </g>

        {/* Golf Club (putter) - Mid Right */}
        <g transform="translate(900, 300) rotate(-10)">
          <line x1="0" y1="0" x2="0" y2="130" stroke={color} strokeWidth="5"/>
          <path d="M-22 0 L22 0 L26 18 L18 26 L-18 26 L-26 18 Z" fill="none" stroke={color} strokeWidth="4"/>
          <line x1="0" y1="0" x2="0" y2="-8" stroke={color} strokeWidth="7"/>
        </g>

        {/* Golf Ball - Mid Right */}
        <g transform="translate(1120, 380) scale(0.8)">
          <circle cx="0" cy="0" r="48" fill="white" stroke={color} strokeWidth="3"/>
          <circle cx="-19" cy="-19" r="3" fill={color}/>
          <circle cx="0" cy="-24" r="3" fill={color}/>
          <circle cx="19" cy="-19" r="3" fill={color}/>
          <circle cx="0" cy="0" r="3" fill={color}/>
        </g>

        {/* Golf Ball - Bottom Left */}
        <g transform="translate(140, 640) scale(0.9)">
          <circle cx="0" cy="0" r="52" fill="white" stroke={color} strokeWidth="3"/>
          <circle cx="-21" cy="-21" r="3" fill={color}/>
          <circle cx="0" cy="-26" r="3" fill={color}/>
          <circle cx="21" cy="-21" r="3" fill={color}/>
          <circle cx="0" cy="0" r="3" fill={color}/>
        </g>

        {/* Golf Flag - Bottom Left Center */}
        <g transform="translate(360, 560)">
          <line x1="0" y1="0" x2="0" y2="105" stroke={color} strokeWidth="5"/>
          <path d="M0 0 L52 21 L0 42 Z" fill={color}/>
          <circle cx="0" cy="105" r="7" fill={color}/>
        </g>

        {/* Golf Ball - Bottom Center */}
        <g transform="translate(580, 680) scale(1.1)">
          <circle cx="0" cy="0" r="50" fill="white" stroke={color} strokeWidth="3"/>
          <circle cx="-20" cy="-20" r="3" fill={color}/>
          <circle cx="0" cy="-25" r="3" fill={color}/>
          <circle cx="20" cy="-20" r="3" fill={color}/>
          <circle cx="-25" cy="0" r="3" fill={color}/>
          <circle cx="25" cy="0" r="3" fill={color}/>
          <circle cx="0" cy="0" r="3" fill={color}/>
        </g>

        {/* Golf Tee with Ball - Bottom Right Center */}
        <g transform="translate(820, 620) scale(0.85)">
          <line x1="0" y1="40" x2="0" y2="95" stroke={color} strokeWidth="5"/>
          <path d="M-12 40 L12 40 L8 95 L-8 95 Z" fill={color}/>
          <circle cx="0" cy="15" r="28" fill="white" stroke={color} strokeWidth="3"/>
          <circle cx="-12" cy="8" r="2.5" fill={color}/>
          <circle cx="0" cy="2" r="2.5" fill={color}/>
          <circle cx="12" cy="8" r="2.5" fill={color}/>
          <circle cx="0" cy="15" r="2.5" fill={color}/>
        </g>

        {/* Golf Ball - Bottom Right */}
        <g transform="translate(1080, 700) scale(0.95)">
          <circle cx="0" cy="0" r="55" fill="white" stroke={color} strokeWidth="3"/>
          <circle cx="-22" cy="-22" r="3" fill={color}/>
          <circle cx="0" cy="-28" r="3" fill={color}/>
          <circle cx="22" cy="-22" r="3" fill={color}/>
          <circle cx="0" cy="0" r="3" fill={color}/>
        </g>

        {/* Golf Hole/Cup - Far Bottom Right */}
        <g transform="translate(1280, 580) scale(0.8)">
          <ellipse cx="0" cy="0" rx="30" ry="10" fill="none" stroke={color} strokeWidth="4"/>
          <ellipse cx="0" cy="-3" rx="28" ry="8" fill={color} fillOpacity="0.15"/>
          <line x1="0" y1="-10" x2="0" y2="-75" stroke={color} strokeWidth="5"/>
          <path d="M0 -75 L46 -55 L0 -38 Z" fill={color}/>
        </g>
      </svg>
    </div>
  );
}
