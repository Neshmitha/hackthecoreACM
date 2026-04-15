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
            { q: "What is the output?\nint x = 10;\nint *p = &x;\n*p = 20;\nprintf(\"%d\", x);", options: ["A) 10", "B) 20", "C) Address of x", "D) Error"], correctIndex: 1 },
            { q: "What is the output?\na = [1, 2, 3]\nprint(a * 2)", options: ["A) [2, 4, 6]", "B) [1, 2, 3, 1, 2, 3]", "C) [1, 4, 9]", "D) Error"], correctIndex: 1 },
            { q: "Which keyword is used to transfer control from a function back to the calling function?", options: ["A) switch", "B) goto", "C) go back", "D) return"], correctIndex: 3 },
            { q: "What will the function rewind() do?", options: ["A) Reposition to character reverse", "B) Reposition to end of file", "C) Reposition to beginning of line", "D) Reposition to beginning of file"], correctIndex: 3 },
            { q: "What do the 'c' and 'v' in argv stand for?", options: ["A) control / vector", "B) count / vertex", "C) count / vector", "D) configuration / visibility"], correctIndex: 2 },
            { q: "What is the output?\nx = \"5\"\nprint(x * 3)", options: ["A) 15", "B) 555", "C) Error", "D) 5*3"], correctIndex: 1 },
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
            { q: "What is the output?\na = [1, 2, 3]\nprint(a * 2)", options: ["A) [2, 4, 6]", "B) [1, 2, 3, 1, 2, 3]", "C) [1, 4, 9]", "D) Error"], correctIndex: 1 },
            { q: "Which keyword is used to transfer control from a function back to the calling function?", options: ["A) switch", "B) goto", "C) go back", "D) return"], correctIndex: 3 },
            { q: "What do the 'c' and 'v' in argv stand for?", options: ["A) control / vector", "B) count / vertex", "C) count / vector", "D) configuration / visibility"], correctIndex: 2 },
            { q: "What command is used to remove files in Linux?", options: ["A) dm", "B) rm", "C) delete", "D) erase"], correctIndex: 1 },
            { q: "What is the output?\nx = \"5\"\nprint(x * 3)", options: ["A) 15", "B) 555", "C) Error", "D) 5*3"], correctIndex: 1 },
            { q: "What is the result of the following expression in C?\nint result = 5 + 10 / 2 * 3;", options: ["A) 22.5", "B) 20", "C) 15", "D) 25"], correctIndex: 1 },
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
            { q: "What is the output?\nString s1 = \"ACUMEN\";\nString s2 = new String(\"ACUMEN\");\nString s3 = s2.intern();\nSystem.out.println((s1 == s2) + \" \" + (s1 == s3));", options: ["A) true true", "B) false false", "C) true false", "D) false true"], correctIndex: 3 },
            { q: "What is the output?\nint arr[] = {10, 20, 30, 40, 50};\nint *p = arr;\nprintf(\"%d\", *(p + 3) - *(p + 1));", options: ["A) 10", "B) 20", "C) 30", "D) Error"], correctIndex: 1 },
            { q: "What is the output?\ndef add_item(item, box=[]):\n    box.append(item)\n    return box\nprint(add_item(1), end=' ')\nprint(add_item(2))", options: ["A) [1] [2]", "B) [1] [1]", "C) [1] [1, 2]", "D) Error"], correctIndex: 2 },
            { q: "Which of the following is true about the WHERE and HAVING clauses?", options: ["A) They are interchangeable", "B) WHERE filters after aggregation", "C) WHERE filters before aggregation, HAVING after", "D) HAVING only for SELECT"], correctIndex: 2 },
            { q: "What happens?\nclass Test {\n    static int x = 10;\n}\nTest obj = null;\nSystem.out.println(obj.x);", options: ["A) NullPointerException", "B) Prints 10", "C) Compilation Error", "D) Prints 0"], correctIndex: 1 },
            { q: "In Python:\na=256, b=256\nx=257, y=257\nWhat is true for: (a is b) and (x is y)?", options: ["A) True True", "B) False False", "C) True False", "D) Error"], correctIndex: 2 },
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
            { q: "What is the output?\nint arr[] = {10, 20, 30, 40, 50};\nint *p = arr;\nprintf(\"%d\", *(p + 3) - *(p + 1));", options: ["A) 10", "B) 20", "C) 30", "D) Error"], correctIndex: 1 },
            { q: "Which of the following is true about the WHERE and HAVING clauses?", options: ["A) They are interchangeable", "B) WHERE filters after aggregation", "C) WHERE filters before aggregation, HAVING after", "D) HAVING only for SELECT"], correctIndex: 2 },
            { q: "What happens?\nclass Test {\n    static int x = 10;\n}\nTest obj = null;\nSystem.out.println(obj.x);", options: ["A) NullPointerException", "B) Prints 10", "C) Compilation Error", "D) Prints 0"], correctIndex: 1 },
            { q: "What is the output?\nx = 10\ndef func():\n    x = 20\nfunc()\nprint(x)", options: ["A) 20", "B) 10", "C) None", "D) Error"], correctIndex: 1 },
            { q: "Which join returns all rows from the left table and matched rows from the right, with NULLs for no match?", options: ["A) Inner Join", "B) Left Join", "C) Right Join", "D) Full Join"], correctIndex: 1 },
            { q: "In Python:\na=256, b=256\nx=257, y=257\nWhat is true for: (a is b) and (x is y)?", options: ["A) True True", "B) False False", "C) True False", "D) Error"], correctIndex: 2 },
            { q: "Which number replaces the question mark in the circle pattern?", options: ["A", "B", "C", "D"], correctIndex: 1, image: "/1.jpeg" },
            { q: "Find the missing value in the matrix pattern.", options: ["24", "28", "32", "36"], correctIndex: 2, image: "/10.jpeg" },
            { q: "Study the family tree and relate the final person to B.", options: ["a", "b", "c", "d"], correctIndex: 1, image: "/7.jpeg" },
            { q: "Study the Sunrise/Shadow problem in the image. Which direction is Udai facing?", options: ["A", "B", "C", "D"], correctIndex: 2, image: "/4.jpeg" },
            { q: "Study the sequence of symbols. Which figure logically follows the pattern?", options: ["1", "2", "3", "4", "5"], correctIndex: 3, image: "/15.jpeg" },
            { q: "Arrange the words shown into a meaningful sequence.", options: ["A", "B", "C", "D"], correctIndex: 2, image: "/2.jpeg" }
        ]
    }
];

