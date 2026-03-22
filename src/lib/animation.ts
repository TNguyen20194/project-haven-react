import type { Variants } from "motion/react";

export const sectionVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

export const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: "easeOut",
        },
    },
};

export const imageReveal: Variants = {
    hidden: {
        opacity: 0,
        y: 16,
        scale: 0.985,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.65,
            ease: "easeOut",
        },
    },
};

export const listContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.88,
            delayChildren: 0.04,
        },
    },
};

export const listItem: Variants = {
    hidden: {
        opacity: 0,
        x: -14,
        y: 6,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 0.2,
            ease: "easeOut",
        },
    },
};

export const ctaReveal: Variants = {
    hidden: {
        opacity: 0,
        y: 18,
        scale: 0.985,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.55,
            ease: "easeOut",
        },
    },
};

export const defaultViewport = {
    once: true,
    amount: 0.18
};