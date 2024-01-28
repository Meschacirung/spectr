import Tabs from "@tailus-ui/Tabs";
import { useState, useRef, useEffect } from "react";
import CodeSnippet from "./CodeSnippet";
import { isOpen, setIsOpen } from "@store/code-pannel"
import { useStore } from "@nanostores/react"
import { motion } from "framer-motion"

export type TabsAppProps = "tailus" | "nuxtui" | "shadcn"

function CodePannel() {
    const [state, setState] = useState<TabsAppProps>("tailus");
    const spanRef = useRef<HTMLSpanElement>(null);
    const $isOpen = useStore(isOpen);

    useEffect(() => {
        const activeTrigger = document.getElementById(state) as HTMLElement;
        if (spanRef.current) {
            spanRef.current.style.left = activeTrigger.offsetLeft + "px";
            spanRef.current.style.width = activeTrigger.offsetWidth + "px";
        }
    }, [state]);
  
  const container = {
        hidden: { y:250, scaleX:0.5, opacity:0},
        show: {
          y: 0,
          scaleX:1,
            opacity:1,
            transition: {
                duration:0.5,
                type: "spring",
                bounce : 0.2,
                delayChildren: 0.125,
                staggerChildren: 0.1
            }
        }
    }

  return (
      <>
      {$isOpen && <div className="fixed inset-0 z-10 bg-white/50 backdrop-blur-[1px] dark:bg-gray-950/0 dark:backdrop-blur-[2px]" onClick={setIsOpen}></div>}
        <motion.div
          initial="hidden"
          animate={$isOpen ? "show" : "hidden"}
          exit={"hidden"}
          variants={container}
          className="fixed mx-auto inset-x-0 z-10 bottom-24 max-w-xl h-fit w-full rounded-2xl p-2 transition-[height] duration-300 bg-gray-50 ring-1 ring-gray-200 dark:ring-gray-900 border border-white shadow-md shadow-gray-950/5 dark:shadow-gray-950/50 dark:bg-gray-950/50 backdrop-blur-2xl dark:border-white/10">
              <Tabs.Root className="-mt-2 flex flex-col" defaultValue={state} onValueChange={(value) => setState(value as TabsAppProps)}>
                  <Tabs.List
                      aria-label="stores" 
                      className="w-fit p-0 my-1 dark:bg-transparent"
                      variant="soft"
                  >
                      <Tabs.Indicator indicator="outlined" className="shadow-sm shadow-gray-950/5 dark:bg-gray-800/50 rounded-lg transition-[width,left]" ref={spanRef}/>
                      <Tabs.Trigger className="text-gray-600 dark:text-gray-400" value="tailus" id="tailus">TailusUI</Tabs.Trigger>
                      <Tabs.Trigger className="text-gray-600 dark:text-gray-400" value="nuxt" id="nuxt">Nuxt UI</Tabs.Trigger>
                      <Tabs.Trigger className="text-gray-600 dark:text-gray-400" value="shadcn" id="shadcn">ShadCn</Tabs.Trigger>
                  </Tabs.List>

                  <Tabs.Content value="tailus">
                      <CodeSnippet code={`colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      primary: colors.rose,
      secondary: colors.red,
      accent: colors.orange,
      danger: colors.red,
      success: colors.green,
      warning: colors.amber,
      info: colors.sky,
      gray: colors.zinc,
      black: colors.black,
      white: colors.white,
  }),`} />
                  </Tabs.Content>
                  <Tabs.Content value="nuxt">
                      <CodeSnippet code={`import type { Config } from 'tailwindcss'
  import defaultTheme from 'tailwindcss/defaultTheme'

  export default <Partial<Config>>{
    theme: {
      extend: {
        colors: {
          green: {
            50: '#EFFDF5',
            100: '#D9FBE8',
            200: '#B3F5D1',
            300: '#75EDAE',
            400: '#00DC82',
            500: '#00C16A',
            600: '#00A155',
            700: '#007F45',
            800: '#016538',
            900: '#0A5331',
            950: '#052e16'
          }
        }
      }
    }
  }`} />
                  </Tabs.Content>
                  <Tabs.Content value="shadcn">
                      <CodeSnippet code={`@layer base {
    :root {
      --background: 0 0% 100%;
      --foreground: 20 14.3% 4.1%;
      --card: 0 0% 100%;
      --card-foreground: 20 14.3% 4.1%;
      --popover: 0 0% 100%;
      --popover-foreground: 20 14.3% 4.1%;
      --primary: 47.9 95.8% 53.1%;
      --primary-foreground: 26 83.3% 14.1%;
      --secondary: 60 4.8% 95.9%;
      --secondary-foreground: 24 9.8% 10%;
      --muted: 60 4.8% 95.9%;
      --muted-foreground: 25 5.3% 44.7%;
      --accent: 60 4.8% 95.9%;
      --accent-foreground: 24 9.8% 10%;
      --destructive: 0 84.2% 60.2%;
      --destructive-foreground: 60 9.1% 97.8%;
      --border: 20 5.9% 90%;
      --input: 20 5.9% 90%;
      --ring: 20 14.3% 4.1%;
      --radius: 1rem;
    }

    .dark {
      --background: 20 14.3% 4.1%;
      --foreground: 60 9.1% 97.8%;
      --card: 20 14.3% 4.1%;
      --card-foreground: 60 9.1% 97.8%;
      --popover: 20 14.3% 4.1%;
      --popover-foreground: 60 9.1% 97.8%;
      --primary: 47.9 95.8% 53.1%;
      --primary-foreground: 26 83.3% 14.1%;
      --secondary: 12 6.5% 15.1%;
      --secondary-foreground: 60 9.1% 97.8%;
      --muted: 12 6.5% 15.1%;
      --muted-foreground: 24 5.4% 63.9%;
      --accent: 12 6.5% 15.1%;
      --accent-foreground: 60 9.1% 97.8%;
      --destructive: 0 62.8% 30.6%;
      --destructive-foreground: 60 9.1% 97.8%;
      --border: 12 6.5% 15.1%;
      --input: 12 6.5% 15.1%;
      --ring: 35.5 91.7% 32.9%;
    }
  }`} />
                  </Tabs.Content>
              </Tabs.Root>
        </motion.div>
      </>
  )
}

export default CodePannel;