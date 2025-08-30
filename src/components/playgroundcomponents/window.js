import React from "react";
import { ReactComponent as CloseButton } from "../../images/Close Button.svg";
import { ReactComponent as MoreButton } from "../../images/More Button.svg";

function Window({
  title,
  actions = [],
  width = 600,
  className,
  onMoreClick,
  onCloseClick,
  children,
}) {
  // referenced from Window.svg
  const vbWidth = 1291;
  const vbHeight = 1309;
  const headerHeight = 113.375;
  const bodyY = headerHeight;

  // Convert simple actions array to button configs
  const getActionButtons = () => {
    const buttonConfigs = [];

    if (actions.includes("more")) {
      buttonConfigs.push({
        key: "more",
        node: <MoreButton className="w-full h-full" />,
        onClick: onMoreClick,
        title: "More",
      });
    }

    if (actions.includes("close")) {
      buttonConfigs.push({
        key: "close",
        node: <CloseButton className="w-full h-full" />,
        onClick: onCloseClick,
        title: "Close",
      });
    }

    return buttonConfigs;
  };

  const actionButtons = getActionButtons();

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width,
        userSelect: "none",
      }}
    >
      <svg
        viewBox={`0 0 ${vbWidth} ${vbHeight}`}
        xmlns="http://www.w3.org/2000/svg"
        role="group"
        aria-label="Window"
        className="block w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <g filter="url(#filter0_d_7_1133)">
          <rect width="1271.64" height="1290" rx="50" fill="#FFFCEB" />
          <rect
            x="3.5"
            y="3.5"
            width="1264.64"
            height="1283"
            rx="46.5"
            stroke="black"
            strokeWidth="7"
            fill="none"
          />
        </g>

        {/* Blue header bar */}
        <path
          d="M50 3.5H1221.64C1247.32 3.5 1268.14 24.3188 1268.14 50V113.375H3.5V50C3.50001 24.3188 24.3188 3.5 50 3.5Z"
          fill="#93C0FF"
          stroke="black"
          strokeWidth="7"
        />

        {/* Header content */}
        <foreignObject
          x="3.5"
          y="3.5"
          width={vbWidth - 7}
          height={113.375 - 3.5}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            className="h-full flex items-center gap-6 justify-between"
          >
            <div className="flex items-center flex-1 ml-10">
              <span
                title={title}
                className="text-3xl font-bold text-black whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {title}
              </span>
            </div>

            {/* Action buttons */}
            <div
              aria-label="Window actions"
              className="flex items-center gap-5 mr-16"
            >
              {actionButtons.map(({ key, node, onClick, title }) => (
                <button
                  key={key}
                  type="button"
                  onClick={onClick}
                  title={title}
                  className="w-8 h-8 cursor-pointer"
                >
                  {node}
                </button>
              ))}
            </div>
          </div>
        </foreignObject>

        {/* Body area - content can be draggable here */}
        <foreignObject
          x="5"
          y={bodyY}
          width={vbWidth - 40}
          height={1290 - bodyY}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            className="w-full h-full box-border"
          >
            {children}
          </div>
        </foreignObject>

        <defs>
          <filter
            id="filter0_d_7_1133"
            x="0"
            y="0"
            width="1290.64"
            height="1309"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="15" dy="15" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_7_1133"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_7_1133"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Window;
