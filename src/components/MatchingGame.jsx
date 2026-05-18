import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const firstYearQuestions = [
    {
        id: 1,
        title: "Question 1: Structures (Grouping Data Together)",
        theme: "Think of a structure like a student ID card that holds different pieces of information about one person.",
        leftItems: [
            { id: "A", text: "struct Student { ... };" },
            { id: "B", text: "struct Student s1;" },
            { id: "C", text: "Member / Field" },
            { id: "D", text: "The . (Dot operator)" }
        ],
        rightItems: [
            { id: "1", text: "A single piece of information inside the structure (like age or grade)." },
            { id: "2", text: "The blueprint or template that decides what information a Student card should hold." },
            { id: "3", text: "The actual dot symbol used to look inside the structure and grab a specific piece of data." },
            { id: "4", text: "Creating one real, physical student card named s1 using the blueprint." }
        ],
        correctSequence: ["2", "4", "1", "3"]
    },
    {
        id: 2,
        title: "Question 2: Pointers (The Map/Address)",
        theme: "Pointers don't hold normal numbers like scores; they hold the memory address of where a variable is hiding.",
        leftItems: [
            { id: "A", text: "int *ptr;" },
            { id: "B", text: "&myVariable" },
            { id: "C", text: "The & (Ampersand symbol)" },
            { id: "D", text: "*ptr = 20;" }
        ],
        rightItems: [
            { id: "1", text: "\"Go to the address written on the map and change or see the actual value hidden there.\"" },
            { id: "2", text: "Creating a special \"pointer\" variable that can hold the address of a number." },
            { id: "3", text: "The \"Address-of\" operator. It finds the exact house number of a variable in the computer's memory." },
            { id: "4", text: "Think of this as the actual GPS coordinate or house address of a variable." }
        ],
        correctSequence: ["2", "4", "3", "1"]
    },
    {
        id: 3,
        title: "Question 3: Arrays (The Egg Carton)",
        theme: "An array is like an egg carton or a row of lockers where items are lined up in order, starting from locker number 0.",
        leftItems: [
            { id: "A", text: "int scores[5];" },
            { id: "B", text: "Index" },
            { id: "C", text: "scores[0]" },
            { id: "D", text: "\"Out of Bounds\" Error" }
        ],
        rightItems: [
            { id: "1", text: "The address or locker number of an item (always starts at 0, not 1)." },
            { id: "2", text: "Create a row of 5 connected boxes that can each hold a whole number." },
            { id: "3", text: "An accidental mistake where you try to open a locker that doesn't exist (like locker number 10 when you only have 5)." },
            { id: "4", text: "Open and look inside the very first box of the row." }
        ],
        correctSequence: ["2", "1", "4", "3"]
    },
    {
        id: 4,
        title: "Question 4: Loops (Repeating Actions)",
        theme: "Running the same piece of code over and over again until a condition tells it to stop.",
        leftItems: [
            { id: "A", text: "while (energy > 0)" },
            { id: "B", text: "Infinite Loop" },
            { id: "C", text: "Loop Counter (e.g., i++)" },
            { id: "D", text: "break;" }
        ],
        rightItems: [
            { id: "1", text: "A tracking variable (like a lap counter) that goes up by 1 every time the loop completes a turn." },
            { id: "2", text: "Keep running this code as long as my energy is greater than 0." },
            { id: "3", text: "Instantly stop the loop right now and jump out of it completely." },
            { id: "4", text: "A loop that never stops running because the condition is always true (the game freezes!)." }
        ],
        correctSequence: ["2", "4", "1", "3"]
    },
    {
        id: 5,
        title: "Question 5: The Grand Code Mystery",
        theme: "Track the numbers as they change line-by-line! Watch out for math rules, loops, and shortcut operators.",
        codeSnippet: `int d = 8;
int a = d % 4;       // Modulo
int b = a + 1;       // Addition
int c = d - 1;       // Subtraction
for (int i = 0; i < 3; i++) {
    d--;             // Loop
}`,
        leftItems: [
            { id: "A", text: "The final value of a" },
            { id: "B", text: "The final value of b" },
            { id: "C", text: "The final value of c" },
            { id: "D", text: "The final value of d" }
        ],
        rightItems: [
            { id: "1", text: "1" },
            { id: "2", text: "7" },
            { id: "3", text: "0" },
            { id: "4", text: "5" }
        ],
        correctSequence: ["3", "1", "2", "4"]
    }
];

