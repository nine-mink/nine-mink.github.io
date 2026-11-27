const papers = [
{detail:'paper-eth',year:2026,status:'published',author:1,venue:'The Web Conference · Short paper',title:'Multi-source Multi-level Multi-token Ethereum Dataset and Benchmark Platform',desc:'3MEthTaskforce connects more than 300 million on-chain transactions, 3,880 token profiles, market data and Reddit discussion in a unified benchmark.',contribution:'First author · Dataset construction, benchmark deployment, experiments and writing',url:'https://arxiv.org/abs/2501.11906'},
{detail:'paper-debate',year:2026,status:'published',author:3,venue:'AAMAS · Best Paper Nominee',title:'R-Debater: Retrieval-Augmented Debate Generation through Argumentative Memory',desc:'Evidence retrieval, role planning and argumentative memory for multi-turn debate generation.',contribution:'Third author · Writing and revision',url:'https://arxiv.org/abs/2512.24684'},
{detail:'paper-values',year:2026,status:'published',author:2,venue:'EMNLP · Main conference',title:'Value-Rich, Differently Organized: Measuring Value Expression and Organization in AI-Generated Debates',desc:'Examines how AI and human debates express and organise values across discourse levels.',contribution:'Second author · Writing and revision',url:'https://aclanthology.org/2026.emnlp-main.858/'},
{detail:'paper-trait',year:2026,status:'published',author:2,venue:'EMNLP · Main conference',title:'Trait Collapse in Text-to-Image Generation: Evaluating and Mitigating Personality Inconsistency in Visual Storytelling',desc:'Evaluates personality consistency across seven text-to-image systems and introduces a trait–behaviour–visual prompting approach.',contribution:'Second author · Writing and revision',url:'https://aclanthology.org/2026.emnlp-main.362/'},
{"detail": "fact", "year": 2026, "status": "submitted", "venue": "AISI 2027 / AAAI-27", "title": "Facing the FACTs for Primary Cardiac Care: Full-trajectory Assessment of Cardiac Disease from ECG Tracings", "desc": "We combined ECG images with clinical records to study disease detection, future risk and outcomes after diagnosis.", "contribution": "Data cleaning, model design and implementation, writing and revision", "url": "https://openreview.net/forum?id=qMbIfqgSuD"},
{"detail": "ccdd", "year": 2026, "status": "submitted", "venue": "ICLR 2027", "title": "Chinese Competitive Debate: A Dataset and Benchmark with Professional Adjudication", "desc": "A benchmark connecting debate transcripts to professional adjudication across 148 debates.", "contribution": "Second author · Writing and revision", "author": 2, "url": "https://openreview.net/forum?id=vs1E2oIHNv"},
{"detail": "canon", "year": 2026, "status": "submitted", "venue": "ARR · October 2026", "title": "The Worlds We Inherit: Canon Fidelity in LLM-Generated Narratives", "desc": "Uses textual evidence to check how closely a generated continuation follows the setting of a novel.", "contribution": "Fourth author · Dataset architecture", "author": 4, "url": "https://openreview.net/forum?id=HOihawPJqu"},
{"detail": "ecg-review", "year": 2026, "status": "submitted", "venue": "Clinical Research in Cardiology", "title": "Artificial Intelligence-based Electrocardiogram Diagnosis and Disease Prediction: A Systematic Review and Meta-Analysis", "desc": "A systematic review of AI-assisted ECG interpretation for disease detection and risk prediction.", "contribution": "Co-author · Data preparation and cleaning"},
{detail:'paper-review',year:2026,status:'preprint',author:2,venue:'arXiv · Public preprint',title:'Can We Believe AI Peer Review?',desc:'Investigates variability and cross-model disagreement in AI peer review, using 200 papers and approximately 14,000 AI reviews.',contribution:'Second author · Writing and revision',url:'https://arxiv.org/abs/2610.19339'},
{detail:'paper-outline',year:2025,status:'published',author:5,venue:'Findings of EMNLP',title:'Boundary Matters: Leveraging Structured Text Plots for Long Text Outline Generation',desc:'Models chapter dependencies using structured plot representations for coherent long-text outline generation.',contribution:'Fifth author · Data preparation and baseline deployment',url:'https://aclanthology.org/2025.findings-emnlp.4/'},
{detail:'paper-proto',year:2025,status:'preprint',author:1,venue:'arXiv · Public preprint',title:'Cognitive Alignment in Personality Reasoning: Leveraging Prototype Theory for MBTI Inference',desc:'Combines cognitive prototype theory, retrieval and language-model reasoning to infer personality types from text.',contribution:'First author · Model design, implementation and writing',url:'https://arxiv.org/abs/2511.00115'},
{detail:'paper-courses',year:2023,status:'published',author:1,venue:'CEI 2023 · Accepted',title:'The Potential of Large Language Models as Tools for Analyzing Student Textual Evaluation: A Differential Analysis Between CS and Non-CS Students',desc:'Compares LLM-based topic and sentiment analysis with human judgments on Coursera student reviews.',contribution:'First author'},
{detail:'paper-lab',year:2022,status:'published',author:1,venue:'Technology Innovation and Application · Journal',title:'高校实验室信息管理系统的开发与设计',desc:'Design and development of a university laboratory information management system, with associated software copyright.',contribution:'First author · Requirements, database design, development, testing and writing'}
];
const zh=document.documentElement.lang==='zh-CN';
const cn=[
['WWW · 短文','3MEthTaskforce 将超过 3 亿条链上交易、3,880 个代币档案、市场数据和 Reddit 讨论纳入统一基准。','第一作者 · 数据构建、基准部署、实验与写作'],
['AAMAS · 最佳论文提名','结合证据检索、角色规划与论证记忆生成多轮辩论。','第三作者 · 写作与修订'],
['EMNLP · 主会','研究 AI 与人类辩论在不同话语层级的价值观表达和组织方式。','第二作者 · 写作与修订'],
['EMNLP · 主会','评估七个文生图系统的人格一致性，并提出人格—行为—视觉提示方法。','第二作者 · 写作与修订'],
["AISI 2027 / AAAI-27", "结合心电图图像与临床资料，研究现患识别、未来风险及确诊后预后。", "数据清洗、模型设计与实现、写作与修订"],
["ICLR 2027", "将 148 场中文辩论的逐轮转录与专业裁判记录关联，用于评测模型的判赛能力。", "第二作者 · 写作与修订"],
["ARR · 2026 年 10 月", "依据原文证据，检查模型续写时保留或违背了哪些小说设定。", "第四作者 · 数据集架构设计"],
["Clinical Research in Cardiology", "系统整理 AI 心电图用于疾病识别与风险预测的研究证据。", "合著 · 数据准备与清洗"],
['arXiv · 公开预印本','基于 200 篇论文与约 14,000 次 AI 评审，研究评分波动和模型间分歧。','第二作者 · 写作与修订'],
['Findings of EMNLP','利用结构化情节表示建模章节依赖，生成连贯的长文本大纲。','第五作者 · 数据准备与基线部署'],
['arXiv · 公开预印本','结合认知原型理论、检索与语言模型推理，从文本推断人格类型。','第一作者 · 模型设计、实现与写作'],
['CEI 2023 · 录用','比较大语言模型与人工对 Coursera 学生评价的主题与情感分析。','第一作者'],
['科技创新与应用 · 期刊','设计与开发高校实验室信息管理系统，并取得相关软件著作权。','第一作者 · 需求、数据库设计、开发、测试与写作']];
if(zh) papers.forEach((p,i)=>{[p.venue,p.desc,p.contribution]=cn[i]});
const statusLabels = zh
 ? {published:'已发表 / 录用', preprint:'预印本', submitted:'已投稿'}
 : {published:'Published / accepted', preprint:'Preprint', submitted:'Submitted'};
