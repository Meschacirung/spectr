import React from "react";
import { Control, Field, Label, Message, Submit, Root } from "@radix-ui/react-form";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from '@lib/utils';
import {
    outlinedForm as outlinedTheme,
    softForm as softTheme
} from "@tailus/themer-form";

const inputVariants = inputFormVariants("input");
const textareaVariants = inputFormVariants("textarea");

export type FormFieldVariantProps = VariantProps<typeof formFieldVariants>;
export type FormLabelVariantProps = VariantProps<typeof formLabelVariants>;
export type FormMessageVariantProps = VariantProps<typeof formMessageVariants>;

/**
 * Returns soft and outlined variants for input or textarea
 * @param element input or textarea
 * @returns soft and outlined variants for input or textarea
 */
function inputFormVariants(element: 'input' | 'textarea') {
  return cva("", {
    variants: {
      variant: {
        soft: softTheme[element].sm,
        outlined: outlinedTheme[element].sm,
      },
      size: {
        xs: outlinedTheme[element].xs,
        sm: outlinedTheme[element].sm,
        md: outlinedTheme[element].md,
        lg: outlinedTheme[element].lg,
        xl: outlinedTheme[element].xl,
      }
    },
    compoundVariants: [
      {
        variant: "soft",
        size: "xs",
        class: softTheme[element].xs
      },
      {
        variant: "soft",
        size: "sm",
        class: softTheme[element].sm
      },
      {
        variant: "soft",
        size: "md",
        class: softTheme[element].md
      },
      {
        variant: "soft",
        size: "lg",
        class: softTheme[element].lg
      },
      {
        variant: "soft",
        size: "xl",
        class: softTheme[element].xl
      },
    ],
    defaultVariants: {
      variant: "outlined",
      size: "sm",
    }
  })
}

const formFieldVariants = cva('', {
    variants: {
        variant: {
            outlined: outlinedTheme.field,
            soft: softTheme.field
        },
    }
});

const formLabelVariants = cva('', {
    variants: {
        size: {
            xs: outlinedTheme.label.xs,
            sm: outlinedTheme.label.sm,
            md: outlinedTheme.label.md,
        },
    }
});

const formMessageVariants = cva('', {
    variants: {
        intent: {
            warning: outlinedTheme.message.warning,
            danger: outlinedTheme.message.danger,
            gray: outlinedTheme.message.gray,
        },
    }
});

export interface FormFieldProps extends FormFieldVariantProps {
        className?: string;
}

export interface FormLabelProps extends FormLabelVariantProps {
    className?: string;
}

export interface FormMessageProps extends FormMessageVariantProps {
    className?: string;
}

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
        variant?: "soft" | "outlined";
        size?: "xs" | "sm" | "md" | "lg" | "xl";
    }

export interface TextAreaProps
    extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
        variant?: "soft" | "outlined";
        size?: "xs" | "sm" | "md" | "lg" | "xl";
    }

export const FormRoot = React.forwardRef<
    React.ElementRef<typeof Root>,
    React.ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, forwardedRef) => {
        
        return (
            <Root
                ref={forwardedRef}
                className={cn(className)}
                {...props}
            />
        )
});

export const FormControl = React.forwardRef<
    HTMLInputElement,
    React.ComponentProps<typeof Control>
>((props, forwardedRef) => (
    <Control
        ref={forwardedRef}
        {...props}
    />
));

export const FormField = React.forwardRef<
        React.ElementRef<typeof Field>,
        React.ComponentPropsWithoutRef<typeof Field> & FormFieldProps
>(({ className, variant = "outlined", name, ...props }, forwardedRef) => (
        <Field
                ref={forwardedRef}
                name={name}
                className={cn(formFieldVariants({ variant: variant }), className)}
                {...props}
        />
));

export const FormInput = React.forwardRef<
    HTMLInputElement, InputProps>(({ className, variant, size, ...props }, forwardedRef) => (
    <input
        ref={forwardedRef as React.RefObject<HTMLInputElement>}
        className={cn(inputVariants({ variant, size, className }))}
        {...props}
    />
    ));

export const FormLabel = React.forwardRef<
    React.ElementRef<typeof Label>,
    React.ComponentPropsWithoutRef<typeof Label> & FormLabelProps
>(({ className, size = "sm", ...props }, forwardedRef) => (
    <Label
        ref={forwardedRef}
        className={cn(formLabelVariants({ size: size }), className)}
        {...props}
    />
));

export const FormMessage = React.forwardRef<
    React.ElementRef<typeof Message>,
    React.ComponentPropsWithoutRef<typeof Message> & FormMessageProps
>(({ className, intent = "warning", match, ...props }, forwardedRef) => (
    <Message
        ref={forwardedRef}
        className={cn(formMessageVariants({ intent: intent }), className)}
        match={match}
        {...props}
    />
));

export const FormSubmit = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Submit>
>((props, forwardedRef) => (
    <Submit
        ref={forwardedRef}
        {...props}
    />
));

export const FormTextArea = React.forwardRef<
    HTMLTextAreaElement, TextAreaProps>(({ className, variant, size, ...props }, forwardedRef) => (
    <textarea
        ref={forwardedRef as React.RefObject<HTMLTextAreaElement>}
        className={cn(textareaVariants({ variant, size }), className)}
        {...props}
    />
));

export default {
    Root: FormRoot,
    Control: FormControl,
    Field: FormField,
    Input: FormInput,
    Label: FormLabel,
    Message: FormMessage,
    Submit: FormSubmit,
    TextArea: FormTextArea,
}