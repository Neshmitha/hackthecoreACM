import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const firstYearQuestions = [
    {
        id: 1,
        title: "Question 1: Making and Using a Simple Function",
        theme: "How to create a basic function and make it run in your main program.",
        leftItems: [
            { id: "A", text: "Choose a data type for what the function returns (like void) and give it a name." },
            { id: "B", text: "Put empty parentheses () after your function name." },
            { id: "C", text: "Write the code you want the function to run inside curly brackets { }." },
            { id: "D", text: "Inside the main() function, call your function by writing its name followed by ();" }
        ],
        rightItems: [
            { id: "1", text: "Step 3: Build the code block body." },
            { id: "2", text: "Step 1: Define the function signature." },
            { id: "3", text: "Step 4: Execute/Trigger the function inside main." },
            { id: "4", text: "Step 2: Provide the input parameter brackets." }
        ],
        correctSequence: ["2", "4", "1", "3"]
    },
    {
        id: 2,
        title: "Question 2: Structures (Grouping Data Together)",
        theme: "Think of a structure like a student ID card that holds different pieces of information about one person.",
        leftItems: [
            { id: "A", text: "struct Student { ... };" },
            { id: "B", text: "struct Student s1;" },
            { id: "C", text: "Member / Field" },
            { id: "D", text: "The . (Dot operator)" }
        ],
        rightItems: [
            { id: "1", text: "A single piece of information inside the structure (like age or grade)." },
            { id: "2", text: "Creating one real, physical student card named s1 using the blueprint." },
            { id: "3", text: "The actual dot symbol used to look inside the structure and grab a specific piece of data." },
            { id: "4", text: "The blueprint or template that decides what information a Student card should hold." }
        ],
        correctSequence: ["4", "2", "1", "3"]
    },
    {
        id: 3,
        title: "Question 3: Pointers (The Map/Address)",
        theme: "Pointers don't hold normal numbers like scores; they hold memory addresses.",
        leftItems: [
            { id: "A", text: "int *ptr;" },
            { id: "B", text: "&myVariable" },
            { id: "C", text: "The & (Ampersand symbol)" },
            { id: "D", text: "*ptr = 20;" }
        ],
        rightItems: [
            { id: "1", text: "Go to the address written on the pointer map and change the value hidden inside it to 20." },
            { id: "2", text: "The 'Address-of' operator used to look up the location of any variable." },
            { id: "3", text: "Creating a special pointer variable that can hold the memory location of an integer." },
            { id: "4", text: "The physical house number or GPS coordinate of where the variable lives in memory." }
        ],
        correctSequence: ["3", "4", "2", "1"]
    },
    {
        id: 4,
        title: "Question 4: Arrays (The Locker Row)",
        theme: "An array is like a row of lockers where items are lined up in order, starting from 0.",
        leftItems: [
            { id: "A", text: "int scores[5];" },
            { id: "B", text: "Index" },
            { id: "C", text: "scores[0]" },
            { id: "D", text: "'Out of Bounds' Error" }
        ],
        rightItems: [
            { id: "1", text: "The specific locker number used to access an item (always starts at 0)." },
            { id: "2", text: "Accidentally trying to open a locker index that does not exist (e.g., locker 10 when you only have 5)." },
            { id: "3", text: "Create a row of 5 connected memory boxes that can each hold a whole number." },
            { id: "4", text: "Access and open the very first box in the row." }
        ],
        correctSequence: ["3", "1", "4", "2"]
    },
    {
        id: 5,
        title: "Question 5: The Grand Code Mystery",
        theme: "Track the variables line-by-line using math rules, shortcut operators, and loops.",
        codeSnippet: `int a = 5;
int b = 4;
int c = 2;
int d = 10;
a = d % 3;       
b += a;          
c = d - b * a;   
for (int i = 0; i < 3; i++) {
    d--;
}`,
        inputType: "text",
        leftItems: [
            { id: "A", text: "The final value of variable 'a'" },
            { id: "B", text: "The final value of variable 'b'" },
            { id: "C", text: "The final value of variable 'c'" },
            { id: "D", text: "The final value of variable 'd'" }
        ],
        correctTextAnswers: { A: "1", B: "5", C: "5", D: "7" }
    }
];

