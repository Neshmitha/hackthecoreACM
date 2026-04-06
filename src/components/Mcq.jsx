import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const mcqSets = [
    {
        id: 1, 
        finalPasskey: "210",
        setName: "Set 1: Python & Logic",
        concept: "Variables and Basic Arithmetic",
        revealedCodeParts: [
            "x = 8",
            "y = 1",
            "z = x + y",
            "my_list = [10, 20, 30, 40, 50, 60]",
            "base = z + len(my_list)",
            "a = 5",
            "b = 12",
            "c = a * b",
            "d = base * 10",
            "e = d + c",
            "f = e / 1",
            "print(int(f))"
        ],
        questions: [
            { q: "In Python, which operator is used for 'Floor Division'?", options: ["A) /", "B) //", "C) %", "D) **"], correctIndex: 1 },
            { q: "What is the output of print(2 ** 3)?", options: ["A) 6", "B) 5", "C) 8", "D) 9"], correctIndex: 2 },
            { q: "Which of these is a valid variable name in Python?", options: ["A) 2_var", "B) my-var", "C) my_var", "D) class"], correctIndex: 2 },
            { q: "What is the result of 10 % 3?", options: ["A) 3", "B) 1", "C) 0", "D) 3.33"], correctIndex: 1 },
            { q: "Which function is used to get the length of a list or string?", options: ["A) size()", "B) count()", "C) length()", "D) len()"], correctIndex: 3 },
            { q: "Which of these is NOT a Python built-in data type?", options: ["A) list", "B) set", "C) array", "D) tuple"], correctIndex: 2 },
            { q: "Study the sunrise/shadow problem in the image. Which direction is Udai facing?", options: ["A", "B", "C", "D"], correctIndex: 2, image: "/4.jpeg" },
            { q: "Study the logic in the image. What is the missing number?", options: ["A", "B", "C", "D"], correctIndex: 3, image: "/5.jpeg" },
            { q: "Arrange the words shown into a meaningful sequence.", options: ["A", "B", "C", "D"], correctIndex: 2, image: "/2.jpeg" },
            { q: "Which number replaces the question mark in the circle pattern?", options: ["A", "B", "C", "D"], correctIndex: 1, image: "/1.jpeg" },
            { q: "Study the family tree and relate the final person to B.", options: ["a", "b", "c", "d"], correctIndex: 1, image: "/7.jpeg" },
            { q: "Find the missing value in the matrix pattern.", options: ["24", "28", "32", "36"], correctIndex: 2, image: "/10.jpeg" }
        ]
    },
    {
        id: 2, 
        finalPasskey: "60",
        setName: "Set 2: C Programming Basics",
        concept: "Data Types and Simple Loops",
        revealedCodeParts: [
            "int a = 4;",
            "int b = 11;",
            "int count = 0;",
            "for(int i = 0; i < a; i++) { count += 2; }",
            "int x = count + b + 1;",
            "int y = 5;",
            "int z = 8;",
            "int result = x + (y * z);",
            "result = result - (x / 2);",
            "int modifier = 10;",
            "int final_val = result + modifier;",
            "printf(\"%d\", final_val);"
        ],
        questions: [
            { q: "Which format specifier is used to print an integer in C?", options: ["A) %f", "B) %c", "C) %d", "D) %s"], correctIndex: 2 },
            { q: "What is the size of an int data type in most 32-bit systems?", options: ["A) 1 Byte", "B) 2 Bytes", "C) 4 Bytes", "D) 8 Bytes"], correctIndex: 2 },
            { q: "How do you start a single-line comment in C?", options: ["A) #", "B) //", "C) /*", "D) --"], correctIndex: 1 },
            { q: "Which of these is the 'Address of' operator in C?", options: ["A) *", "B) &", "C) %", "D) $"], correctIndex: 1 },
            { q: "What is the value of 5 + 2 * 3 in C?", options: ["A) 21", "B) 11", "C) 10", "D) 15"], correctIndex: 1 },
            { q: "Which of the following is used to terminate a loop in C?", options: ["A) stop", "B) break", "C) exit", "D) return"], correctIndex: 1 },
            { q: "Study the sequence of symbols. Which figure logically follows the pattern?", options: ["1", "2", "3", "4", "5"], correctIndex: 3, image: "/15.jpeg" },
            { q: "Study the family tree and relate the final person to B.", options: ["a", "b", "c", "d"], correctIndex: 1, image: "/7.jpeg" },
            { q: "Which number replaces the question mark in the circle pattern?", options: ["A", "B", "C", "D"], correctIndex: 1, image: "/1.jpeg" },
            { q: "Find the missing value in the matrix pattern.", options: ["24", "28", "32", "36"], correctIndex: 2, image: "/10.jpeg" },
            { q: "Arrange the words shown into a meaningful sequence.", options: ["A", "B", "C", "D"], correctIndex: 2, image: "/2.jpeg" },
            { q: "Study the Sunrise/Shadow problem in the image. Which direction is Udai facing?", options: ["A", "B", "C", "D"], correctIndex: 2, image: "/4.jpeg" }
        ]
    },
    {
        id: 3, 
        finalPasskey: "34",
        setName: "Set 3: C Logic & Ages",
        concept: "Increment operators and basic pointer-style logic",
        revealedCodeParts: [
            "int val_q1 = 5;",
            "int val_q3 = 2;",
            "int val_q5 = 1;",
            "int base = (val_q1 * val_q3) + (val_q5 * 4);",
            "int result = base + 10;",
            "int x = 5;",
            "int y = 5;",
            "int total = result + x + y;",
            "int discount = 10;",
            "int sub = total - discount;",
            "int final_out = sub + 10;",
            "printf(\"%d\", final_out);"
        ],
        questions: [
            { q: "What is the value of x after: int x = 5; int y = x++;?", options: ["A) 6", "B) 5", "C) 4", "D) 7"], correctIndex: 1 },
            { q: "Which of these is the 'Dereference' operator in C?", options: ["A) &", "B) #", "C) *", "D) @"], correctIndex: 2 },
            { q: "In C, what does 5 / 2 evaluate to?", options: ["A) 2.5", "B) 2", "C) 3", "D) 0"], correctIndex: 1 },
            { q: "Which header file is required for malloc()?", options: ["A) stdio.h", "B) conio.h", "C) stdlib.h", "D) math.h"], correctIndex: 2 },
            { q: "What is the size of a char in C?", options: ["A) 1 Byte", "B) 2 Bytes", "C) 4 Bytes", "D) 8 Bytes"], correctIndex: 0 },
            { q: "What is the output of: int a=10, b=20; a=a+b; b=a-b; a=a-b; printf(\"%d %d\", a, b);", options: ["A) 10 20", "B) 20 10", "C) 30 30", "D) 0 0"], correctIndex: 1 },
            { q: "Find the missing number in the logic sequence provided.", options: ["A", "B", "C", "D"], correctIndex: 3, image: "/5.jpeg" },
            { q: "Study the family tree and relate the final person to B.", options: ["a", "b", "c", "d"], correctIndex: 1, image: "/7.jpeg" },
            { q: "Study the sequence of symbols. Which figure logically follows the pattern?", options: ["1", "2", "3", "4", "5"], correctIndex: 3, image: "/15.jpeg" },
            { q: "Which number replaces the question mark in the circle pattern?", options: ["A", "B", "C", "D"], correctIndex: 1, image: "/1.jpeg" },
            { q: "Arrange the words shown into a meaningful sequence.", options: ["A", "B", "C", "D"], correctIndex: 2, image: "/2.jpeg" },
            { q: "Study the Sunrise/Shadow problem in the image. Which direction is Udai facing?", options: ["A", "B", "C", "D"], correctIndex: 2, image: "/4.jpeg" }
        ]
    },
    {
        id: 4, 
        finalPasskey: "62",
        setName: "Set 4: Python Slice & Sift",
        concept: "Negative indexing, slicing, and logical operators",
        revealedCodeParts: [
            "a = 30",
            "b = 12",
            "limit = 4",
            "bonus = 10 if not False else 0",
            "total = a + b + bonus",
            "x = 5",
            "y = 5",
            "step = total + x",
            "base = step + y",
            "final = base",
            "result = final",
            "print(result)"
        ],
        questions: [
            { q: "In Python, what value is list[-1] if list = [10, 20, 30]?", options: ["A) 10", "B) 20", "C) 30", "D) Error"], correctIndex: 2 },
            { q: "What is the output of bool(\"\") in Python?", options: ["A) True", "B) False", "C) None", "D) 0"], correctIndex: 1 },
            { q: "What is the result of 3 * 3 + 3?", options: ["A) 18", "B) 9", "C) 12", "D) 27"], correctIndex: 2 },
            { q: "Which keyword is used to handle exceptions in Python?", options: ["A) catch", "B) except", "C) error", "D) try"], correctIndex: 1 },
            { q: "What does range(5) generate?", options: ["A) 1 to 5", "B) 0 to 4", "C) 0 to 5", "D) 1 to 4"], correctIndex: 1 },
            { q: "What is the output of 'hello'[::-1] in Python?", options: ["A) hello", "B) olleh", "C) h", "D) error"], correctIndex: 1 },
            { q: "Which number replaces the question mark in the circle pattern?", options: ["A", "B", "C", "D"], correctIndex: 1, image: "/1.jpeg" },
            { q: "Find the missing value in the matrix pattern.", options: ["24", "28", "32", "36"], correctIndex: 2, image: "/10.jpeg" },
            { q: "Study the family tree and relate the final person to B.", options: ["a", "b", "c", "d"], correctIndex: 1, image: "/7.jpeg" },
            { q: "Study the Sunrise/Shadow problem in the image. Which direction is Udai facing?", options: ["A", "B", "C", "D"], correctIndex: 2, image: "/4.jpeg" },
            { q: "Study the sequence of symbols. Which figure logically follows the pattern?", options: ["1", "2", "3", "4", "5"], correctIndex: 3, image: "/15.jpeg" },
            { q: "Arrange the words shown into a meaningful sequence.", options: ["A", "B", "C", "D"], correctIndex: 2, image: "/2.jpeg" }
        ]
    }
];

