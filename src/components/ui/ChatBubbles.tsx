'use client';

import React from 'react';
import { motion } from 'framer-motion';

{
    id: 1,
        text: "Je ne sais pas comment te le dire...",
            sender: 'him',
                delay: 0.2
},
{
    id: 2,
        text: "Dis-moi... ❤️",
            sender: 'her',
                delay: 0.8
},
{
    id: 3,
        text: "J'ai trouvé un complice pour le faire.",
            sender: 'him',
                delay: 1.6
},
{
    id: 4,
        text: "🧸✨",
            sender: 'him',
                isEmoji: true,
                    delay: 2.2
}
];

export default function ChatBubbles() {
    return (
        <div className="flex flex-col gap-3 w-full max-w-[280px] font-sans text-sm">
            {messages.map((msg) => (
                <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        delay: msg.delay,
                        duration: 0.4,
                        type: "spring",
                        stiffness: 200
                    }}
                    className={`relative p-3 rounded-2xl max-w-[85%] shadow-sm ${msg.sender === 'him'
                        ? 'self-end bg-gradient-to-br from-[#FF1493] to-[#FF69B4] text-white rounded-br-sm'
                        : 'self-start bg-white text-gray-700 rounded-bl-sm border border-pink-50'
                        } ${msg.isEmoji ? 'text-3xl bg-transparent shadow-none p-0' : ''}`}
                >
                    {!msg.isEmoji && (
                        <p className="leading-tight">{msg.text}</p>
                    )}

                    {msg.isEmoji && (
                        <span className="block animate-bounce">{msg.text}</span>
                    )}
                </motion.div>
            ))}

            {/* Typing indicator simulating "Her" writing back */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8 }}
                className="self-start bg-white border border-pink-50 rounded-full px-3 py-2 mt-1"
            >
                <div className="flex gap-1">
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                </div>
            </motion.div>
        </div>
    );
}
