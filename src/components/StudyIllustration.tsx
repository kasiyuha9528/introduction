const ink = "#3a2414";
const skin = "#ffe0c2";

type Props = {
  className?: string;
};

/** ノートパソコンでプログラミングを勉強している人のイラスト */
export function StudyIllustration({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label="ノートパソコンでプログラミングを勉強している人のイラスト"
      className={className}
    >
      {/* 背景のまる（ずらした影つき） */}
      <circle cx="210" cy="210" r="172" fill={ink} />
      <circle cx="200" cy="200" r="172" fill="#ff8a1f" stroke={ink} strokeWidth="6" />

      {/* 体 */}
      <path
        d="M128 330 Q132 268 165 258 Q200 248 235 258 Q268 268 272 330 Z"
        fill="#3cc8a8"
        stroke={ink}
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* 顔 */}
      <circle cx="200" cy="200" r="48" fill={skin} stroke={ink} strokeWidth="6" />
      {/* 髪 */}
      <path
        d="M152 202 Q146 146 200 144 Q254 146 248 202 Q240 174 214 170 Q196 180 172 170 Q160 182 152 202 Z"
        fill={ink}
        stroke={ink}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* メガネ */}
      <circle cx="183" cy="208" r="13" fill="#ffffff" fillOpacity="0.5" stroke={ink} strokeWidth="4" />
      <circle cx="217" cy="208" r="13" fill="#ffffff" fillOpacity="0.5" stroke={ink} strokeWidth="4" />
      <path d="M196 208 H204" stroke={ink} strokeWidth="4" />
      {/* 目 */}
      <circle cx="184" cy="210" r="4" fill={ink} />
      <circle cx="216" cy="210" r="4" fill={ink} />
      {/* ほっぺ */}
      <ellipse cx="168" cy="228" rx="8" ry="5" fill="#ff9e9e" />
      <ellipse cx="232" cy="228" rx="8" ry="5" fill="#ff9e9e" />
      {/* 口 */}
      <path d="M192 231 Q200 239 208 231" fill="none" stroke={ink} strokeWidth="4" strokeLinecap="round" />

      {/* ノートパソコン（裏側） */}
      <rect x="132" y="262" width="136" height="62" rx="10" fill="#fff1dc" stroke={ink} strokeWidth="6" />
      <text
        x="200"
        y="301"
        textAnchor="middle"
        fontFamily="ui-monospace, monospace"
        fontSize="22"
        fontWeight="700"
        fill="#c25400"
      >
        {"</>"}
      </text>
      {/* 手 */}
      <circle cx="138" cy="312" r="12" fill={skin} stroke={ink} strokeWidth="5" />
      <circle cx="262" cy="312" r="12" fill={skin} stroke={ink} strokeWidth="5" />

      {/* 机 */}
      <rect x="58" y="320" width="284" height="22" rx="8" fill="#ffc83d" stroke={ink} strokeWidth="6" />

      {/* マグカップ */}
      <path d="M84 290 H110 V314 Q110 320 104 320 H90 Q84 320 84 314 Z" fill="#ffffff" stroke={ink} strokeWidth="5" strokeLinejoin="round" />
      <path d="M110 296 Q122 296 122 304 Q122 312 110 312" fill="none" stroke={ink} strokeWidth="5" />
      <path d="M92 282 Q88 274 94 268 M102 282 Q98 274 104 268" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" />

      {/* 本 */}
      <g stroke={ink} strokeWidth="4" fontFamily="ui-monospace, monospace" fontSize="9" fontWeight="700" textAnchor="middle">
        <rect x="282" y="304" width="58" height="14" rx="3" fill="#ffffff" />
        <text x="311" y="314" fill={ink} stroke="none">HTML</text>
        <rect x="288" y="290" width="50" height="14" rx="3" fill="#3cc8a8" />
        <text x="313" y="300" fill={ink} stroke="none">CSS</text>
        <rect x="284" y="276" width="46" height="14" rx="3" fill="#ffc83d" />
        <text x="307" y="286" fill={ink} stroke="none">JS</text>
      </g>

      {/* コードの吹き出し */}
      <g className="animate-float">
        <path
          d="M52 70 H148 Q160 70 160 82 V114 Q160 126 148 126 H112 L98 142 L100 126 H52 Q40 126 40 114 V82 Q40 70 52 70 Z"
          fill="#ffffff"
          stroke={ink}
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <text x="100" y="106" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="20" fontWeight="700" fill={ink}>
          Hello!
        </text>
      </g>

      {/* はてなマーク */}
      <g className="animate-float [animation-delay:-1.5s]">
        <circle cx="318" cy="96" r="30" fill="#ffc83d" stroke={ink} strokeWidth="5" />
        <text x="318" y="110" textAnchor="middle" fontSize="38" fontWeight="900" fill={ink}>
          ?
        </text>
      </g>

      {/* キラキラ */}
      <path d="M262 46 L267 58 L279 63 L267 68 L262 80 L257 68 L245 63 L257 58 Z" fill="#ffffff" stroke={ink} strokeWidth="3" strokeLinejoin="round" />
      <path d="M60 196 L64 205 L73 209 L64 213 L60 222 L56 213 L47 209 L56 205 Z" fill="#ffc83d" stroke={ink} strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}