const seniorQuestions = [
    {
        id: 1,
        title: "Question 1: Data Structures in the Real World",
        theme: "Match the data structure to the real-world system architecture where it is the absolute best choice.",
        leftItems: [
            { id: "A", text: "Doubly Linked List" },
            { id: "B", text: "Queue" },
            { id: "C", text: "Stack" },
            { id: "D", text: "Binary Search Tree" }
        ],
        rightItems: [
            { id: "1", text: "Designing the \"Undo\" (Ctrl+Z) memory buffer for a text editor." },
            { id: "2", text: "Implementing an auto-complete search bar or hierarchical file system." },
            { id: "3", text: "Managing printing tasks on a shared server where order of arrival matters." },
            { id: "4", text: "Building the back-and-forth cache navigation of a web browser." }
        ],
        correctSequence: ["4", "3", "1", "2"]
    },
    {
        id: 2,
        title: "Question 2: Algorithmic Strategy Identity",
        theme: "Match the design paradigm to its core behavioral approach.",
        leftItems: [
            { id: "A", text: "Dynamic Programming" },
            { id: "B", text: "Backtracking" },
            { id: "C", text: "Branch and Bound" },
            { id: "D", text: "Greedy Method" }
        ],
        rightItems: [
            { id: "1", text: "Exploring a path, hitting a dead end, and explicitly undoing the last step to try another branch." },
            { id: "2", text: "Breaking a problem into overlapping parts and caching answers in a table to prevent recalculation." },
            { id: "3", text: "Grabbing the immediate best choice at each localized step, hoping it leads to a global optimum." },
            { id: "4", text: "Pruning entire subtrees of a decision tree early if calculations prove they cannot beat the current best score." }
        ],
        correctSequence: ["2", "1", "4", "3"]
    },
    {
        id: 3,
        title: "Question 3: Worst-Case Time Complexities (O)",
        theme: "Match the specific data structure operation to its worst-case performance guarantee.",
        leftItems: [
            { id: "A", text: "Searching for an element in a completely unbalanced, skewed Binary Search Tree." },
            { id: "B", text: "Accessing the n-th node item in a standard Singly Linked List." },
            { id: "C", text: "Popping/Deleting the top item off an active Stack." },
            { id: "D", text: "Finding an item inside a strictly balanced AVL Tree." }
        ],
        rightItems: [
            { id: "1", text: "O(1)" },
            { id: "2", text: "O(log n)" },
            { id: "3", text: "O(n) (Degrades to linear sequence)" },
            { id: "4", text: "O(n) (Must traverse element-by-element)" }
        ],
        correctSequence: ["3", "4", "1", "2"]
    },
    {
        id: 4,
        title: "Question 4: Problem Classification",
        theme: "Match the classical computer science problem to the standard paradigm used to solve it efficiently.",
        leftItems: [
            { id: "A", text: "0/1 Knapsack Problem" },
            { id: "B", text: "N-Queens Placement Matrix" },
            { id: "C", text: "Level-Order Traversal of a Tree Graph" },
            { id: "D", text: "Kruskal's Minimum Spanning Tree (MST)" }
        ],
        rightItems: [
            { id: "1", text: "Backtracking" },
            { id: "2", text: "Dynamic Programming" },
            { id: "3", text: "Greedy Method" },
            { id: "4", text: "Queue (Breadth-First Search)" }
        ],
        correctSequence: ["2", "1", "4", "3"]
    },
    {
        id: 5,
        title: "Question 5: Code Analysis — Hash Table Tracing",
        theme: "Analyze the C code snippet below using Linear Probing collision handling, then match the tracking questions to their final values.",
        codeSnippet: `#include <stdio.h>
#define SIZE 7

int hashFunction(int key) {
    return (key * 3) % SIZE;
}

void insert(int hashTable[], int key) {
    int index = hashFunction(key);
    while (hashTable[index] != -1) {
        index = (index + 1) % SIZE; // Linear Probing
    }
    hashTable[index] = key;
}

int main() {
    int hashTable[SIZE] = {-1, -1, -1, -1, -1, -1, -1};
    insert(hashTable, 4);
    insert(hashTable, 9);
    insert(hashTable, 11);
    insert(hashTable, 16);
    return 0;
}`,
        leftItems: [
            { id: "A", text: "What is the final array index position of the key 11?" },
            { id: "B", text: "What is the final array index position of the key 16?" },
            { id: "C", text: "What is the integer value stored at index 6 of the array?" },
            { id: "D", text: "What raw index does hashFunction(9) yield before linear probing?" }
        ],
        rightItems: [
            { id: "1", text: "9" },
            { id: "2", text: "0" },
            { id: "3", text: "6" },
            { id: "4", text: "1" }
        ],
        correctSequence: ["2", "4", "1", "3"]
    }
];