const seniorQuestions = [
    {
        id: 1,
        title: "Question 1: Data Structures in System Architecture",
        theme: "Match the data structure to the architectural subsystem where it is the optimal choice.",
        leftItems: [
            { id: "A", text: "Doubly Linked List" },
            { id: "B", text: "Queue" },
            { id: "C", text: "Stack" },
            { id: "D", text: "Binary Search Tree" }
        ],
        rightItems: [
            { id: "1", text: "Implementing autocomplete dictionaries or hierarchical folder indexes." },
            { id: "2", text: "Building the back-and-forth browser cache history navigation path." },
            { id: "3", text: "Managing print job streams on a shared system where arrival sequence matters." },
            { id: "4", text: "Designing the memory rollback and Undo (Ctrl+Z) state management engine." }
        ],
        correctSequence: ["2", "3", "4", "1"]
    },
    {
        id: 2,
        title: "Question 2: Algorithmic Strategy Identity",
        theme: "Match the design paradigm to its core problem-solving behavior.",
        leftItems: [
            { id: "A", text: "Dynamic Programming" },
            { id: "B", text: "Backtracking" },
            { id: "C", text: "Branch and Bound" },
            { id: "D", text: "Greedy Method" }
        ],
        rightItems: [
            { id: "1", text: "Traversing a state-space branch, detecting a dead end, and explicitly reverting states to try alternative forks." },
            { id: "2", text: "Making locally optimal choices sequentially at each step hoping it reaches global optimization." },
            { id: "3", text: "Breaking a problem down into overlapping subproblems and caching answers in a table." },
            { id: "4", text: "Using bounding functions to permanently prune suboptimal solution spaces early within optimization trees." }
        ],
        correctSequence: ["3", "1", "4", "2"]
    },
    {
        id: 3,
        title: "Question 3: Worst-Case Complexity Thresholds",
        theme: "Identify the worst-case asymptotic bounds for fundamental operations.",
        leftItems: [
            { id: "A", text: "Popping/Deleting the top node off an active Stack structure." },
            { id: "B", text: "Searching for an element within a fully balanced AVL Tree." },
            { id: "C", text: "Searching for an element inside a completely skewed/unbalanced BST." },
            { id: "D", text: "Accessing the absolute n-th positional element in a Singly Linked List." }
        ],
        rightItems: [
            { id: "1", text: "Worst-Case Time: O(n) due to sequential traversal constraints" },
            { id: "2", text: "Worst-Case Time: O(1)" },
            { id: "3", text: "Worst-Case Time: O(log n)" },
            { id: "4", text: "Worst-Case Time: O(n) due to linear tree degradation" }
        ],
        correctSequence: ["2", "3", "4", "1"]
    },
    {
        id: 4,
        title: "Question 4: Classic Problem Matrix",
        theme: "Match the foundational problem statement to its canonical algorithmic solution model.",
        leftItems: [
            { id: "A", text: "0/1 Knapsack Decision Problem" },
            { id: "B", text: "N-Queens Non-Attacking Placement Matrix" },
            { id: "C", text: "Level-Order Graph/Tree Structural Traversal" },
            { id: "D", text: "Kruskal's Minimum Spanning Tree Execution" }
        ],
        rightItems: [
            { id: "1", text: "Solved systematically by tracking configurations via Backtracking recursion paths." },
            { id: "2", text: "Constructed greedily by processing sorted structural edge weights." },
            { id: "3", text: "Implemented sequentially using a First-In-First-Out Queue (Breadth-First Search)." },
            { id: "4", text: "Solved optimally using a Dynamic Programming table matrix." }
        ],
        correctSequence: ["4", "1", "3", "2"]
    },
    {
        id: 5,
        title: "Question 5: Code Analysis — Hash Table Tracing",
        theme: "Trace the execution of a size-7 modulo-based hash map using Linear Probing insertion.",
        codeSnippet: `// Insert sequence: 4, 9, 11, and 16 into a table of size 7
// Hash equation formula: (key * 3) % 7
// If a collision occurs, the table uses Linear Probing`,
        inputType: "text",
        leftItems: [
            { id: "A", text: "The final array index position containing key 11" },
            { id: "B", text: "The final array index position containing key 16" },
            { id: "C", text: "The integer value structurally residing inside index slot 6" },
            { id: "D", text: "The initial raw index returned by hashFunction(9) before collision probing" }
        ],
        correctTextAnswers: { A: "0", B: "1", C: "9", D: "6" }
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

    const handleTextChange = (leftId, value) => {
        setMappings(prev => ({
            ...prev,
            [leftId]: value
        }));
    };

    const handleCheck = () => {
        let allCorrect = true;

        if (q.inputType === "text") {
            const allMapped = q.leftItems.every(l => mappings[l.id] && String(mappings[l.id]).trim() !== "");
            if (!allMapped) {
                setErrorMsg("Please fill in all answers before checking.");
                return;
            }

            setIsChecking(true);
            q.leftItems.forEach((l) => {
                const userVal = String(mappings[l.id] || "").trim();
                const expected = q.correctTextAnswers[l.id];
                if (userVal !== expected) {
                    allCorrect = false;
                }
            });
        } else {
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
            allCorrect = userSequence.length === expectedSequence.length &&
                userSequence.every((val, index) => val === expectedSequence[index]);
        }

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
                            <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#8b949e' }}>
                                {q.inputType === "text" ? "Type the correct output values in the input boxes below." : "Drag options from the right and drop them next to the correct item on the left."}
                            </p>
                        </div>

                        {q.codeSnippet && (
                            <div style={{ background: '#0d1117', padding: '20px', borderRadius: '10px', fontFamily: 'Fira Code, monospace', color: '#58a6ff', marginBottom: '20px', border: '1px solid #30363d', maxWidth: '600px', margin: '0 auto 30px' }}>
                                <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{q.codeSnippet}</pre>
                            </div>
                        )}

                        <div className="matching-container" style={{ display: 'grid', gridTemplateColumns: q.inputType === "text" ? '1fr' : '1fr 1fr', gap: '40px' }}>
                            {/* Left Side: Targets */}
                            <div className="matching-left">
                                <h4 style={{ color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '10px', marginBottom: '20px' }}>Concepts / Code</h4>
                                {q.leftItems.map(leftItem => {
                                    const matchedRightId = mappings[leftItem.id];
                                    const matchedRightItem = q.rightItems ? q.rightItems.find(r => r.id === matchedRightId) : null;

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

                                            {q.inputType === "text" ? (
                                                <input
                                                    type="text"
                                                    value={mappings[leftItem.id] || ''}
                                                    onChange={(e) => handleTextChange(leftItem.id, e.target.value)}
                                                    placeholder="Enter value..."
                                                    style={{
                                                        flex: 1.5,
                                                        background: 'rgba(0,0,0,0.3)',
                                                        border: '2px solid rgba(255,255,255,0.3)',
                                                        borderRadius: '8px',
                                                        padding: '15px',
                                                        color: '#fff',
                                                        fontSize: '1rem',
                                                        outline: 'none',
                                                        transition: 'border-color 0.3s'
                                                    }}
                                                    onFocus={(e) => e.target.style.borderColor = '#00e5ff'}
                                                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.3)'}
                                                />
                                            ) : (
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
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Right Side: Draggables (Only show if not text input) */}
                            {q.inputType !== "text" && (
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
                                            )
                                        })}
                                    </div>
                                </div>
                            )}
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
