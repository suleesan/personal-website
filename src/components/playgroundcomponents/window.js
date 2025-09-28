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
}) {
  const bodyRef = useRef(null);

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
      <div className="bg-[#FFFCEB] border-[3px] border-black rounded-md shadow-[15px_15px_20px_rgba(0,0,0,0.25)] overflow-hidden">
        <div className="bg-[#93C0FF] border-b-[3px] border-black px-3 py-2 flex items-center justify-between min-h-[50px]">
          <div className="text-xl font-bold text-black whitespace-nowrap overflow-hidden text-ellipsis flex-1">
            {title}
          </div>
          <div className="flex items-center gap-4">
            {actionButtons.map(({ key, node, onClick, title }) => (
              <button
                key={key}
                type="button"
                onClick={onClick}
                title={title}
                className="w-6 h-6 cursor-pointer bg-transparent border-none p-0 flex items-center justify-center transition-transform duration-100 hover:scale-110"
              >
                {node}
              </button>
            ))}
          </div>
        </div>
        <div
          ref={bodyRef}
          className="p-5 bg-[#FFFCEB] relative"
          style={{ height }}
        >
          {childrenWithRef}
        </div>
      </div>
    </div>
  );
}

export default Window;
