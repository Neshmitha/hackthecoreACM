import React, { useState, useEffect } from 'react';
import { motion, Reorder } from 'framer-motion';

const mcqSets = {
    setA: {
        id: 'A',
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
    }
};

const Round3 = ({ teamData, onComplete }) => {
    const [challenge] = useState(mcqSets.setA);
    const [blocks, setBlocks] = useState([]);
    const [passkeyInput, setPasskeyInput] = useState('');
    const [compilationSuccess, setCompilationSuccess] = useState(false);
    const [statusMsg, setStatusMsg] = useState('');
    const [editingBlock, setEditingBlock] = useState(null);
    const [editValue, setEditValue] = useState('');

    useEffect(() => {
        const shuffled = [...mcqSets.setA.blocks].sort(() => Math.random() - 0.5);
        setBlocks(shuffled);
    }, []);

    const handleBlockEdit = (block) => {
        setEditingBlock(block.id);
        setEditValue(block.label);
    };

    const saveEdit = () => {
        setBlocks(prev => prev.map(b => b.id === editingBlock ? { ...b, label: editValue } : b));
        setEditingBlock(null);
    };

    const checkSolution = () => {
        const normalize = (str) => str.replace(/\s+/g, '').toUpperCase();
        const userCode = normalize(blocks.map(b => b.label).join(''));
        const targetBlocksMap = challenge.blocks.reduce((acc, b) => ({ ...acc, [b.id]: b.correct }), {});
        const target1 = normalize(challenge.targetOrder.map(id => targetBlocksMap[id]).join(''));

        if (userCode === target1) {
            setCompilationSuccess(true);
            setStatusMsg("");
        } else {
            const isSyntaxClean = blocks.every(b => normalize(b.label) === normalize(b.correct));
            if (!isSyntaxClean) {
                setStatusMsg("❌ Syntax Error: Check syntax logic carefully.");
            } else {
                setStatusMsg("❌ Logical Error: Block order is incorrect.");
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

    return (
        <motion.div
            className="glass-card"
            style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center', padding: '30px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h2 className="neon-text" style={{ marginBottom: '40px' }}>Round 3</h2>

            {!compilationSuccess ? (
                <>
                    <div className="mcq-scroll" style={{ maxHeight: '600px', marginBottom: '20px' }}>
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
                                        cursor: 'grab',
                                        fontFamily: 'Fira Code, monospace',
                                        fontSize: '0.85rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px'
                                    }}
                                    whileDrag={{ scale: 1.02, boxShadow: '0 0 20px rgba(88, 166, 255, 0.3)' }}
                                >
                                    <span style={{ color: '#8b949e', fontSize: '1.1rem', userSelect: 'none' }}>⠿</span>
                                    <div 
                                        style={{ flex: 1, color: '#e6edf3', cursor: 'pointer', textAlign: 'left' }}
                                        onClick={() => handleBlockEdit(block)}
                                    >
                                        {block.label}
                                    </div>
                                    <button 
                                        onClick={() => handleBlockEdit(block)}
                                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #444', color: '#8b949e', borderRadius: '4px', padding: '4px 8px', fontSize: '0.7rem' }}
                                    >
                                        Edit
                                    </button>
                                </Reorder.Item>
                            ))}
                        </Reorder.Group>
                    </div>

                    {editingBlock && (
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
                        <button className="registration-action-btn" onClick={checkSolution} style={{ border: '2px solid #58a6ff', color: '#58a6ff', padding: '12px 40px', fontSize: '1.1rem' }}>Done ✅</button>
                        {statusMsg && <p style={{ color: '#f85149', marginTop: '10px', fontWeight: 'bold' }}>{statusMsg}</p>}
                    </div>
                </>
            ) : (
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <div style={{ background: 'rgba(126, 231, 135, 0.1)', border: '2px solid #7ee787', padding: '25px', borderRadius: '12px' }}>
                        <h2 style={{ color: '#7ee787', marginBottom: '10px' }}>LOGIC COMPILED!</h2>
                        <div style={{ background: '#000', padding: '15px', borderRadius: '8px', marginBottom: '20px', fontFamily: 'monospace', color: '#7ee787', border: '1px solid #30363d', textAlign: 'left' }}>
                            <span style={{ color: '#ffcc00' }}>[!] Output Passkey:</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                            <input 
                                className="modern-input" 
                                style={{ width: '180px', margin: 0, textAlign: 'center', fontWeight: 'bold' }}
                                placeholder="?"
                                value={passkeyInput}
                                onChange={(e) => setPasskeyInput(e.target.value)}
                            />
                            <button className="registration-action-btn" style={{ margin: 0, background: '#238636' }} onClick={handlePasskeySubmit}>Submit</button>
                        </div>
                        {statusMsg && <p style={{ color: '#f85149', marginTop: '10px', fontWeight: 'bold' }}>{statusMsg}</p>}
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default Round3;