const list = document.getElementById('paperList');
const count = document.getElementById('paperCount');
const buttons = [...document.querySelectorAll('.filters button')];
function renderPapers(filter='all'){
 const shown = papers.filter(p=>filter==='all'||(filter==='first'?p.author===1:p.status===filter));
 count.textContent=zh?`${shown.length} 篇论文`:`${shown.length} ${shown.length===1?'paper':'papers'}`;
 list.innerHTML=shown.map(p=>`<article class="paper" data-detail-card="${p.detail}"><div class="paper-year">${p.year}</div><div><div class="paper-meta"><span>${statusLabels[p.status]}</span><span>${p.venue}</span></div><h3><button type="button" class="detail-trigger" aria-haspopup="dialog" aria-controls="entry-dialog" data-detail="${p.detail}">${p.title}<span class="detail-plus" aria-hidden="true">+</span></button></h3><p>${p.desc}</p><p class="contribution">${p.contribution}</p></div>${p.url?`<a class="paper-link" href="${p.url}" target="_blank" rel="noopener noreferrer">${zh?'阅读 ↗':'Read ↗'}</a>`:''}</article>`).join('');
}
buttons.forEach(b=>b.addEventListener('click',()=>{buttons.forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});renderPapers(b.dataset.filter)}));renderPapers();
const toggle=document.getElementById('menuToggle'),nav=document.getElementById('navLinks');
function closeMenu(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
const gallery=document.getElementById('gallery');
function scrollGallery(dir){const width=gallery.querySelector('figure').getBoundingClientRect().width+14;gallery.scrollBy({left:dir*width,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}
document.getElementById('galleryPrev').addEventListener('click',()=>scrollGallery(-1));document.getElementById('galleryNext').addEventListener('click',()=>scrollGallery(1));document.getElementById('year').textContent=new Date().getFullYear();

const entryDialog = document.getElementById('entry-dialog');
const detailTitle = document.getElementById('detail-title');
const detailSection = document.getElementById('detail-section');
const detailBody = document.getElementById('detail-body');
let lastDetailButton;

function openEntry(button) {
  const entry = detailEntries[button.dataset.detail];
  const section = button.closest('section')?.querySelector('.section-label');
  detailSection.textContent = section?.textContent.replace(/^\d+\s*\/\s*/, '') ||
    (zh ? '工作概览' : 'At a glance');
  detailTitle.textContent = entry.title;
  detailBody.replaceChildren(...entry.paragraphs.map(text => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
  }));
  lastDetailButton = button;
  entryDialog.showModal();
  entryDialog.scrollTop = 0;
}

document.addEventListener('click', event => {
  const button = event.target.closest('button[data-detail]');
  if (button) {
    openEntry(button);
    return;
  }
  // Preserve links, text selection and native controls inside a clickable card.
  if (event.target.closest('a, button, summary, dialog') || window.getSelection()?.toString()) return;
  const card = event.target.closest('[data-detail-card]');
  if (card) openEntry(card.querySelector('button[data-detail]'));
});

document.getElementById('detail-close').addEventListener('click', () => entryDialog.close());
entryDialog.addEventListener('click', event => {
  if (event.target === entryDialog) entryDialog.close();
});
entryDialog.addEventListener('close', () => lastDetailButton?.focus({preventScroll: true}));
