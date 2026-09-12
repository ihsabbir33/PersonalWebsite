import { Bot, Send, X } from 'lucide-react'
import { useState } from 'react'

const responses = {
  project: 'Sabbir has worked on Bangla OCR, a Django e-commerce platform, Xenon Healthcare, an educational AI chatbot, and a smart attendance system.',
  skill: 'His skills include Python, Django, Django REST, TensorFlow, NumPy, Pandas, CRNN, React, Bootstrap, Bangla NLP, and OCR systems.',
  thesis: 'His thesis at Green University is Bangla Handwritten Word Recognition using Deep Learning, with a CRNN model reaching 92% accuracy.',
  contact: 'You can reach Sabbir at sabbirahmed338989@gmail.com or +880 1846 593095.',
  default: 'Ask me about Sabbir’s projects, skills, thesis, education, or contact details.',
}

function answer(message) { const text = message.toLowerCase(); const key = ['project', 'skill', 'thesis', 'contact'].find((item) => text.includes(item)); return responses[key] || responses.default }

export function Chatbot() {
  const [open, setOpen] = useState(false); const [input, setInput] = useState(''); const [messages, setMessages] = useState([])
  const send = (event) => { event.preventDefault(); if (!input.trim()) return; setMessages((items) => [...items, { from: 'user', text: input.trim() }, { from: 'bot', text: answer(input) }]); setInput('') }
  return <><button className="chat-trigger" onClick={() => setOpen(true)} aria-label="Open portfolio assistant"><Bot size={20} /></button>{open && <aside className="chat-panel" aria-label="Portfolio assistant"><div className="chat-header"><div><strong>Portfolio assistant</strong><span>Ask about the work</span></div><button onClick={() => setOpen(false)} aria-label="Close assistant"><X size={18} /></button></div><div className="chat-messages"><p className="chat-message bot">Hello. Ask me about projects, skills, thesis, or contact details.</p>{messages.map((message, index) => <p className={`chat-message ${message.from}`} key={`${message.from}-${index}`}>{message.text}</p>)}</div><form className="chat-form" onSubmit={send}><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask a question..." aria-label="Ask a question" /><button aria-label="Send question"><Send size={16} /></button></form></aside>}</>
}