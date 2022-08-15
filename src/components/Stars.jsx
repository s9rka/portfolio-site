import React from "react";

const n = 8;

export default function Tools() {
  return [...Array(n)].map((e, i) => <span className="star" key={i}><svg width="24" height="64" viewBox="0 0 576 576" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="288" cy="288" r="288" fill="#FFD952"/>
  <circle cx="288" cy="288" r="288" fill="url(#paint0_linear_212_150)" fill-opacity="0.2"/>
  <path d="M287.549 17.927C287.848 17.0057 289.152 17.0057 289.451 17.9271L349.68 203.293C349.814 203.705 350.198 203.984 350.631 203.984H545.536C546.505 203.984 546.908 205.223 546.124 205.793L388.442 320.355C388.092 320.61 387.945 321.061 388.079 321.473L448.308 506.839C448.608 507.76 447.553 508.527 446.769 507.957L289.088 393.395C288.737 393.14 288.263 393.14 287.912 393.395L130.231 507.957C129.447 508.527 128.392 507.76 128.692 506.839L188.921 321.473C189.055 321.061 188.908 320.61 188.558 320.355L30.8759 205.793C30.0922 205.223 30.495 203.984 31.4637 203.984H226.369C226.802 203.984 227.186 203.705 227.32 203.293L287.549 17.927Z" fill="#C11D1D"/>
  <defs>
  <linearGradient id="paint0_linear_212_150" x1="527.5" y1="264.5" x2="178" y2="154.5" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FFEBA5"/>
  <stop offset="1" stop-color="#FFD952"/>
  </linearGradient>
  </defs>
  </svg>
  </span>);
}