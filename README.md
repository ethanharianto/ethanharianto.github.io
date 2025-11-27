# Ethan Harianto — Machine Learning Engineer

I build reliable ML systems end‑to‑end: data, training, evaluation, and production serving. I care about correctness, latency, and shipping useful models and features.

- Live site: https://ethanharianto.github.io/
- Resume (PDF): /Ethan_Harianto_Resume.pdf
- Email: eharianto@stanford.edu

## What I do
- Design and ship ML features from scratch: problem framing → data → training → eval → serving → monitoring
- Domains: speech (STT/TTS), computer vision, reinforcement learning
- Systems: GPU‑aware inference, WebRTC/real‑time UX, cost/perf trade‑offs, reliability

## Selected ML projects
- Speech assistant pipeline (STT → LLM → TTS → Lip‑Sync) over WebRTC, multi‑region deployment; built core pipeline and backend (Go, WebRTC, STT/TTS, VAD)
- Rock Climbing Route Grader using self‑supervised learning + YOLOv5 (~80% agreement with experts) (PyTorch)
- Reinforcement Learning agent for Coup with >90% win rate vs. random baseline (Q‑learning)
- More projects: see “Projects” on the live site and my GitHub profile

## Stack
- Languages: Python, Go, JavaScript/TypeScript, Swift
- Modeling: PyTorch, scikit‑learn, YOLOv5; data tooling: NumPy, Pandas
- Serving/Infra: Docker, REST/GraphQL, WebRTC; experiment tracking & evaluation workflows
- Platforms/Tools: GitHub, macOS, Linux; some FPGA/Verilog for systems where hardware helps

## This repo
Minimal personal site (React + TypeScript + Vite) with a content‑first, dark monospace aesthetic that reflects systems/ML engineering. The site lists projects, experience, and links to code.

### Quick start
```bash
npm install
npm run dev
```

Build:
```bash
npm run build
npm run preview
```

### Deploy
This site is configured for GitHub Pages. Build artifacts are in `dist/`. Use:
```bash
npm run deploy
```

## Contact
- Email: eharianto@stanford.edu  
- GitHub: https://github.com/ethanharianto  
- LinkedIn: https://linkedin.com/in/ethan-harianto  

Hiring? I’m always happy to talk about applied ML problems and shipping them to production.
