import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate, stagger } from "motion/react";

const PlannerLogo = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
    (
        {
            size = 48,
            className = "",
            primaryColor = "var(--logo-primary)",
            secondaryColor = "var(--logo-secondary)",
            mutedColor = "var(--logo-muted)",
        }: AnimatedIconProps & {
            primaryColor?: string;
            secondaryColor?: string;
            mutedColor?: string;
        },
        ref,
    ) => {
        const [scope, animate] = useAnimate();

        const start = async () => {
            if (!scope.current) return;
            const blocks = scope.current.querySelectorAll(".planner-block");

            const chaosAnimations = Array.from(blocks).map((block) =>
                animate(
                    block as Element,
                    {
                        x: (Math.random() - 0.5) * 20,
                        y: (Math.random() - 0.5) * 10,
                        rotate: (Math.random() - 0.5) * 20,
                        scale: 0.9,
                        opacity: 0.8,
                    },
                    {
                        duration: 0.3,
                        ease: "easeOut",
                    }
                )
            );

            await Promise.all(chaosAnimations);

            await animate(
                ".planner-block",
                {
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    opacity: 1,
                },
                {
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.5,
                    delay: stagger(0.05),
                },
            );
        };

        const stop = () => {
            animate(
                ".planner-block",
                { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 },
                { duration: 0.3 }
            );
        };

        useImperativeHandle(ref, () => ({
            startAnimation: start,
            stopAnimation: stop,
        }));

        return (
            <motion.svg
                ref={scope}
                onMouseEnter={start}
                onMouseLeave={stop}
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 64 64"
                fill="none"
                className={`inline-flex cursor-pointer ${className}`}
                style={{ overflow: "visible" }}
            >
                {/* Top bar */}
                <motion.rect
                    className="planner-block origin-center"
                    initial={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
                    x="12"
                    y="8"
                    width="40"
                    height="12"
                    rx="6"
                    fill={primaryColor}
                />

                {/* Middle left */}
                <motion.rect
                    className="planner-block origin-center"
                    initial={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
                    x="12"
                    y="24"
                    width="28"
                    height="14"
                    rx="6"
                    fill={secondaryColor}
                />

                {/* Middle right curved */}
                <motion.path
                    className="planner-block origin-center"
                    initial={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
                    d="M44 24h4a6 6 0 0 1 6 6v2a6 6 0 0 1-6 6h-4z"
                    fill={secondaryColor}
                />

                {/* Bottom block */}
                <motion.rect
                    className="planner-block origin-center"
                    initial={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
                    x="12"
                    y="42"
                    width="20"
                    height="14"
                    rx="6"
                    fill={mutedColor}
                />
            </motion.svg>
        );
    },
);

PlannerLogo.displayName = "PlannerLogo";

export default PlannerLogo;
