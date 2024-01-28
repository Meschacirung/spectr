import { motion } from "framer-motion"
import {cn} from "@lib/utils"

export default ({className=""}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="size-3"
        >
            <defs>
                <filter id="dropshadow" height="130%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="0.8"/>
                    <feOffset dx="2" dy="2" result="offsetblur"/>
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.25"/>
                    </feComponentTransfer>
                    <feMerge> 
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/> 
                    </feMerge>
                </filter>
            </defs>
            <motion.path
                initial={{ pathLength: 0, scale:1.25 }}
                animate={{ pathLength: 1, scale:1 }}
                exit={{ pathLength: 0 }}
                d="M3 12L10 19L21 6"
                filter="url(#dropshadow)"
                className={cn("-translate-y-px text-white", className)}
            />
        </svg>
    )
}