const Mcq = ({ teamData, round1Passkey, onComplete }) => {
    const [mcqSet, setMcqSet] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [passkeyInput, setPasskeyInput] = useState('');
    const [entryPasskeyInput, setEntryPasskeyInput] = useState('');
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [attempts, setAttempts] = useState({});
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let pool = [];
        const rollNo = teamData?.members?.[0]?.rollNo || "";
        const is25 = /1602-25-/i.test(rollNo);
        
        if (is25) {
            pool = [mcqSets[0], mcqSets[1]]; // Set 1 & 2
        } else {
            pool = [mcqSets[2], mcqSets[3]]; // Set 3 & 4
        }
        
        const selectedSet = pool[Math.floor(Math.random() * pool.length)];
        setMcqSet(selectedSet);
        setAnswers(new Array(selectedSet.questions.length).fill(null));
        setAttempts({});
        setPasskeyInput('');
        setErrorMsg('');
    }, [teamData]);

    const handleOptionClick = (qIndex, optIndex) => {
        if (answers[qIndex] !== null) return;

        const currentAttempts = (attempts[qIndex] || 0) + 1;
        setAttempts(prev => ({ ...prev, [qIndex]: currentAttempts }));

        if (mcqSet.questions[qIndex].correctIndex === optIndex) {
            const newAns = [...answers];
            newAns[qIndex] = true;
            setAnswers(newAns);
            
            // Check if all answered correctly
            if (newAns.every(ans => ans === true)) {
                setIsComplete(true);
            }
        } else {
            const el = document.getElementById(`opt-${qIndex}-${optIndex}`);
            el.classList.add('incorrect');
            setTimeout(() => el.classList.remove('incorrect'), 1000);

            if (currentAttempts >= 2) {
                const newAns = [...answers];
                newAns[qIndex] = false; // Failed after 2 tries
                setAnswers(newAns);
                setErrorMsg("MISSION FAILED: Question Locked! No more attempts allowed.");
            }
        }
    };

    const handleEntrySubmit = () => {
        if (entryPasskeyInput.trim().toUpperCase() === round1Passkey.trim().toUpperCase()) {
            setIsUnlocked(true);
            setErrorMsg("");
        } else {
            setErrorMsg("Incorrect Entry Passkey. Please use the word you unscrambled!");
        }
    };

    const handlePasskeySubmit = () => {
        if (passkeyInput.trim().toUpperCase() === mcqSet.finalPasskey.trim().toUpperCase()) {
            onComplete();
        } else {
            setErrorMsg("Incorrect passkey. Please solve the code correctly!");
        }
    };

    if (!mcqSet) return <div style={{ color: 'white', textAlign: 'center', padding: '50px' }}>Loading...</div>;

    if (!isUnlocked) {
        return (
            <motion.div 
                className="glass-card flex-center" 
                style={{ maxWidth: '400px', margin: '100px auto', textAlign: 'center' }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
            >
                <h2 className="neon-text">Round 2 Locked 🔒</h2>
                <p style={{ marginBottom: '20px' }}>To start the MCQs, please enter the Entry Passkey (the word you unscrambled in Round 1):</p>
                <input 
                    type="text" 
                    className="modern-input" 
                    placeholder="Enter Unscrambled Word"
                    value={entryPasskeyInput}
                    onChange={(e) => setEntryPasskeyInput(e.target.value)}
                    style={{ marginBottom: '20px', textAlign: 'center' }}
                />
                <button className="registration-action-btn" onClick={handleEntrySubmit}>Unlock Round 2 🔓</button>
                {errorMsg && <p style={{ color: '#f44336', marginTop: '10px' }}>{errorMsg}</p>}
            </motion.div>
        );
    }

    const allAnswered = answers.every(ans => ans === true);

    return (
        <motion.div
            className="glass-card"
            style={{ maxWidth: '1100px', margin: '0 auto', padding: '30px' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="neon-text" style={{ textAlign: 'center', marginBottom: '30px' }}>Round 2</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '30px', alignItems: 'start' }}>
                {/* LEFT SIDE: QUESTIONS */}
                <div className="mcq-scroll" style={{ maxHeight: '700px', overflowY: 'auto', paddingRight: '15px' }}>
                    <p style={{ color: '#aaa', fontSize: '1rem', marginBottom: '25px', padding: '10px', background: 'rgba(0, 229, 255, 0.05)', borderRadius: '8px', borderLeft: '4px solid #00e5ff' }}>
                        💡 <strong>Strategy:</strong> Answer each question correctly to reveal a line of "Broken Code" on the right. Solve the code to find the passkey!
                    </p>
                    {mcqSet.questions.map((q, qIndex) => (
                        <div key={qIndex} className="mcq-card" style={{ marginBottom: '30px', padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: answers[qIndex] === false ? '2px solid #f44336' : '1px solid rgba(255,255,255,0.1)' }}>
                            <h4 style={{ margin: '0 0 15px 0', fontSize: '1.2rem', color: answers[qIndex] === false ? '#f44336' : '#00e5ff', fontFamily: 'Rajdhani, sans-serif' }}>{qIndex + 1}. {q.q}</h4>
                            
                            {q.image && (
                                <div style={{ marginBottom: '20px', textAlign: 'center', background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '8px', border: '1px solid rgba(0, 229, 255, 0.1)' }}>
                                    <img src={q.image} alt="Question figure" style={{ maxWidth: '100%', maxHeight: '300px', margin: '0 auto', borderRadius: '4px' }} />
                                </div>
                            )}

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontFamily: 'Rajdhani, sans-serif' }}>
                                {q.options.map((opt, optIndex) => {
                                    const isCorrect = answers[qIndex] === true && q.correctIndex === optIndex;
                                    const isLocked = answers[qIndex] !== null;
                                    const isFailed = answers[qIndex] === false;
                                    
                                    return (
                                        <div
                                            key={optIndex}
                                            id={`opt-${qIndex}-${optIndex}`}
                                            className={`mcq-option ${isCorrect ? 'correct' : ''} ${isLocked ? 'locked' : ''} ${isFailed ? 'failed' : ''}`}
                                            style={{
                                                padding: '10px 15px',
                                                background: isCorrect ? 'rgba(0, 229, 255, 0.25)' : isFailed ? 'rgba(244, 67, 54, 0.2)' : 'rgba(255,255,255,0.03)',
                                                borderRadius: '8px',
                                                cursor: isLocked ? 'default' : 'pointer',
                                                border: isCorrect ? '2px solid #00e5ff' : isFailed ? '2px solid #f44336' : '1px solid rgba(0, 229, 255, 0.2)',
                                                color: isCorrect ? '#00e5ff' : isFailed ? '#f44336' : '#fff',
                                                fontSize: '1rem',
                                                fontWeight: 'bold',
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                opacity: isLocked && !isCorrect && !isFailed ? 0.4 : 1,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                minHeight: '40px',
                                                boxShadow: isLocked && isCorrect ? '0 0 10px rgba(0, 229, 255, 0.3)' : 'none',
                                                textTransform: opt.length === 1 ? 'uppercase' : 'none'
                                            }}
                                            onClick={() => handleOptionClick(qIndex, optIndex)}
                                        >
                                            <span style={{ pointerEvents: 'none' }}>{opt}</span>
                                        </div>
                                    );
                                })}
                            </div>
                            {answers[qIndex] === false && (
                                <p style={{ color: '#f44336', fontSize: '0.85rem', marginTop: '10px', fontStyle: 'italic' }}>⚠️ Locked: 2 incorrect attempts. No more tries allowed.</p>
                            )}
                        </div>
                    ))}
                    {/* Removed Reset Button as per user request: "once lost they lost" */}
                </div>

                {/* RIGHT SIDE: PROGRESSIVE CODE REVEAL */}
                <div style={{ background: '#0d1117', borderRadius: '15px', padding: '25px', border: '1px solid #30363d', position: 'sticky', top: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid #30363d', paddingBottom: '10px' }}>
                        <span style={{ color: '#58a6ff', fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#00e5ff' }}></span>
                            REVEALED_LOGIC.{mcqSet.setName.toLowerCase().includes('python') ? 'py' : 'c'}
                        </span>
                        <span style={{ fontSize: '0.8rem', color: '#8b949e' }}>Read-Only</span>
                    </div>

                    <div style={{ fontFamily: 'Fira Code, monospace', fontSize: '1rem', lineHeight: '1.6' }}>
                        {mcqSet.revealedCodeParts.map((line, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: answers[idx] ? 1 : 0.15, x: 0 }}
                                style={{ 
                                    padding: '6px 10px',
                                    marginBottom: '4px',
                                    borderRadius: '4px',
                                    background: answers[idx] ? 'rgba(0, 229, 255, 0.05)' : 'transparent',
                                    color: answers[idx] ? '#00e5ff' : '#444',
                                    display: 'flex',
                                    gap: '15px',
                                    borderLeft: answers[idx] ? '3px solid #00e5ff' : '3px solid transparent'
                                }}
                            >
                                <span style={{ color: '#8b949e', minWidth: '20px', userSelect: 'none' }}>{idx + 1}</span>
                                <span style={{ whiteSpace: 'pre-wrap' }}>
                                    {answers[idx] ? line : ""}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {allAnswered && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ marginTop: '30px', background: 'rgba(0, 229, 255, 0.05)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(0, 229, 255, 0.3)' }}
                        >
                            <h4 style={{ color: '#00e5ff', margin: '0 0 15px 0', fontSize: '1rem' }}>🔓 Code Decrypted!</h4>
                            <p style={{ fontSize: '0.85rem', color: '#ccc', marginBottom: '15px' }}>Solve the revealed code logic above and enter the final Passkey:</p>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <input 
                                    type="text" 
                                    className="modern-input" 
                                    placeholder="Final Output"
                                    value={passkeyInput}
                                    onChange={(e) => setPasskeyInput(e.target.value)}
                                    style={{ margin: 0, flex: 1, textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}
                                />
                                <button className="registration-action-btn" style={{ margin: 0, padding: '0 25px' }} onClick={handlePasskeySubmit}>Unlock Round 3</button>
                            </div>
                            {errorMsg && <p style={{ color: '#f85149', marginTop: '10px', fontSize: '0.9rem', fontWeight: 'bold' }}>{errorMsg}</p>}
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default Mcq;
