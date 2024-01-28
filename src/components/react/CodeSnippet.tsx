import Prism from 'prismjs';
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-tsx"
import "prismjs/components/prism-bash"
import "prismjs/components/prism-json"
import "prismjs/components/prism-shell-session"
import "prismjs/plugins/line-highlight/prism-line-highlight"
import "./../../styles/code-theme.css"
import { useEffect } from 'react';
import {cn} from "@lib/utils"
import CodeCopyButton from './CopyButton';

export interface CodeSnippetProps extends React.HTMLAttributes<HTMLModElement>{
    code: string,
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
    code,
    className,
}) =>{

    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    return (
        <div className={cn("aspect-[16/12] relative overflow-hidden group/snippet rounded-xl shadow shadow-gray-950/10 dark:border dark:border-gray-800 bg-white dark:bg-gray-800/50 dark:backdrop-blur-3xl", className)}>
            <div className="absolute right-1 top-1">
                <CodeCopyButton
                    code={code}
                />
            </div>
            <pre className={`overflow-auto h-full text-sm pt-6 pb-5 px-6`}>
                <code className="language-js font-mono text-[13px]">
                    {code}
                </code>
            </pre>
        </div>
    )
}

export default CodeSnippet;