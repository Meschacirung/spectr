import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef } from "react";
type Color = "gray" | "primary" | "secondary" | "accent"
type Shade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950
const shades:Shade[] = [50 , 100 , 200 , 300 , 400 , 500 , 600 , 700 , 800 , 900, 950]


export function Shades({color}:{color:Color}) {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto flex h-12 w-fit items-end gap-1"
    >
      {shades.map((shade) => (
        <AppIcon intent={color} shade={shade} mouseX={mouseX} key={shade} />
      ))}
    </motion.div>
  );
}

function AppIcon({ mouseX, shade, intent }: { mouseX: MotionValue, shade:Shade, intent:Color }) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-60, 0, 60], [50, 60, 50]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 60, damping: 5 });

  return (
    <motion.div
        ref={ref}
        style={{ width }}
        className={`relative aspect-square group w-16 overflow-hidden rounded-lg flex items-center justify-center border border-white/10 bg-${intent}-${shade} ` + ( intent == "gray" && ` last:dark:border last:dark:border-gray-800`)}
      >
          <span className={`absolute inset-x-0 bottom-2 group-hover:blur group-hover:scale-50 group-hover:opacity-0 transition duration-200 text-center h-fit text-xs text-${intent}-950` + (shade > 400 && " text-white")}>{shade}</span>
          <span className={`absolute inset-x-0 bottom-2 blur scale-50 opacity-0 group-hover:blur-0 group-hover:scale-100 group-hover:opacity-100 transition duration-200 text-center h-fit text-xs text-${intent}-950` + (shade > 400 && " text-white")}>8e91c6</span>
    </motion.div>
  );
}
