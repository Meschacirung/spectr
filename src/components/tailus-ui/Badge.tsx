import { badge, outlinedBadge, softBadge, } from "@tailus/themer-badge"
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@lib/utils';

const variantsMap = {
    solid: badge,
    outlined: outlinedBadge,
    soft: softBadge
}

const colorsMap = {
    primary: "primary",
    secondary: "secondary",
    accent: "accent",
    danger: "danger",
    success: "success",
    warning: "warning",
    info: "info",
    gray: "gray",
}

const sizesMap = {
    sm: "sm",
    md: "md",
    lg: "lg",
}

const badgeVariants = cva([''], {
    variants: {
      variant: variantsMap ,
      colorVariant: colorsMap,
      size: sizesMap,
    },
    defaultVariants: {
        variant: 'outlined',
        colorVariant: 'gray',
        size: 'md'
    }
  });


export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

export const Badge: React.FC<BadgeProps> = ({
    className,
    variant,
    colorVariant,
    size,
    children,
    ...props
  }) => {
   
    const badgeUtilities = variantsMap[variant!][colorVariant!][size!]
    const classes = cn(badgeUtilities, variant == "soft" && "bg-opacity-50", (variant == "soft" && colorVariant == "success") && "dark:bg-success-500/10 dark:text-success-400", (variant == "soft" && colorVariant == "info") && "dark:bg-info-500/10 dark:text-info-400", (variant == "soft" && colorVariant == "danger") && "dark:bg-danger-500/10 dark:text-danger-400", className);
    
    return(
        <span  className={classes} {...props} role="badge">
            {children}
        </span>
    )
  }

Badge.defaultProps = {
  variant: "soft",
  colorVariant: "gray",
  size: "sm",
}

export default Badge;