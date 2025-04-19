
import React, { CSSProperties, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "outline" | "ghost" | "link" | "destructive" | "highlight" | "success";
  size?: "default" | "sm" | "lg" | "icon";
}

const ShimmerButton = forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "1rem",
      background = "rgba(37, 99, 235, 1)", // Blue-600 as default
      className,
      variant = "default",
      size = "default",
      children,
      ...props
    },
    ref,
  ) => {
    // Define variant styles
    const getVariantStyle = (): { background: string; textColor: string } => {
      switch (variant) {
        case "primary":
          return { background: "rgba(37, 99, 235, 1)", textColor: "text-white" }; // Blue-600
        case "secondary":
          return { background: "rgba(203, 213, 225, 1)", textColor: "text-gray-900" }; // Gray-300
        case "outline":
          return { background: "transparent", textColor: "text-blue-600" };
        case "ghost":
          return { background: "transparent", textColor: "text-gray-900" };
        case "destructive":
          return { background: "rgba(220, 38, 38, 1)", textColor: "text-white" }; // Red-600
        case "highlight":
          return { background: "rgba(30, 64, 175, 1)", textColor: "text-white" }; // Blue-800
        case "success":
          return { background: "rgba(22, 163, 74, 1)", textColor: "text-white" }; // Green-600
        case "link":
          return { background: "transparent", textColor: "text-blue-600 underline" };
        default:
          return { background: "rgba(37, 99, 235, 1)", textColor: "text-white" }; // Default blue
      }
    };

    // Get size classes
    const getSizeClasses = (): string => {
      switch (size) {
        case "sm":
          return "px-3 py-2 text-sm";
        case "lg":
          return "px-8 py-3 text-base";
        case "icon":
          return "p-2.5 aspect-square";
        default:
          return "px-6 py-3";
      }
    };

    const { background: bg, textColor } = getVariantStyle();
    const actualBackground = variant === "outline" || variant === "ghost" || variant === "link" ? "transparent" : background || bg;
    const isOutlineOrGhost = variant === "outline" || variant === "ghost" || variant === "link";
    
    return (
      <button
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": actualBackground,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap",
          textColor,
          isOutlineOrGhost ? "border border-blue-600" : "border border-white/10",
          getSizeClasses(),
          "[background:var(--bg)] [border-radius:var(--radius)]",
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px hover:-translate-y-1",
          className,
        )}
        ref={ref}
        {...props}
      >
        {/* spark container */}
        {!isOutlineOrGhost && (
          <div
            className={cn(
              "-z-30 blur-[2px]",
              "absolute inset-0 overflow-visible [container-type:size]",
            )}
          >
            {/* spark */}
            <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
              {/* spark before */}
              <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
            </div>
          </div>
        )}
        
        {children}

        {/* Highlight */}
        <div
          className={cn(
            "insert-0 absolute size-full",
            "rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
            // transition
            "transform-gpu transition-all duration-300 ease-in-out",
            // on hover
            "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
            // on click
            "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]",
          )}
        />

        {/* backdrop */}
        <div
          className={cn(
            "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]",
          )}
        />
      </button>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton";

export { ShimmerButton };
