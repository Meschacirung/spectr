import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef, useState, useEffect, type ButtonHTMLAttributes } from "react";
import * as Tooltip from '@radix-ui/react-tooltip';

export function OptionsDock() {
    let mouseX = useMotionValue(Infinity);
      const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  
  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('color-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleThemeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto flex h-[3.6rem] w-fit gap-1.5 ring-1 ring-gray-950/10 dark:ring-gray-900/50 items-end pb-1.5 px-1.5 border border-white/10 rounded-2xl shadow-md shadow-gray-950/5 bg-white/10 dark:bg-gray-900/25 backdrop-blur-2xl dark:border-white/10"
      >
          <AppIcon mouseX={mouseX} tooltip="Home">
              <svg className="relative size-full transition duration-300 text-gray-950 dark:text-white" width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="31" r="5" fill="currentColor"/>
                <circle cx="59" cy="31" r="5" fill="currentColor"/>
                <circle opacity={0.75} cx="40" cy="50" r="5" fill="currentColor"/>
                <circle opacity={0.75} cx="59" cy="50" r="5" fill="currentColor"/>
                <circle opacity={0.50} cx="40" cy="69" r="5" fill="currentColor"/>
                <circle opacity={0.50} cx="59" cy="69" r="5" fill="currentColor"/>
              </svg>
          </AppIcon>
          <span className="h-6 w-px  bg-gray-950/10 dark:bg-white/10 mx-2 -translate-y-2"></span>
        <AppIcon mouseX={mouseX} tooltip="Tailus UI">
            <svg className="relative size-full text-gray-950 dark:text-white" width="32" height="32" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M84 42C84 65.196 65.196 84 42 84C18.804 84 0 65.196 0 42C0 18.804 18.804 0 42 0C65.196 0 84 18.804 84 42ZM9.48201 42C9.48201 59.9592 24.0408 74.518 42 74.518C59.9592 74.518 74.518 59.9592 74.518 42C74.518 24.0408 59.9592 9.48199 42 9.48199C24.0408 9.48199 9.48201 24.0408 9.48201 42ZM48.3697 26.2316C51.2872 26.2316 53.6523 28.5967 53.6523 31.5142C53.6523 34.4317 51.2872 36.7968 48.3697 36.7968C45.4522 36.7968 43.0871 34.4317 43.0871 31.5142C43.0871 28.5967 45.4522 26.2316 48.3697 26.2316ZM42.2543 36.7543C42.3875 36.7543 42.5195 36.7593 42.6502 36.769C43.691 37.9013 45.0637 38.7237 46.6141 39.0819C47.1736 39.9162 47.5 40.92 47.5 42C47.5 44.8971 45.1514 47.2457 42.2543 47.2457C39.3572 47.2457 37.0087 44.8971 37.0087 42C37.0087 39.1029 39.3572 36.7543 42.2543 36.7543ZM34.8047 39.7898C34.5971 40.4904 34.4857 41.2322 34.4857 42C34.4857 42.7679 34.5971 43.5097 34.8047 44.2102C33.969 46.0163 32.1408 47.2693 30.02 47.2693C27.1098 47.2693 24.7507 44.9102 24.7507 42C24.7507 39.0899 27.1098 36.7308 30.02 36.7308C32.1408 36.7308 33.969 37.9837 34.8047 39.7898ZM53.6445 52.4859C53.6445 49.5733 51.2834 47.2122 48.3708 47.2122C48.246 47.2122 48.1221 47.2165 47.9994 47.225C46.9472 48.3816 45.5507 49.2193 43.9718 49.5761C43.4191 50.4101 43.0971 51.4104 43.0971 52.4859C43.0971 55.3984 45.4583 57.7595 48.3708 57.7595C51.2834 57.7595 53.6445 55.3984 53.6445 52.4859ZM59.7461 42C59.7461 39.0938 57.3901 36.7378 54.4838 36.7378C54.3567 36.7378 54.2306 36.7423 54.1057 36.7512C53.0573 37.8988 51.6691 38.7307 50.1003 39.0877C49.9504 39.3129 49.8173 39.5503 49.703 39.7982C49.909 40.4962 50.0195 41.2352 50.0195 42C50.0195 42.7648 49.909 43.5038 49.703 44.2019C49.8173 44.4497 49.9504 44.6872 50.1003 44.9124C51.6691 45.2694 53.0573 46.1013 54.1057 47.2489C54.2306 47.2578 54.3567 47.2623 54.4838 47.2623C57.3901 47.2623 59.7461 44.9063 59.7461 42ZM40.9219 50.2755C40.7143 50.9761 40.6028 51.718 40.6028 52.4859C40.6028 53.2538 40.7143 53.9957 40.9219 54.6962C40.0861 56.503 38.2573 57.7564 36.1358 57.7564C33.225 57.7564 30.8653 55.3967 30.8653 52.4859C30.8653 51.4099 31.1877 50.4093 31.7411 49.5753C33.317 49.2184 34.7111 48.3823 35.7621 47.2284C35.8855 47.2197 36.0102 47.2153 36.1358 47.2153C36.2612 47.2153 36.3856 47.2197 36.5088 47.2283C37.56 48.3825 38.9544 49.2187 40.5306 49.5755C40.678 49.7976 40.809 50.0315 40.9219 50.2755ZM40.5094 34.4263C40.6608 34.1992 40.795 33.9595 40.9102 33.7094C40.705 33.0126 40.595 32.2752 40.595 31.5121C40.595 30.7489 40.705 30.0114 40.9102 29.3147C40.0777 27.5058 38.2492 26.25 36.1274 26.25C33.2213 26.25 30.8654 28.6059 30.8654 31.5121C30.8654 32.5894 31.1892 33.5912 31.7448 34.4254C33.3117 34.7828 34.6983 35.614 35.7457 36.7604C35.8718 36.7695 35.9991 36.7741 36.1274 36.7741C36.1921 36.7741 36.2564 36.7729 36.3204 36.7706C36.385 36.7683 36.4493 36.7648 36.5132 36.7602C37.5596 35.615 38.9445 34.7843 40.5094 34.4263Z" fill="currentColor"></path>
            </svg>
          </AppIcon>
          <AppIcon mouseX={mouseX} tooltip="Nuxt UI">
              <svg className="relative size-full text-gray-950 dark:text-white" width="264" height="264" viewBox="0 0 264 264" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M146.496 211.2H234.822C237.627 211.2 240.383 210.468 242.813 209.078C245.242 207.688 247.259 205.688 248.662 203.279C250.064 200.871 250.801 198.139 250.8 195.359C250.799 192.579 250.059 189.847 248.655 187.44L189.337 85.612C187.935 83.2043 185.918 81.2049 183.489 79.8147C181.06 78.4246 178.305 77.6927 175.5 77.6927C172.695 77.6927 169.94 78.4246 167.511 79.8147C165.082 81.2049 163.065 83.2043 161.663 85.612L146.496 111.666L116.841 60.7179C115.438 58.3104 113.42 56.3113 110.991 54.9214C108.561 53.5315 105.805 52.7998 103 52.7998C100.195 52.7998 97.4386 53.5315 95.0089 54.9214C92.5793 56.3113 90.5615 58.3104 89.1583 60.7179L15.3453 187.44C13.9411 189.847 13.2012 192.579 13.2 195.359C13.1987 198.139 13.9363 200.871 15.3384 203.279C16.7405 205.688 18.7578 207.688 21.1873 209.078C23.6168 210.468 26.3728 211.2 29.1783 211.2H84.6219C106.589 211.2 122.789 201.636 133.937 182.979L161 136.526L175.496 111.666L219 186.34H161L146.496 211.2ZM83.7181 186.314L45.0255 186.306L103.026 86.7466L131.966 136.526L112.589 169.798C105.186 181.904 96.7763 186.314 83.7181 186.314Z" fill="currentColor"></path>
              </svg>
          </AppIcon>
          <AppIcon mouseX={mouseX} tooltip="Shadcn">
            <svg className="size-full relative text-gray-950 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none"></rect>
                <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
            </svg>
          </AppIcon>
          <span className="h-6 w-px bg-gray-950/10 dark:bg-white/10 mx-2 -translate-y-2"></span>
          <AppIcon mouseX={mouseX} tooltip="Code">
        <svg className="size-full relative text-gray-950 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
            <path d="m17 7.83l1.697 1.526c1.542 1.389 2.313 2.083 2.313 2.974c0 .89-.771 1.585-2.314 2.973L17 16.83" />
            <path d="m13.987 5l-3.974 14.83" opacity=".5" />
            <path d="M7 7.83L5.304 9.356C3.76 10.745 2.99 11.44 2.99 12.33c0 .89.771 1.585 2.314 2.973L7 16.83" />
          </g>
        </svg>
          </AppIcon>
            <AppIcon
                mouseX={mouseX}
                onClick={handleThemeToggle}
                title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              role="button"
              tooltip="Toggle Theme"
            >
                {
                    darkMode ? 
                      <svg className="size-full relative text-gray-950 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                          <g fill="currentColor">
                              <path d="M184 128a56 56 0 1 1-56-56a56 56 0 0 1 56 56" opacity=".2" />
                              <path d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64m-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48M58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16" />
                          </g>
                      </svg>
                    :   <svg aria-hidden="true" className="size-full p-0.5 text-gray-950 relative" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                            <path className="text-gray-500" d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                        </svg>
                }
            </AppIcon>
    </motion.div>
  );
}

