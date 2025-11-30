import React, {
  useRef,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import Draggable from "./draggable";
import Icon from "./icon";
import { themes } from "./themes";

const ThemeBackground = ({
  theme: initialTheme = "pokemon",
  onThemeChange,
}) => {
  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const [windowOrder, setWindowOrder] = useState([]);
  const [openWindows, setOpenWindows] = useState({});
  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const themeConfig = themes[currentTheme] || themes.pokemon;

  const availableThemes = Object.keys(themes);

  const handleThemeSelect = (themeName) => {
    setCurrentTheme(themeName);
    setIsMenuOpen(false);
    if (onThemeChange) {
      onThemeChange(themeName);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // dynamic window ordering
  const bringToFront = useCallback((windowKey) => {
    setWindowOrder((prevOrder) => {
      const newOrder = prevOrder.filter((key) => key !== windowKey);
      return [...newOrder, windowKey];
    });
  }, []);

  const handleIconClick = useCallback((windowId) => {
    setOpenWindows((prev) => ({
      ...prev,
      [windowId]: true,
    }));
  }, []);

  const handleWindowClose = useCallback((windowId) => {
    setOpenWindows((prev) => ({
      ...prev,
      [windowId]: false,
    }));
  }, []);

  const currentWindowKeys = useMemo(() => {
    return themeConfig.icons
      .filter((icon) => openWindows[icon.id])
      .map((icon) => icon.id);
  }, [themeConfig.icons, openWindows]);

  // set window order if it's empty or if windows have changed
  useEffect(() => {
    if (currentWindowKeys.length > 0) {
      setWindowOrder((prevOrder) => {
        const newWindows = currentWindowKeys.filter(
          (key) => !prevOrder.includes(key)
        );
        const filteredOrder = prevOrder.filter((key) =>
          currentWindowKeys.includes(key)
        );
        return [...filteredOrder, ...newWindows];
      });
    } else {
      setWindowOrder([]);
    }
  }, [currentWindowKeys]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative mt-[-60px]"
      style={{
        backgroundColor: themeConfig.background,
        height: "90vh",
        minWidth: "100%",
      }}
    >
      {/* menu bar*/}
      <div className="absolute top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="px-4 py-2 hover:bg-white/30 font-medium"
              style={{ fontFamily: themeConfig.titleFont }}
            >
              Toggle Theme
            </button>

            {/* theme menu */}
            {isMenuOpen && (
              <div className="absolute left-0 mt-2 bg-white/70 backdrop-blur-md shadow-2xl min-w-[150px] overflow-hidden">
                {availableThemes.map((themeName) => (
                  <button
                    key={themeName}
                    onClick={() => handleThemeSelect(themeName)}
                    className={`w-full text-left px-4 py-3  hover:bg-white/20 transition-colors ${
                      currentTheme === themeName ? "bg-white/30" : ""
                    }`}
                    style={{ fontFamily: themeConfig.titleFont }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="capitalize">{themeName}</span>
                      {currentTheme === themeName && (
                        <span className="text-sm">✓</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* icons (static)*/}
      {themeConfig.icons.map((iconConfig) => (
        <Icon
          key={iconConfig.id}
          image={iconConfig.image}
          caption={iconConfig.caption}
          font={themeConfig.font}
          height="50px"
          width="50px"
          initialX={iconConfig.initialX}
          initialY={iconConfig.initialY}
          onClick={() => handleIconClick(iconConfig.id)}
        />
      ))}

      {/* windows (draggable) */}
      {themeConfig.icons.map((iconConfig) => {
        if (!openWindows[iconConfig.id]) {
          return null;
        }

        const WindowComponent = iconConfig.windowComponent;
        const windowProps = iconConfig.windowProps;
        const windowKey = iconConfig.id;

        const orderIndex = windowOrder.indexOf(windowKey);
        const zIndex = orderIndex === -1 ? 1 : orderIndex + 1;

        return (
          <Draggable
            key={windowKey}
            containerRef={containerRef}
            initialX={iconConfig.windowProps.initialX}
            initialY={iconConfig.windowProps.initialY}
            zIndex={zIndex}
            onMouseDown={() => bringToFront(windowKey)}
          >
            <WindowComponent
              {...windowProps}
              onClose={() => handleWindowClose(iconConfig.id)}
            />
          </Draggable>
        );
      })}
    </div>
  );
};

export default ThemeBackground;
