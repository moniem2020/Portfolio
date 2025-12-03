'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CircularProgressProps {
    percentage: number;
    label: string;
    size?: number;
    strokeWidth?: number;
    delay?: number;
    color?: string;
}

export default function CircularProgress({
    percentage,
    label,
    size = 140,
    strokeWidth = 8,
    delay = 0,
    color = '#6366f1',
}: CircularProgressProps) {
    const [progress, setProgress] = useState(0);
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(percentage);
        }, delay);
        return () => clearTimeout(timer);
    }, [percentage, delay]);

    return (
        <div className="flex flex-col items-center gap-3">
            <div className="relative" style={{ width: size, height: size }}>
                {/* Background circle */}
                <svg
                    className="transform -rotate-90"
                    width={size}
                    height={size}
                >
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="#e0e7ff"
                        strokeWidth={strokeWidth}
                        fill="none"
                    />
                    {/* Progress circle */}
                    <motion.circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke={color}
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{
                            duration: 1.5,
                            ease: 'easeOut',
                            delay: delay / 1000,
                        }}
                    />
                </svg>

                {/* Percentage text */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                        className="text-2xl font-bold text-indigo-700"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: delay / 1000 + 0.5,
                        }}
                    >
                        {Math.round(progress)}%
                    </motion.span>
                </div>
            </div>

            {/* Label */}
            <motion.p
                className="text-center text-sm font-semibold text-slate-700"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    delay: delay / 1000 + 0.3,
                }}
            >
                {label}
            </motion.p>
        </div>
    );
}