const Mcq = ({ teamData, round1Passkey, onComplete, onPenalty }) => {
    const [mcqSet, setMcqSet] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [passkeyInput, setPasskeyInput] = useState('');
    const [entryPasskeyInput, setEntryPasskeyInput] = useState('');
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [attempts, setAttempts] = useState({});
    const [isComplete, setIsComplete] = useState(false);
    const [showPenaltyToast, setShowPenaltyToast] = useState(false);
    const [lastPenalty, setLastPenalty] = useState(0);

    useEffect(() => {
        let pool = [];
        const studyYear = teamData?.year || 1;
        const isFirstYear = studyYear === 1;
        
        if (isFirstYear) {
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

            // Progressive penalty: 20s, 40s, 60s
            let penalty = 20;
            if (currentAttempts === 2) penalty = 40;
            else if (currentAttempts >= 3) penalty = 60;
            
            setLastPenalty(penalty);
            if (onPenalty) onPenalty(penalty);
            setShowPenaltyToast(true);
            setTimeout(() => setShowPenaltyToast(false), 2000);
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

            {showPenaltyToast && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    style={{
                        position: 'fixed',
                        top: '10%',
                        left: '50%',
                        x: '-50%',
                        background: 'rgba(244, 67, 54, 0.9)',
                        color: 'white',
                        padding: '10px 25px',
                        borderRadius: '50px',
                        fontWeight: 'bold',
                        zIndex: 1000,
                        boxShadow: '0 0 20px rgba(244, 67, 54, 0.4)',
                        border: '1px solid #f44336',
                        fontSize: '1.2rem',
                        letterSpacing: '1px'
                    }}
                >
                    ⚠️ PENALTY: +{lastPenalty}s
                </motion.div>
            )}
            
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '30px', alignItems: 'start' }}>
                {/* LEFT SIDE: QUESTIONS */}
                <div className="mcq-scroll" style={{ maxHeight: '700px', overflowY: 'auto', paddingRight: '15px' }}>
                    <p style={{ color: '#aaa', fontSize: '1rem', marginBottom: '25px', padding: '10px', background: 'rgba(0, 229, 255, 0.05)', borderRadius: '8px', borderLeft: '4px solid #00e5ff' }}>
                        💡 <strong>Strategy:</strong> Answer each question correctly to reveal a line of "Broken Code" on the right. Solve the code to find the passkey!
                    </p>
                    {mcqSet.questions.map((q, qIndex) => (
                        <div key={qIndex} className="mcq-card" style={{ marginBottom: '30px', padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <h4 style={{ margin: '0 0 15px 0', fontSize: '1.2rem', color: '#00e5ff', fontFamily: 'Rajdhani, sans-serif', whiteSpace: 'pre-wrap' }}>{qIndex + 1}. {q.q}</h4>
                            
                            {q.image && (
                                <div style={{ marginBottom: '20px', textAlign: 'center', background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '8px', border: '1px solid rgba(0, 229, 255, 0.1)' }}>
                                    <img src={q.image} alt="Question figure" style={{ maxWidth: '100%', maxHeight: '300px', margin: '0 auto', borderRadius: '4px' }} />
                                </div>
                            )}

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontFamily: 'Rajdhani, sans-serif' }}>
                                {q.options.map((opt, optIndex) => {
                                    const isCorrect = answers[qIndex] === true && q.correctIndex === optIndex;
                                    const isLocked = answers[qIndex] === true;
                                    
                                    
                                    return (
                                        <div
                                            key={optIndex}
                                            id={`opt-${qIndex}-${optIndex}`}
                                            className={`mcq-option ${isCorrect ? 'correct' : ''} ${isLocked ? 'locked' : ''}`}
                                            style={{
                                                padding: '10px 15px',
                                                background: isCorrect ? 'rgba(0, 229, 255, 0.25)' : 'rgba(255,255,255,0.03)',
                                                borderRadius: '8px',
                                                cursor: isLocked ? 'default' : 'pointer',
                                                border: isCorrect ? '2px solid #00e5ff' : '1px solid rgba(0, 229, 255, 0.2)',
                                                color: isCorrect ? '#00e5ff' : '#fff',
                                                fontSize: '1rem',
                                                fontWeight: 'bold',
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                minHeight: '40px',
                                                boxShadow: isCorrect ? '0 0 10px rgba(0, 229, 255, 0.3)' : 'none',
                                                textTransform: opt.length === 1 ? 'uppercase' : 'none'
                                            }}
                                            onClick={() => handleOptionClick(qIndex, optIndex)}
                                        >
                                            <span style={{ pointerEvents: 'none' }}>{opt}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

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
