import React from 'react';

// 1. Email (Material Design MdEmail)
export const MdEmail = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
  </svg>
);

// 2. Place (Material Design MdPlace)
export const MdPlace = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
  </svg>
);

// 3. Github (Standard Octocat)
export const MdGithub = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.23.694.825.576 4.765-1.583 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
  </svg>
);

// 4. LinkedIn (Standard Logo)
export const MdLinkedIn = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
  </svg>
);

// 5. React Logo
export const MdReact = (props) => (
  <svg stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"></ellipse>
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"></ellipse>
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)"></ellipse>
    <circle cx="12" cy="12" r="1.5" fill="currentColor"></circle>
  </svg>
);

// 6. HTML5 Logo
export const MdHtml = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm17.382 7.734H7.906l-.25-2.734h10.375l.25-2.734H4.656l.75 8.203h10.422l-.359 3.969L12 15.547l-3.469-1.109-.219-2.438H5.578l.422 4.703L12 18.844l6-2.125.882-9.016z"></path>
  </svg>
);

// 7. CSS3 Logo
export const MdCss = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm17.031 5H5l.281 3.094h10.656l-.375 4.125L12 13.563 8.438 12.5l-.219-2.5H5.125l.438 5 6.437 2.188 6.438-2.188L19.062 5h-.531z"></path>
  </svg>
);

// 8. JS Logo
export const MdJs = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 0h24v24H0V0zm20.25 14.5c0-1.85-1.25-2.8-3.25-3.35l-.75-.2c-.75-.2-1-.45-1-.8 0-.4.35-.65.95-.65.6 0 .95.2 1.15.65h2.15c-.25-1.5-1.45-2.45-3.3-2.45-2.05 0-3.3 1.1-3.3 2.75 0 1.7 1.1 2.5 3.05 3l.8.2c.9.25 1.15.55 1.15.95 0 .5-.45.75-1.15.75-.85 0-1.3-.35-1.55-1H11.5c.25 1.75 1.5 2.7 3.55 2.7 2.25 0 3.75-1.15 3.75-3.15zM8.5 7.75H6V16c0 1.5.85 2.25 2.25 2.25.75 0 1.25-.15 1.5-.3v-2.1c-.2.1-.4.15-.65.15-.55 0-.75-.25-.75-.75V7.75z"></path>
  </svg>
);

// 9. Git Logo
export const MdGit = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M23.2 10.8L13.2.8c-.8-.8-2-.8-2.8 0L8.6 2.6l3.2 3.2c.7-.2 1.5-.1 2.1.4.6.6.8 1.4.5 2.1l3.2 3.2c.7-.3 1.5-.1 2.1.5.8.8.8 2 0 2.8s-2 .8-2.8 0c-.5-.5-.7-1.3-.5-2.1L13.1 9.4c-.2.1-.4.2-.6.2-.2 0-.4-.1-.6-.2l-2.6 2.6c.1.2.2.4.2.6 0 .8-.5 1.5-1.2 1.8v5.6c.7.3 1.2 1 1.2 1.8 0 1.1-.9 2-2 2s-2-.9-2-2c0-.8.5-1.5 1.2-1.8V13.8c-.7-.3-1.2-1-1.2-1.8 0-.8.5-1.5 1.2-1.8L9.8 7c-.2-.7 0-1.5.5-2.1L7.1 1.7 1.7 7.1c-.8.8-.8 2 0 2.8l10 10c.8.8 2 .8 2.8 0l8.7-8.7c.8-.7.8-2 0-2.8z"></path>
  </svg>
);

// 10. API Logo (REST API)
export const MdApi = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9C6.48 3 2 7.48 2 13s4.48 10 10 10 10-4.48 10-10S17.52 3 12 3zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4-9c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4z"></path>
  </svg>
);

// 11. Redux Logo
export const MdRedux = (props) => (
  <svg stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
  </svg>
);

// 12. Tailwind CSS Logo
export const MdTailwind = (props) => (
  <svg stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"></path>
  </svg>
);

// 13. Testing (MdBugReport)
export const MdTesting = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path>
  </svg>
);

// 14. Vite (MdOutlineFlashOn / Bolt)
export const MdVite = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M7 2v11h3v9l7-12h-4l4-8z"></path>
  </svg>
);

// 15. Router (MdAltRoute)
export const MdRoute = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M19 15c-1.66 0-3 1.34-3 3 0 .43.09.83.26 1.2L12 16.36l-4.26 2.84c.17-.37.26-.77.26-1.2 0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3c.67 0 1.28-.22 1.78-.6L12 21l5.22-3.48c.5.38 1.11.6 1.78.6 1.66 0 3-1.34 3-3s-1.34-3-3-3zM5 19c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm14 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM9 5h6v2H9z"></path>
  </svg>
);

// 16. Devices (MdDevices)
export const MdDevices = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path>
  </svg>
);

// 17. TanStack Query / Sync
export const MdQuery = (props) => (
  <svg stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3 3 6-6"></path>
  </svg>
);

// 18. Lock / Auth
export const MdLock = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path>
  </svg>
);

// 19. Server / Database
export const MdServer = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M20 13H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm-1 5H5v-2h14v2zm1-15H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 5H5V5h14v2z"></path>
  </svg>
);

// 20. Robot / AI (MdSmartToy)
export const MdBot = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 10H6V7h12v12zm-9-6c-.83 0-1.5-.67-1.5-1.5S8.17 10 9 10s1.5.67 1.5 1.5S9.83 13 9 13zm6 0c-.83 0-1.5-.67-1.5-1.5S14.17 10 15 10s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-6 3h6v2H9v-2z"></path>
  </svg>
);

// 21. Database (MdDatabase / Storage)
export const MdDatabase = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M12 2C6.48 2 2 4.02 2 6.5v11c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm0 18c-4.41 0-8-1.57-8-3.5V15c1.86 1.25 4.77 2 8 2s6.14-.75 8-2v1.5c0 1.93-3.59 3.5-8 3.5zm0-4.5c-4.41 0-8-1.57-8-3.5V10c1.86 1.25 4.77 2 8 2s6.14-.75 8-2v2.5c0 1.93-3.59 3.5-8 3.5zm0-4.5c-4.41 0-8-1.57-8-3.5S7.59 4 12 4s8 1.57 8 3.5S16.41 11 12 11z"></path>
  </svg>
);

// 22. Cloud (MdCloud)
export const MdCloud = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95A5.469 5.469 0 0112 6c2.63 0 4.89 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"></path>
  </svg>
);

// 23. Build / Wrench (MdBuild)
export const MdBuild = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.3C.5 6.7.9 9.8 2.9 11.8c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.6z"></path>
  </svg>
);

// 24. Link / API (MdLink)
export const MdLink = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
  </svg>
);

// 25. Checklist / Quality (MdAssignmentTurnedIn)
export const MdClipboard = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
  </svg>
);

// 26. School / Education / Learning (MdSchool)
export const MdSchool = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91v6.27h2V9L12 3z"></path>
  </svg>
);

// 27. Work / Briefcase (MdWork)
export const MdWork = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
  </svg>
);

// 28. Phone / Call (MdPhone)
export const MdPhone = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M20.01 15.38c-1.23 0-2.42-.19-3.53-.56-.35-.12-.74-.03-1.01.24l-2.42 2.42c-3.41-1.74-6.19-4.52-7.92-7.92l2.42-2.42c.27-.27.35-.66.24-1.01-.37-1.11-.56-2.3-.56-3.53 0-.55-.45-1-1-1H3.66c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.63c0-.55-.45-1-1-1z"></path>
  </svg>
);
