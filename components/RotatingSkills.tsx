'use client';
import { motion } from 'framer-motion';

interface RotatingSkillsProps {
    skills: string[];
}

export default function RotatingSkills({ skills }: RotatingSkillsProps) {
    const radius = 200; // Radius of the circle
    const skillCount = skills.length;

    return (
        <div className="relative flex items-center justify-center" style={{ height: '500px' }}>
            {/* Center circle */}
            <div className="absolute z-10 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl">
                <div className="text-center">
                    <div className="text-sm font-semibold text-white">Technical</div>
                    <div className="text-sm font-semibold text-white">Skills</div>
                </div>
            </div>

            {/* Rotating skills */}
            {skills.map((skill, index) => {
                const angle = (index / skillCount) * 360;

                return (
                    <motion.div
                        key={skill}
                        className="absolute"
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        style={{
                            transformOrigin: '50% 50%',
                        }}
                    >
                        <div
                            className="absolute"
                            style={{
                                left: `calc(50% + ${radius * Math.cos((angle * Math.PI) / 180)}px)`,
                                top: `calc(50% + ${radius * Math.sin((angle * Math.PI) / 180)}px)`,
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            <motion.div
                                animate={{
                                    rotate: -360,
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                                className="glass rounded-full px-6 py-3 whitespace-nowrap"
                            >
                                <span className="font-semibold text-indigo-700">{skill}</span>
                            </motion.div>
                        </div>
                    </motion.div>
                );
            })}

            {/* Circular path indicator */}
            <svg
                className="absolute"
                width={radius * 2 + 100}
                height={radius * 2 + 100}
                style={{ pointerEvents: 'none' }}
            >
                <circle
                    cx={(radius * 2 + 100) / 2}
                    cy={(radius * 2 + 100) / 2}
                    r={radius}
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.3"
                />
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}
