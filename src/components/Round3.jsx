import React, { useState, useEffect } from 'react';
import { motion, Reorder } from 'framer-motion';

const mcqSets = {
    setA: {
        id: 'A',
        setName: "",
        passkey: "90",
        blocks: [
            { id: 'H1', label: '#include <stdio.h>', correct: '#include <stdio.h>' },
            { id: 'H2', label: '#include <stdlib.h>', correct: '#include <stdlib.h>' },
            { id: 'M1', label: 'int main() {', correct: 'int main() {' },
            { id: 'G', label: 'int *ptr = (int*)malloc(5 * sizeof(int));', correct: 'int *ptr = (int*)malloc(5 * sizeof(int));' },
            { id: 'I', label: 'int sum = 0, i = 0;', correct: 'int sum = 0, i = 0;' },
            { id: 'J', label: 'for(i = 0; i < 5; i++) {', correct: 'for(i = 0; i < 5; i++) {' },
            { id: 'D', label: '*(ptr + i) = (i + 1) * 10;', correct: '*(ptr + i) = (i + 1) * 10;' },
            { id: 'K', label: '}', correct: '}' },
            { id: 'E', label: 'int *temp = ptr;', correct: 'int *temp = ptr;' },
            { id: 'F', label: 'for(i = 0; i < 5; i++) {', correct: 'for(i = 0; i < 5; i++) {' },
            { id: 'C', label: 'if(i % 2 == 0) {', correct: 'if(i % 2 == 0) {' },
            { id: 'A', label: 'sum = sum + temp', correct: 'sum = sum + *temp;' },
            { id: 'L', label: '}', correct: '}' },
            { id: 'B', label: 'temp++;', correct: 'temp++;' },
            { id: 'K2', label: '}', correct: '}' },
            { id: 'H', label: 'printf("%d", sum)', correct: 'printf("%d", sum);' },
            { id: 'M2', label: 'return 0;', correct: 'return 0;' },
            { id: 'M3', label: '}', correct: '}' }
        ],
        targetOrder: ['H1', 'H2', 'M1', 'G', 'I', 'J', 'D', 'K', 'E', 'F', 'C', 'A', 'L', 'B', 'K2', 'H', 'M2', 'M3']
    },
    setB: {
        id: 'B',
        setName: "",
        passkey: "59",
        blocks: [
            { id: 'H1', label: '#include <stdio.h>', correct: '#include <stdio.h>' },
            { id: 'H2', label: '#include <stdlib.h>', correct: '#include <stdlib.h>' },
            { id: 'M1', label: 'int main() {', correct: 'int main() {' },
            { id: 'G', label: 'struct Node* table[5] = {NULL};', correct: 'struct Node* table[5] = {NULL};' },
            { id: 'H', label: 'int keys[] = {12, 7, 18, 22, 32};', correct: 'int keys[] = {12, 7, 18, 22, 32};' },
            { id: 'D', label: 'for(i = 0; i < 5; i++) {', correct: 'for(i = 0; i < 5; i++) {' },
            { id: 'C', label: 'int h = keys[i] % 5', correct: 'int h = keys[i] % 5;' },
            { id: 'K', label: 'struct Node* nn = (struct Node*)malloc(sizeof(struct Node));', correct: 'struct Node* nn = (struct Node*)malloc(sizeof(struct Node));' },
            { id: 'I', label: 'nn.key = keys[i];', correct: 'nn->key = keys[i];' },
            { id: 'A', label: 'nn->next = table[h]', correct: 'nn->next = table[h];' },
            { id: 'B', label: 'table[h] = nn;', correct: 'table[h] = nn;' },
            { id: 'J', label: '}', correct: '}' },
            { id: 'E', label: 'int result = table[2]->key + table[2]->next->key;', correct: 'int result = table[2]->key + table[2]->next->key;' },
            { id: 'F', label: 'printf("%d", result + 5)', correct: 'printf("%d", result + 5);' },
            { id: 'M2', label: 'return 0;', correct: 'return 0;' },
            { id: 'M3', label: '}', correct: '}' }
        ],
        targetOrder: ['H1', 'H2', 'M1', 'G', 'H', 'D', 'C', 'K', 'I', 'A', 'B', 'J', 'E', 'F', 'M2', 'M3']
    }
};