interface AppIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
     mouseX: MotionValue;
    children: React.ReactNode;
    tooltip:string
}


const AppIcon:React.FC<AppIconProps> = ({ mouseX, tooltip, children, ...props }) => {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [43, 80, 43]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 80, damping: 5 });

    return (
    <Tooltip.Provider>
        <Tooltip.Root delayDuration={50}>
            <Tooltip.Trigger asChild>
                <motion.button
                    ref={ref}
                    style={{ width }}
                    {...props}
                    className={`aspect-square group w-10 p-2.5 overflow-hidden bg-white/50 backdrop-blur-xl flex items-center rounded-lg shadow shadow-gray-950/5 dark:shadow-inner dark:shadow-white/0 justify-center group relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-t-white dark:before:border-t-white/10 before:bg-gradient-to-b before:from-gray-50 dark:before:from-white/0 dark:ring ring-gray-50 border dark:ring-gray-950/5 dark:bg-gray-800 dark:border-gray-800 hover:before:from-gray-100 dark:hover:before:from-white/5`}
            >
                {children}
                </motion.button>  
            </Tooltip.Trigger>
        <Tooltip.Portal>
                    <Tooltip.Content sideOffset={6} className="relative z-50 text-xs px-2 py-1.5 border shadow shadow-gray-500/5 border-gray-950/10 dark:border-white/10 rounded-lg text-gray-950 dark:text-white bg-white/75 dark:bg-gray-800/50 backdrop-blur-2xl">
                        {tooltip}
            </Tooltip.Content>
        </Tooltip.Portal>
        </Tooltip.Root>
    </Tooltip.Provider>
  );
}
