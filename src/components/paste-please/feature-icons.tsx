import { cn } from "@/lib/utils";

type PasteFeatureIconProps = {
  name: "menuBar" | "preview" | "search" | "private";
  className?: string;
};

const ICON_CLASS = "h-12 w-12";

function MenuBarIcon({ className, fill }: { className?: string; fill: string }) {
  return (
    <svg
      viewBox="0 0 234 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <g clipPath="url(#pp-menu-bar-clip)">
        <path
          d="M10.4492 32.9102V46.6797H219.824V32.9102H10.4492ZM41.2109 179.785H191.504C216.113 179.785 230.273 164.941 230.273 138.574V41.3086C230.273 14.9414 216.113 0 191.504 0H41.2109C14.9414 0 0 14.9414 0 41.3086V138.574C0 164.941 14.9414 179.785 41.2109 179.785ZM41.3086 164.062C25.0977 164.062 15.7227 154.785 15.7227 138.574V41.3086C15.7227 25.0977 25.0977 15.7227 41.3086 15.7227H188.965C205.176 15.7227 214.551 25.0977 214.551 41.3086V138.574C214.551 154.785 205.176 164.062 188.965 164.062H41.3086Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="pp-menu-bar-clip">
          <rect width="233.887" height="179.785" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function PreviewIcon({ className, fill }: { className?: string; fill: string }) {
  return (
    <svg
      viewBox="0 0 189 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M183 47 L178 37 L171 27 L162 18 L154 12 L143 6 L138 5 L135 3 L120 0 L106 0 L86 5 L69 15 L56 28 L33 29 L23 33 L13 41 L8 50 L8 55 L11 59 L16 59 L20 55 L22 50 L29 43 L40 39 L47 39 L48 40 L42 55 L40 64 L40 72 L20 77 L13 81 L6 89 L3 98 L3 105 L5 113 L8 119 L14 125 L21 129 L28 131 L43 131 L50 129 L57 125 L60 125 L68 133 L77 139 L87 144 L101 148 L119 149 L141 144 L151 139 L162 131 L170 123 L180 108 L185 96 L188 81 L187 61 Z M118 121 L119 122 L119 136 L118 137 L104 137 L103 136 L113 127 L115 123 Z M20 91 L29 85 L39 83 L41 87 L41 91 L44 101 L53 117 L47 120 L33 120 L25 117 L18 110 L16 103 L17 97 Z M117 80 L118 81 L118 97 L117 98 L117 103 L113 112 L109 117 L102 123 L89 129 L83 130 L73 123 L63 112 L59 106 L54 95 L54 92 L57 89 L64 85 L71 83 L87 82 L88 81 L102 81 L103 80 Z M51 75 L52 61 L57 46 L65 34 L71 28 L78 26 L94 26 L95 27 L98 27 L105 30 L109 33 L114 39 L116 43 L117 51 L118 52 L118 66 L117 67 L114 67 L113 68 L97 68 L96 69 L70 70 L69 71 L61 72 L52 76 Z M103 12 L112 12 L113 11 L116 12 L125 12 L126 13 L136 15 L146 20 L152 24 L163 35 L169 44 L174 56 L174 59 L176 64 L177 77 L176 78 L176 86 L175 87 L174 94 L170 102 L170 104 L164 113 L153 124 L144 130 L135 134 L134 133 L134 47 L133 46 L132 38 L127 29 L119 21 L112 17 L103 14 L102 13 Z"
        fill={fill}
      />
    </svg>
  );
}

function SearchIcon({ className, fill }: { className?: string; fill: string }) {
  return (
    <svg
      viewBox="0 0 151 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 16 L8 30 L3 41 L1 48 L1 53 L0 54 L0 67 L1 68 L2 77 L7 89 L13 98 L22 107 L31 113 L40 117 L47 119 L51 119 L52 120 L69 120 L83 116 L96 109 L132 146 L138 149 L143 148 L147 143 L147 138 L146 136 L108 98 L108 96 L112 90 L118 76 L119 65 L120 64 L120 53 L119 52 L119 47 L117 40 L111 28 L105 20 L90 8 L82 4 L72 1 L67 1 L66 0 L54 0 L53 1 L47 1 L43 3 L40 3 L28 9 Z M54 12 L67 12 L68 13 L72 13 L78 15 L90 22 L97 29 L102 36 L106 45 L106 48 L108 53 L108 68 L104 81 L99 89 L86 101 L76 106 L69 108 L51 108 L41 105 L31 99 L22 90 L15 78 L13 72 L13 68 L12 67 L12 53 L13 52 L13 48 L15 42 L22 30 L29 23 L36 18 L45 14 L53 13 Z"
        fill={fill}
      />
    </svg>
  );
}

function PrivateIcon({ className, fill }: { className?: string; fill: string }) {
  return (
    <svg
      viewBox="0 0 137 197"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <g clipPath="url(#pp-private-clip)">
        <path
          d="M21.9727 191.504H111.328C125.684 191.504 133.301 183.691 133.301 168.262V100.977C133.301 85.6445 125.684 77.832 111.328 77.832H21.9727C7.61719 77.832 0 85.6445 0 100.977V168.262C0 183.691 7.61719 191.504 21.9727 191.504ZM22.4609 176.758C18.2617 176.758 15.8203 174.121 15.8203 169.336V99.9023C15.8203 95.1172 18.2617 92.5781 22.4609 92.5781H110.84C115.137 92.5781 117.48 95.1172 117.48 99.9023V169.336C117.48 174.121 115.137 176.758 110.84 176.758H22.4609ZM17.0898 85.3516H32.6172V52.4414C32.6172 27.7344 48.3398 14.7461 66.6016 14.7461C84.8633 14.7461 100.781 27.7344 100.781 52.4414V85.3516H116.211V54.4922C116.211 17.7734 92.1875 0 66.6016 0C41.1133 0 17.0898 17.7734 17.0898 54.4922V85.3516Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="pp-private-clip">
          <rect width="136.914" height="196.582" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function PasteFeatureIcon({ name, className = ICON_CLASS }: PasteFeatureIconProps) {
  const iconClass = cn(className);

  const icons = {
    menuBar: MenuBarIcon,
    preview: PreviewIcon,
    search: SearchIcon,
    private: PrivateIcon,
  } as const;

  const Icon = icons[name];

  return (
    <>
      <Icon className={cn(iconClass, "dark:hidden")} fill="#9d4050" />
      <Icon className={cn(iconClass, "hidden dark:block")} fill="#e8a4b0" />
    </>
  );
}