const Round3 = ({ teamData, onComplete }) => {
    const [challenge, setChallenge] = useState(null);
    const [blocks, setBlocks] = useState([]);
    const [passkeyInput, setPasskeyInput] = useState('');
    const [compilationSuccess, setCompilationSuccess] = useState(false);
    const [statusMsg, setStatusMsg] = useState('');
    const [editingBlock, setEditingBlock] = useState(null);
    const [editValue, setEditValue] = useState('');

    useEffect(() => {
        const rollNo = teamData?.members?.[0]?.rollNo || "";
        const is25 = /1602-25-/i.test(rollNo);
        const selected = is25 ? mcqSets.setA : mcqSets.setB;

        setChallenge(selected);
        const shuffled = [...selected.blocks].sort(() => Math.random() - 0.5);
        setBlocks(shuffled);
    }, [teamData]);

    const handleBlockEdit = (block) => {
        setEditingBlock(block.id);
        setEditValue(block.label);
    };

    const saveEdit = () => {
        setBlocks(prev => prev.map(b => b.id === editingBlock ? { ...b, label: editValue } : b));
        setEditingBlock(null);
    };

    const checkSolution = () => {
        if (!challenge) return;
        const normalize = (str) => str.replace(/\s+/g, '').toUpperCase();
        const userCode = normalize(blocks.map(b => b.label).join(''));
        const targetBlocksMap = challenge.blocks.reduce((acc, b) => ({ ...acc, [b.id]: b.correct }), {});

        let isCorrect = false;

        if (challenge.id === 'A') {
            // Flexible orders for Question 1 (Set A)
            const prefix = normalize(['H1', 'H2', 'M1'].map(id => targetBlocksMap[id]).join(''));
            const loop1 = normalize(['J', 'D', 'K'].map(id => targetBlocksMap[id]).join(''));
            const suffix = normalize(['F', 'C', 'A', 'L', 'B', 'K2', 'H', 'M2', 'M3'].map(id => targetBlocksMap[id]).join(''));

            const g = normalize(targetBlocksMap['G']); // ptr
            const i = normalize(targetBlocksMap['I']); // sum
            const e = normalize(targetBlocksMap['E']); // temp

            const validPatterns = [
                // Original: ptr, sum, loop1, temp, suffix
                prefix + g + i + loop1 + e + suffix,
                // Perm 1: ptr, sum, temp, loop1, suffix
                prefix + g + i + e + loop1 + suffix,
                // Perm 2: ptr, temp, sum, loop1, suffix
                prefix + g + e + i + loop1 + suffix,
                // Perm 3: sum, ptr, temp, loop1, suffix
                prefix + i + g + e + loop1 + suffix
            ];

            if (validPatterns.includes(userCode)) isCorrect = true;

        } else if (challenge.id === 'B') {
            // Basic order for Set B
            const target1 = normalize(challenge.targetOrder.map(id => targetBlocksMap[id]).join(''));
            if (userCode === target1) isCorrect = true;
        }

        if (isCorrect) {
            setCompilationSuccess(true);
            setStatusMsg("");
        } else {
            const isSyntaxClean = blocks.every(b => normalize(b.label) === normalize(b.correct));
            if (!isSyntaxClean) {
                setStatusMsg("❌ Syntax Error: Verify stars (*), arrows (->), and semicolons (;).");
            } else {
                setStatusMsg("❌ Logical Error: The block order is incorrect. Trace the flow carefully!");
            }
            setTimeout(() => setStatusMsg(""), 5000);
        }
    };

    const handlePasskeySubmit = () => {
        if (passkeyInput.trim() === challenge.passkey) {
            onComplete();
        } else {
            setStatusMsg("❌ Incorrect Output.");
            setTimeout(() => setStatusMsg(""), 3000);
        }
    };

    if (!challenge) return <div style={{ color: 'white', textAlign: 'center', padding: '50px' }}>Initializing Challenge...</div>;

    return (
        <motion.div
            className="glass-card"
            style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center', padding: '30px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h2 className="neon-text" style={{ marginBottom: '40px' }}>Round 3</h2>

            <div className="mcq-scroll" style={{ maxHeight: compilationSuccess ? '1000px' : '500px', marginBottom: '20px', opacity: compilationSuccess ? 0.9 : 1, pointerEvents: compilationSuccess ? 'none' : 'auto', transition: 'max-height 0.5s ease' }}>
                <Reorder.Group axis="y" values={blocks} onReorder={setBlocks} style={{ listStyle: 'none', padding: 0 }}>
                    {blocks.map((block) => (
                        <Reorder.Item
                            key={block.id}
                            value={block}
                            style={{
                                background: '#0d1117',
                                border: '1px solid #30363d',
                                padding: '10px 15px',
                                marginBottom: '8px',
                                borderRadius: '6px',
                                cursor: compilationSuccess ? 'default' : 'grab',
                                fontFamily: 'Fira Code, monospace',
                                fontSize: '0.85rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}
                            whileDrag={compilationSuccess ? {} : { scale: 1.02, boxShadow: '0 0 20px rgba(88, 166, 255, 0.3)' }}
                        >
                            {!compilationSuccess && <span style={{ color: '#8b949e', fontSize: '1.1rem', userSelect: 'none' }}>⠿</span>}
                            <div
                                style={{ flex: 1, color: '#e6edf3', cursor: compilationSuccess ? 'default' : 'pointer', textAlign: 'left' }}
                                onClick={() => !compilationSuccess && handleBlockEdit(block)}
                            >
                                {block.label}
                            </div>
                            {!compilationSuccess && (
                                <button
                                    onClick={() => handleBlockEdit(block)}
                                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #444', color: '#8b949e', borderRadius: '4px', padding: '4px 8px', fontSize: '0.7rem' }}
                                >
                                    Edit
                                </button>
                            )}
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
            </div>

            {editingBlock && !compilationSuccess && (
                <div style={{ background: 'rgba(0,0,0,0.5)', padding: '15px', borderRadius: '8px', border: '1px solid #58a6ff', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <input
                            className="modern-input"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            style={{ margin: 0, flex: 1, fontSize: '0.9rem' }}
                        />
                        <button className="registration-action-btn" onClick={saveEdit} style={{ margin: 0, padding: '0 15px', fontSize: '0.9rem' }}>Save</button>
                    </div>
                </div>
            )}

            <div style={{ marginTop: '20px' }}>
                {!compilationSuccess ? (
                    <button className="registration-action-btn" onClick={checkSolution} style={{ border: '2px solid #58a6ff', color: '#58a6ff', padding: '12px 40px', fontSize: '1.1rem' }}>Done ✅</button>
                ) : (
                    <div style={{ background: 'rgba(126, 231, 135, 0.1)', border: '1px solid #7ee787', padding: '20px', borderRadius: '12px', maxWidth: '400px', margin: '0 auto' }}>
                        <h3 style={{ color: '#7ee787', marginBottom: '15px', fontSize: '1rem' }}>✅ LOGIC COMPILED! ENTER OUTPUT:</h3>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                            <input
                                className="modern-input"
                                style={{ width: '120px', margin: 0, textAlign: 'center', fontWeight: 'bold' }}
                                placeholder="Output"
                                value={passkeyInput}
                                onChange={(e) => setPasskeyInput(e.target.value)}
                            />
                            <button className="registration-action-btn" style={{ margin: 0, background: '#238636', padding: '0 20px' }} onClick={handlePasskeySubmit}>Submit</button>
                        </div>
                    </div>
                )}
                {statusMsg && <p style={{ color: statusMsg.includes('❌') ? '#f85149' : '#7ee787', marginTop: '10px', fontWeight: 'bold' }}>{statusMsg}</p>}
            </div>
        </motion.div>
    );
};

export default Round3;