const MatchingGame = ({ teamData, round1Passkey, onComplete, onPenalty }) => {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [entryPasskeyInput, setEntryPasskeyInput] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [mappings, setMappings] = useState({}); // { leftId: rightId }
    const [draggedItem, setDraggedItem] = useState(null); // rightId being dragged

    const [showPenaltyToast, setShowPenaltyToast] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [isChecking, setIsChecking] = useState(false);

    const isFirstYear = teamData?.year === 1;
    const questionsSet = isFirstYear ? firstYearQuestions : seniorQuestions;
    const q = questionsSet[currentQIndex];

    const handleEntrySubmit = () => {
        if (entryPasskeyInput.trim().toUpperCase() === round1Passkey.trim().toUpperCase()) {
            setIsUnlocked(true);
            setErrorMsg("");
        } else {
            setErrorMsg("Incorrect Passkey. Please solve Round 1 correctly!");
        }
    };

    const handleDragStartRight = (e, rightId) => {
        setDraggedItem({ source: 'right', rightId });
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", rightId);
    };

    const handleDragStartLeft = (e, leftId, rightId) => {
        setDraggedItem({ source: 'left', leftId, rightId });
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", rightId);
    };

    const handleDragEnd = () => {
        setDraggedItem(null);
    };

    const handleDrop = (e, targetLeftId) => {
        e.preventDefault();
        const droppedId = String(e.dataTransfer.getData("text/plain") || (draggedItem ? draggedItem.rightId : "")).trim();
        
        if (droppedId) {
            setMappings(prev => {
                const newMappings = { ...prev };
                
                // If it was dragged from another left slot, remove it from the old slot
                if (draggedItem && draggedItem.source === 'left' && draggedItem.leftId !== targetLeftId) {
                    delete newMappings[draggedItem.leftId];
                }
                
                // If the target slot already has an item, and we dragged from another slot, swap them!
                if (draggedItem && draggedItem.source === 'left' && draggedItem.leftId !== targetLeftId && prev[targetLeftId]) {
                    newMappings[draggedItem.leftId] = prev[targetLeftId];
                }

                newMappings[targetLeftId] = droppedId;
                return newMappings;
            });
            setDraggedItem(null);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    };

    const unmapItem = (leftId) => {
        setMappings(prev => {
            const newMappings = { ...prev };
            delete newMappings[leftId];
            return newMappings;
        });
    };

    const handleCheck = () => {
        // Ensure all are mapped
        const allMapped = q.leftItems.every(l => mappings[l.id]);
        if (!allMapped) {
            setErrorMsg("Please match all items before checking.");
            return;
        }

        setIsChecking(true);
        
        // Extract the user's sequence from top to bottom
        const userSequence = q.leftItems.map(l => String(mappings[l.id] || "").trim());
        const expectedSequence = q.correctSequence.map(s => String(s).trim());
        
        // Compare the user's sequence array strictly against the expected sequence
        const allCorrect = userSequence.length === expectedSequence.length && 
                           userSequence.every((val, index) => val === expectedSequence[index]);

        if (allCorrect) {
            setErrorMsg("");
            setIsChecking(false);
            if (currentQIndex < questionsSet.length - 1) {
                // Move to next question
                setTimeout(() => {
                    setCurrentQIndex(currentQIndex + 1);
                    setMappings({});
                    setAttempts(0);
                }, 1000);
            } else {
                // All questions completed
                setTimeout(() => {
                    onComplete();
                }, 1500);
            }
        } else {
            setIsChecking(false);
            setErrorMsg("Some matches are incorrect. Please try again.");

            const currentAttempts = attempts + 1;
            setAttempts(currentAttempts);

            let penalty = 20;
            if (currentAttempts === 2) penalty = 40;
            else if (currentAttempts >= 3) penalty = 60;

            if (onPenalty) onPenalty(penalty);

            setShowPenaltyToast(penalty);
            setTimeout(() => setShowPenaltyToast(false), 2000);
        }
    };

    if (!isUnlocked) {
        return (
            <motion.div
                className="glass-card flex-center"
                style={{ maxWidth: '400px', margin: '100px auto', textAlign: 'center' }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
            >
                <h2 className="neon-text">Round 2 Locked 🔒</h2>
                <p style={{ marginBottom: '20px' }}>To start Round 2, please enter the Passkey revealed in Round 1:</p>
                <input
                    type="text"
                    className="modern-input"
                    placeholder="Enter Round 1 Passkey"
                    value={entryPasskeyInput}
                    onChange={(e) => setEntryPasskeyInput(e.target.value)}
                    style={{ marginBottom: '20px', textAlign: 'center' }}
                />
                <button className="registration-action-btn" onClick={handleEntrySubmit}>Unlock Round 2 🔓</button>
                {errorMsg && <p style={{ color: '#f44336', marginTop: '10px' }}>{errorMsg}</p>}
            </motion.div>
        );
    }

    // Keep all right items visible to prevent shifting, just grey out the mapped ones
    const isCompletedAll = isChecking && currentQIndex === questionsSet.length - 1 && errorMsg === '';

    return (
        <motion.div
            className="glass-card"
            style={{ maxWidth: '1100px', margin: '0 auto', padding: '30px' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="neon-text" style={{ textAlign: 'center', marginBottom: '10px' }}>Round 2: Code Matcher</h2>

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
                    ⚠️ PENALTY: +{showPenaltyToast}s
                </motion.div>
            )}

            {isCompletedAll ? (
                <div style={{ textAlign: 'center', padding: '50px' }}>
                    <h2 className="neon-text" style={{ fontSize: '2.5rem' }}>🎉 All Matched! 🎉</h2>
                    <p>Decrypting next round access...</p>
                </div>
            ) : (
                <AnimatePresence mode="wait">
                    <motion.div
                        key={q.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                            <h3 style={{ color: '#00e5ff', fontSize: '1.5rem', marginBottom: '10px' }}>{q.title}</h3>
                            <p style={{ color: '#aaa', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto' }}>💡 {q.theme}</p>
                            <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#8b949e' }}>Drag options from the right and drop them next to the correct item on the left.</p>
                        </div>

                        {q.codeSnippet && (
                            <div style={{ background: '#0d1117', padding: '20px', borderRadius: '10px', fontFamily: 'Fira Code, monospace', color: '#58a6ff', marginBottom: '20px', border: '1px solid #30363d', maxWidth: '600px', margin: '0 auto 30px' }}>
                                <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{q.codeSnippet}</pre>
                            </div>
                        )}

                        <div className="matching-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                            {/* Left Side: Targets */}
                            <div className="matching-left">
                                <h4 style={{ color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '10px', marginBottom: '20px' }}>Concepts / Code</h4>
                                {q.leftItems.map(leftItem => {
                                    const matchedRightId = mappings[leftItem.id];
                                    const matchedRightItem = q.rightItems.find(r => r.id === matchedRightId);

                                    return (
                                        <div key={leftItem.id} style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                                            <div style={{
                                                flex: 1,
                                                background: 'rgba(255,255,255,0.05)',
                                                padding: '15px',
                                                borderRadius: '8px',
                                                border: '1px solid rgba(0, 229, 255, 0.2)',
                                                fontFamily: 'Fira Code, monospace',
                                                fontSize: '0.95rem'
                                            }}>
                                                {leftItem.text}
                                            </div>
                                            <div
                                                draggable={!!matchedRightItem}
                                                onDragStart={(e) => matchedRightId && handleDragStartLeft(e, leftItem.id, matchedRightId)}
                                                onDragEnd={handleDragEnd}
                                                onDrop={(e) => handleDrop(e, leftItem.id)}
                                                onDragOver={handleDragOver}
                                                onClick={() => matchedRightId && unmapItem(leftItem.id)}
                                                style={{
                                                    flex: 1.5,
                                                    minHeight: '60px',
                                                    background: matchedRightItem ? 'rgba(0, 229, 255, 0.1)' : 'rgba(0,0,0,0.3)',
                                                    border: matchedRightItem ? '2px solid #00e5ff' : '2px dashed rgba(255,255,255,0.3)',
                                                    borderRadius: '8px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    padding: '10px',
                                                    cursor: matchedRightItem ? 'grab' : 'default',
                                                    transition: 'all 0.3s',
                                                    color: matchedRightItem ? '#fff' : '#666',
                                                    fontSize: '0.9rem',
                                                    textAlign: 'center'
                                                }}
                                            >
                                                {matchedRightItem ? (
                                                    <span><strong style={{ color: '#00e5ff', marginRight: '5px' }}>{matchedRightItem.id})</strong> {matchedRightItem.text}</span>
                                                ) : "Drop Here"}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Right Side: Draggables */}
                            <div className="matching-right" style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <h4 style={{ color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '10px', marginBottom: '20px' }}>Options (Drag these)</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {q.rightItems.map(rightItem => {
                                        const isMapped = Object.values(mappings).includes(rightItem.id);
                                        return (
                                        <div
                                            key={rightItem.id}
                                            draggable={!isMapped}
                                            onDragStart={(e) => !isMapped && handleDragStartRight(e, rightItem.id)}
                                            onDragEnd={handleDragEnd}
                                            style={{
                                                background: isMapped ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 229, 255, 0.05)',
                                                border: isMapped ? '1px dashed rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 229, 255, 0.4)',
                                                padding: '15px',
                                                borderRadius: '8px',
                                                cursor: isMapped ? 'not-allowed' : 'grab',
                                                fontSize: '0.95rem',
                                                color: isMapped ? 'rgba(255,255,255,0.3)' : '#fff',
                                                boxShadow: isMapped ? 'none' : '0 4px 6px rgba(0,0,0,0.1)',
                                                transition: 'transform 0.2s, background 0.2s',
                                                userSelect: 'none',
                                                opacity: isMapped ? 0.5 : 1
                                            }}
                                            onMouseOver={(e) => { if (!isMapped) e.currentTarget.style.background = 'rgba(0, 229, 255, 0.15)' }}
                                            onMouseOut={(e) => { if (!isMapped) e.currentTarget.style.background = 'rgba(0, 229, 255, 0.05)' }}
                                        >
                                            <strong style={{ color: isMapped ? 'rgba(255,255,255,0.3)' : '#00e5ff', marginRight: '10px' }}>{rightItem.id})</strong>
                                            {rightItem.text}
                                        </div>
                                    )})}
                                </div>
                            </div>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '40px' }}>
                            {errorMsg && <p style={{ color: '#f85149', marginBottom: '15px', fontWeight: 'bold' }}>{errorMsg}</p>}
                            <button
                                className="registration-action-btn"
                                style={{ padding: '15px 50px', fontSize: '1.2rem' }}
                                onClick={handleCheck}
                                disabled={isChecking}
                            >
                                {isChecking ? 'Checking...' : 'Check Answers'}
                            </button>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '20px', color: '#8b949e' }}>
                            Question {currentQIndex + 1} of {questionsSet.length}
                        </div>
                    </motion.div>
                </AnimatePresence>
            )}
        </motion.div>
    );
};

export default MatchingGame;
