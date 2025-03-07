import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md capitalize",
  {
    variants: {
      variant: {
        default:
          "bg-tan hover:border border-tan text-white hover:text-tan hover:bg-transparent jomolhari text-sm w-[120px] lg:w-[160px]",
        destructive:
          "text-darkGray bg-pinkLight hover:bg-darkGray hover:text-pinkLight border border-pinkLight",
        outline:
          "bg-transparent border border-darkTan text-darkTan hover:text-white hover:bg-darkTan jomolhari text-sm w-[120px] lg:w-[160px]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost:
          "bg-white text-darkGray rounded-none hover:bg-darkGray hover:text-white hover:border hover:border-white",
        darkghost:
          "bg-black hover:bg-white rounded-none px-6 text-white hover:text-black border border-black",
        link: "text-primary underline-offset-4 hover:underline",
        icon: "bg-black hover:bg-white rounded-none text-white hover:text-black border border-black",
      },
      size: {
        default: "h-10 md:h-12 px-4 py-2",
        nav: "h-10 px-4 py-2",
        sm: "h-8 rounded-md",
        lg: "h-10 rounded-md px-8",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
