import Button from "@tailus-ui/Button"
import { useState } from "react";
import {cn} from "@lib/utils"
import { CheckIcon, ClipboardCopyIcon, CopyIcon } from "@radix-ui/react-icons";

interface CodeCopyButtonProps extends React.HTMLAttributes<HTMLModElement> {
    code: string,
    className?: string,
}

const CodeCopyButton: React.FC<CodeCopyButtonProps> = ({
    code, className
}) => {
    const [copied, setCopied] = useState(false);

    const copyCode = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    }

    return (
        <Button
            variant='ghost'
            colorVariant='gray'
            icon="only"
            label="Copy code"
            onClick={copyCode}
            className={cn("relative rounded-lg before:rounded-lg z-50 hover:before:bg-gray-100 focus:before:!bg-gray-950/5 dark:focus:before:bg-white/5", className)}
        >
            {
                copied ?
                    <CheckIcon className="text-gray-950 dark:text-white" /> :
                    <ClipboardCopyIcon className="text-gray-950 dark:text-white" />
            }
        </Button>
    )
}

export default CodeCopyButton;