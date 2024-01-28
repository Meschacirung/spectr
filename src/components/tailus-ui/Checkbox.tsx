import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import {checkbox as checkboxTheme, ringVariant as checkBoxRingTheme} from "@tailus/themer-checkbox";
import React, {forwardRef} from "react";
import {cn} from "@lib/utils";
import {cva, type VariantProps} from "class-variance-authority";

export type CheckboxVariantProps = VariantProps<typeof checkboxVariants>;
const checkboxVariants = cva('',{
  variants: {
    variant: {
      default: checkboxTheme.root + " shadow-sm shadow-gray-500/5 w-5 h-5 data-[state=checked]:before:shadow-white/10 dark:data-[state=checked]:before:shadow-white/20 dark:data-[state=checked]:before:bg-primary-600 data-[state=checked]:border-none before:border-none border-gray-300 hover:border-gray-400/75 dark:hover:border-gray-600 before:inset-0 p-0 before:shadow-gray-950/5 dark:before:shadow-white/5 bg-white before:w-full before:h-full rounded before:rounded-[3px]",
      ring: checkBoxRingTheme.root + " dark:border-gray-800",
    }
  }
});

export interface CheckboxProps extends CheckboxVariantProps {
  className?: string;
}

const CheckboxRoot = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & CheckboxProps
>(({className, variant = 'default', ...props}: CheckboxProps, forwardedRef) => (
  <CheckboxPrimitive.Root
    ref={forwardedRef}
    className={ cn(checkboxVariants({variant: variant}), className) }
    {...props}
  />
));

type CheckboxIndicatorProps = {
  className?: string;
  props?: React.ComponentProps<typeof CheckboxPrimitive.Indicator>;
}

const CheckboxIndicator = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Indicator>
>(({className, ...props}: CheckboxIndicatorProps, forwardedRef) => (
  <CheckboxPrimitive.Indicator
    ref={forwardedRef}
    className={ cn(checkboxTheme.indicator, className) }
    {...props}
  />
));

type CheckboxLabelProps = {
  className?: string;
  props?: React.ComponentProps<"label">;
}

const CheckboxLabel = forwardRef<React.ElementRef<"label">, React.ComponentPropsWithoutRef<"label">>(
  ({className, ...props}: CheckboxLabelProps, forwardedRef) => (
    <label
      ref={forwardedRef}
      className={ cn(checkboxTheme.label, "font-medium select-none" ,className) }
      {...props}
    />
  )
);

export default {
    Root: CheckboxRoot,
    Indicator: CheckboxIndicator,
    Label: CheckboxLabel,
}

export {
  CheckboxRoot,
  CheckboxIndicator,
  CheckboxLabel,
};