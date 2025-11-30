import React, { useRef } from "react";
import { ReactComponent as CloseButton } from "../../images/Close Button.svg";
import { ReactComponent as MoreButton } from "../../images/More Button.svg";

function Window({
  title,
  actions = [],
  width = 600,
  height = 400,
  className,
  onMoreClick,
  onCloseClick,
  children,
  titleColor = "#93C0FF",
  bodyColor = "#FFFCEB",
  onDragStart,
  isDragging = false,
  titleFont = "var(--font-pokemon)",
  bodyFont = "var(--font-pokemon-body)",
}) {
  const bodyRef = useRef(null);
  const titleBarRef = useRef(null);

  const getActionButtons = () => {
    const buttonConfigs = [];

    if (actions.includes("more")) {
      buttonConfigs.push({
        key: "more",
        node: <MoreButton className="w-[80%] h-[80%]" />,
        onClick: onMoreClick,
        title: "More",
      });
    }

    if (actions.includes("close")) {
      buttonConfigs.push({
        key: "close",
        node: <CloseButton className="w-[80%] h-[80%]" />,
        onClick: onCloseClick,
        title: "Close",
      });
    }

    return buttonConfigs;
  };

  const actionButtons = getActionButtons();

  // Clone children and pass containerRef to DraggableImage components
  const childrenWithRef = React.Children.map(children, (child) => {
    if (
      React.isValidElement(child) &&
      (child.type?.name === "DraggableImage" ||
        child.type?.displayName === "DraggableImage" ||
        child.type?.toString().includes("DraggableImage"))
    ) {
      return React.cloneElement(child, { containerRef: bodyRef });
    }
    return child;
  });

  return (
    <div
      className={`relative select-none ${className || ""}`}
      style={{ width }}
    >
      <div className="border-[1px] border-black shadow-[15px_15px_15px_15px_rgba(0,0,0,0.25)] overflow-hidden">
        {/* title */}
        <div
          ref={titleBarRef}
          onMouseDown={(e) => {
            // Don't start dragging if clicking on buttons
            if (e.target.tagName === "BUTTON" || e.target.closest("button")) {
              return;
            }
            if (onDragStart) {
              onDragStart(e);
            }
          }}
          className="border-b-[1px] border-black px-3 py-2 flex items-center justify-between min-h-[20px]"
          style={{
            backgroundColor: titleColor,
            cursor: onDragStart
              ? isDragging
                ? "grabbing"
                : "grab"
              : "default",
            userSelect: "none",
          }}
        >
          <div
            className="text-l text-black whitespace-nowrap overflow-hidden text-ellipsis flex-1"
            style={{ fontFamily: titleFont }}
          >
            {title}
          </div>
          <div className="flex items-center gap-4">
            {actionButtons.map(({ key, node, onClick, title }) => (
              <button
                key={key}
                type="button"
                onClick={onClick}
                title={title}
                className="w-6 h-6 cursor-pointer bg-transparent p-1 flex items-center justify-center hover:border-[1.5px] hover:border-gray-700 rounded-sm"
              >
                {node}
              </button>
            ))}
          </div>
        </div>
        {/* body */}
        <div
          ref={bodyRef}
          className="relative"
          style={{ height, backgroundColor: bodyColor, fontFamily: bodyFont }}
        >
          {childrenWithRef}
        </div>
      </div>
    </div>
  );
}

export default Window;
