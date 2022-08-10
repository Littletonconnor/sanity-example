import { useState } from "react";

export interface Props {
  callToAction: any;
  style: string;
  text: string;
  title: string;
}

function Banner(props: Props) {
  const [dismissed, setIsDismissed] = useState(false);

  if (dismissed) {
    return null;
  }

  return (
    <div role="banner" className="border-b border-gray-200 bg-gray-50">
      <div className="flex items-center justify-between w-[var(--header-width)] mx-auto py-2">
        <div className="flex-1 text-base font-bold text-blue-500">
          {props.title}
        </div>
        <a
          className="hover:underline font-semibold"
          href={props.callToAction.url}
        >
          {props.text}
        </a>
        <button
          onClick={() => setIsDismissed(!dismissed)}
          className="flex flex-1 justify-end"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.5"
            width="18"
            viewBox="0 0 24 24"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Banner;
