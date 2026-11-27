const detailEntries = {
  "approach": {
    "title": "Starting with the question someone needs to answer",
    "paragraphs": [
      "In the legal document project, a lawyer might remember what happened in a case and still have no idea which of several hundred files mentioned it. A filename search worked when she already knew the document. Finding the same event described in different words meant reading through the files again.",
      "That gave me two design requirements. Each scan needed searchable text, and each answer needed a route back to the passage that supported it. We could try the system with a question from the lawyer’s own casework and see whether it led her to the right page."
    ]
  },
  "improve": {
    "title": "Running the same material through a new workflow",
    "paragraphs": [
      "When I traced the processing time for a batch of legal files, much of it went into asking a model to read each document in turn. I defined the information to extract for each document type, processed independent files in parallel and indexed the resulting text.",
      "Running the same batch took a little over a dozen hours. Keeping the material fixed also gave me a way to check the quality of the change. Did the passage cited in an answer still support what the answer said?"
    ]
  },
  "connections": {
    "title": "How an idea from psychology became an experiment",
    "paragraphs": [
      "I like a question from cognitive psychology. How do we recognise a new member of a familiar category? Prototype theory gives typical examples a central role in that judgment. I took this idea into my personality research at Auckland.",
      "Given an unfamiliar social media post, the model retrieves posts from people with known personality labels and compares patterns in their writing. Changing the examples gives us a way to test how much the model’s judgment depends on the evidence it sees."
    ]
  },
  "phd": {
    "title": "Doctoral research at Auckland",
    "paragraphs": [
      "I joined the School of Computer Science at the University of Auckland in April 2026. Working with Jiamou Liu and collaborators at West China Hospital, Sichuan University, I study what an electrocardiogram can tell us about multi-vessel coronary ischemia and fractional flow reserve (FFR).",
      "At Civilised Agent Lab, I am exploring how to express clinical guidelines as conditions a model can test. If we change the ECG evidence for one of those conditions, how does the prediction change with it?"
    ]
  },
  "masters": {
    "title": "From algorithms to an Ethereum benchmark",
    "paragraphs": [
      "My master’s studies at Auckland included machine learning, algorithms for large datasets, data mining, advanced human–computer interaction and computer graphics. Blockchain data gave me two ways into the same market. Graphs describe transactions between wallets, while time series describe price changes.",
      "I brought transactions, prices and community discussions together for repeatable experiments. That work grew into 3MEthTaskforce. I completed the degree with First Class Honours and received an A+ for my thesis."
    ]
  },
  "bachelor": {
    "title": "Designing software for a university laboratory",
    "paragraphs": [
      "I studied computer science at Shandong University of Technology. The university laboratory offered a concrete software design problem. How could people book equipment, register projects and get usage statistics from the records they created?",
      "I worked from the lab’s requirements through database design, front-end and back-end development and integration testing. The work resulted in version 1.0 of the laboratory management system, a software copyright registration and a journal article."
    ]
  },
  "exchange": {
    "title": "An exchange in Vellore, India",
    "paragraphs": [
      "I spent August and September 2019 on exchange at Vellore Institute of Technology in India, midway through my computer science degree in Shandong.",
      "The exchange gave me another university environment to draw on when I later moved to Auckland for postgraduate study. Vellore sits between those two longer stretches of my education."
    ]
  },
  "ecg": {
    "title": "What evidence changes an ECG prediction?",
    "paragraphs": [
      "Two ECGs can receive similar prediction scores. I want to know which features of each tracing support the score and whether those features correspond to conditions described in clinical guidelines.",
      "I am exploring Logic Tensor Networks as a way to express those conditions in a form a model can evaluate. By changing one piece of evidence at a time, I can study how the rule and the prediction respond. I am developing this approach for multi-vessel ischemia detection and fractional flow reserve prediction."
    ]
  },
  "language": {
    "title": "Following an argument across turns",
    "paragraphs": [
      "A debater has to answer the latest objection while keeping track of earlier commitments. R-Debater stores arguments and evidence in memory so the system can retrieve a relevant point and use it in a later response.",
      "Our research on values follows debates at another scale, tracing how a value develops from an individual claim into an exchange between speakers. In our AI peer review work, we repeatedly give models the same paper and compare their scores and judgments of the same revision."
    ]
  },
  "personality": {
    "title": "Reading personality in words and pictures",
    "paragraphs": [
      "In text, I start with a new post and ask which examples of writing by people with known personality labels shed light on it. That question led to ProtoMBTI, a model that retrieves examples to support its judgment.",
      "Visual storytelling reverses the question. Given a character with a particular personality, how should it show up in what the character does? Our research translates traits into behaviour and then into visible cues, so we can examine a character across successive scenes."
    ]
  },
  "graphs": {
    "title": "Wallet relationships and price histories",
    "paragraphs": [
      "An Ethereum transaction records both a relationship and a time. Treating addresses as nodes and transfers as time-stamped edges lets us study a wallet’s next interaction. Following a token’s prices over time gives us a different forecasting problem.",
      "I built benchmarks for both questions in 3MEthTaskforce and brought market indicators and Reddit discussions into the platform. Degen took the wallet side further by turning sequences of transactions into wallet-level behaviour and risk scores."
    ]
  },
  "service": {
    "title": "Research visits, peer review and collaboration",
    "paragraphs": [
      "I visited the University of Electronic Science and Technology of China for about a month in June and July 2024 and volunteered at AAMAS that year. I have also reviewed research for ARR, AAMAS and Information Fusion.",
      "My collaboration with West China Hospital centres on my doctoral project. It gives a concrete setting to a question in model evaluation. Which pieces of evidence on an ECG can account for a prediction?"
    ]
  },
  "legal": {
    "title": "Finding a citable passage in a case file",
    "paragraphs": [
      "A single case can contain hundreds or even thousands of PDFs. A lawyer may remember an event without recalling the filename. I built a tool that lets her ask about the event in her own words and follow the answer back to the original passage.",
      "I used OCR to turn scans into Markdown, defined extraction steps for different document types, processed files in parallel and indexed the resulting text and summaries. At query time, the system retrieves passages by meaning and attaches references to the answer.",
      "The earlier workflow was estimated to take 12 to 72 days for this batch. Processing the same material with the redesigned pipeline took a little over a dozen hours. Subsequent questions can use the existing index."
    ]
  },
  "atlas": {
    "title": "What can one industry learn from another?",
    "paragraphs": [
      "I organised 102 AI applications into 16 business categories. To compare work across industries, I recorded what information enters a task, what judgment it requires and who uses the result.",
      "Six patterns emerged, covering information processing, content generation, forecasting, decision support, workflow execution and continuous improvement. I organised implementation into seven steps, from identifying business value and breaking down work to matching capabilities, connecting tools, assigning human decisions, evaluating feedback and standardising what works. The case collection is available in Agent Atlas."
    ]
  },
  "knowledge": {
    "title": "Keeping a creator’s experience close at hand",
    "paragraphs": [
      "A creator wanted to reuse ideas and observations when planning and writing new content. I built an Obsidian knowledge base and connected a Hermes assistant to Telegram. She could update a note from her phone and draw on related material in a later writing session.",
      "The prototype supports remote updates. The work in progress concerns how new material enters the collection and how to retain the creator’s own phrasing for future use."
    ]
  },
  "eth": {
    "title": "Building repeatable experiments on Ethereum data",
    "paragraphs": [
      "I brought Ethereum transactions from 2014 to 2024 together with token profiles, prices, market indicators and Reddit discussions. The published dataset covers more than 300 million transactions and 3,880 token profiles.",
      "The platform supports two experiments. One predicts a wallet’s subsequent activity from its transaction history. The other forecasts token prices from time series. I cleaned the data, prepared features, deployed the models and organised results for six dynamic graph models and nineteen time-series models."
    ]
  },
  "degen": {
    "title": "Turning wallet histories into behaviour scores",
    "paragraphs": [
      "Degen takes the wallet as its unit of analysis. I extracted features such as trading frequency, fund flows and the volatility of token holdings, used a temporal graph model to predict subsequent activity and combined the results with asset risk measures to produce a Degen Medal Score.",
      "I prepared the data, designed the model and deployed it on a server. The prototype could track an address, display its score and award a digital medal. The project modelled more than a million users before it was paused."
    ]
  },
  "creator": {
    "title": "Using one livestream to prepare for the next",
    "paragraphs": [
      "Coaching ChanCard creators involves preparation before a livestream and reflection afterwards. I turned recurring guidance into material an AI assistant could retrieve and built a chat interface where creators could raise a question or revisit a session.",
      "I also worked on automated clipping to turn recordings into pieces of content creators could use again. The guidance, review conversations and clips each support a different moment in a creator’s work.",
      "In one recording, a viewer asked a broad question. The host answered and the conversation ended. On playback I heard two distinct questions the viewer might have wanted to explore. I updated the review tool to suggest specific follow-ups when a question could naturally be split, and used the rule on later recordings. The host decides whether a suggestion fits the conversation."
    ]
  },
  "swa": {
    "title": "Planning a social media workspace",
    "paragraphs": [
      "I helped scope a workspace for a social media team. Starting with one piece of content made the design questions concrete. Who maintains its draft, which date belongs to it and where can the team see the schedule for a particular account?",
      "The proposed phases cover content management, scheduling and multiple workspaces. The design begins with the relationship between a piece of content and its publication date, then extends that model to teams moving between workspaces."
    ]
  },
  "grouping": {
    "title": "Matching Saturday participants to discussion groups",
    "paragraphs": [
      "Participants choose a morning or afternoon session and describe their background and what they want to discuss. The host can read those responses by date and session and assign people to one of three groups.",
      "I designed the registration and manual grouping workflow. If someone changes groups on the day, the host can move that person directly or return them to the unassigned list for that session."
    ]
  },
  "social": {
    "title": "From a phone photo to a draft post",
    "paragraphs": [
      "This product exploration starts with a photo on a creator’s phone. The image supplies material for a draft caption. The creator adds what they remember about the occasion and takes the chosen image and wording into the mobile publishing flow.",
      "I explored the handoff between generation and publication, including how to keep the right photo with its draft and where the creator makes the final wording decision."
    ]
  },
  "travel": {
    "title": "Planning a service for people travelling to China for care",
    "paragraphs": [
      "I contributed to early business planning for a service for people travelling to China for medical care. The service raises practical coordination questions. What does a traveller need to find out before departure? How can they describe their needs, and what information has to move with them?",
      "My involvement centred on the business concept and on thinking through the scope of the service and the handoffs between its stages."
    ]
  },
  "timeline": {
    "title": "How I began studying psychology",
    "paragraphs": [
      "When I started university, I asked the founder of Time Line if I could work as his assistant. I organised client records and appointments and studied Freud and Winnicott alongside his notes. Later, observing classes and individual sessions, I began to notice which details made him pause and ask another question.",
      "Reflection and relaxation exercises were part of that learning. When I later developed ChanCard, I carried forward an interest in open questions that let a person begin with their own memories and choices.",
      "I also made a guided relaxation recording and shared it privately with friends who were under stress."
    ]
  },
  "chancard": {
    "title": "A card as the start of a conversation",
    "paragraphs": [
      "I founded ChanCard in late 2025 to use symbolic cards as prompts for reflection. Two people looking at the same image might notice entirely different details. I am interested in what a particular detail recalls for the person looking at it and why that memory matters now.",
      "The conversation moves from an image to an experience and then to a present choice. The card gives the person somewhere to begin. The meaning comes from the person telling the story.",
      "When I designed the deck, I left the Master card blank. Someone drawing it gets to answer a question in their own words. What could I do to support myself here?"
    ]
  },
  "philosophy": {
    "title": "Finding the choice you can make",
    "paragraphs": [
      "Three questions run through my work on personal growth. What does this experience mean to me? What can I choose? Which choice am I willing to take responsibility for?",
      "In a ChanCard reflection, one place to begin is with something in the picture that catches your eye. You can connect it to a moment in your life and finish by identifying one decision that is yours to make."
    ]
  },
  "horizon": {
    "title": "Saturday conversations and Thursday coding",
    "paragraphs": [
      "I co-organise Horizon Youth activities in Auckland and teach AI sessions. Saturdays make room for newcomers and longer discussions, from using ChatGPT for the first time to ethics, marketing and product development. On Thursdays, participants can work on their own ideas in hands-on coding sessions.",
      "By November 2026, the weekly AI series had reached its fifteenth session. Across the wider community, more than thirty events accounted for an estimated four hundred or more attendances, including people who came back for several events."
    ]
  },
  "forum": {
    "title": "Discussing AI and local culture in Wellington",
    "paragraphs": [
      "At the 2025 Aspiring Leaders Forum at New Zealand Parliament, I asked for about eight minutes to speak. I shared my research experience and described how our lab used generative AI to make reading materials for Iraqi children that reflected their local culture. Several participants came over afterwards to continue the conversation.",
      "That week shaped the way I later helped organise Horizon Youth events in Auckland. I wanted participants to have time to stand up and tell the group about something they had done themselves."
    ]
  },
  "workshop": {
    "title": "What we teach in adult AI workshops",
    "paragraphs": [
      "At Future Academy, I co-designed and taught practical courses for adults. The teaching connects three activities people can try with their own material. Organise a knowledge base, give an assistant access to relevant information and connect repeated steps into a workflow.",
      "Each activity answers a different question about the learner’s work. Where does the information live? What can the assistant draw on? Who picks up the result when a step is finished?"
    ]
  },
  "academy": {
    "title": "Designing courses and client projects at Future Academy",
    "paragraphs": [
      "As a founding team member, I work on both teaching and client-facing digital projects. One question connects the two. Once someone can have a conversation with a model, how can they use it in a task they do every day?",
      "Our adult workshops bring together knowledge organisation, AI assistants and workflow automation. For client projects, I start with the material people use and what they need to deliver, then work out which operations the product should support."
    ]
  },
  "consultant": {
    "title": "From a client’s material to a working prototype",
    "paragraphs": [
      "Two independent projects began with very different collections. A lawyer had scanned case files and needed answers she could trace to a source. A creator had a growing set of personal notes and needed a way to add material from her phone.",
      "In each case I mapped the workflow, designed and built the prototype and iterated with the person using it. Their own files and notes gave us a practical way to judge whether a change helped."
    ]
  },
  "mentoring": {
    "title": "Guiding a small group through a research project",
    "paragraphs": [
      "For three annual programmes at Auckland I supervised visiting students, usually three to five per group. We began by narrowing an interest to an experiment that would fit the programme, then chose a technical approach, organised data and interpreted early results.",
      "Past projects included multi-agent debate and personality inference from social media. In 2026 I designed a short machine-learning project for visiting students from Southwest University using real UK Biobank data. I planned the experiments and guided the group through model training. The students won first prize in their programme."
    ]
  },
  "marker": {
    "title": "Weekly feedback for CS367",
    "paragraphs": [
      "From July to November 2024, I helped track the progress of about forty undergraduates in CS367 at Auckland. In weekly assignments, I identified the step where an error appeared and suggested a change the student could try.",
      "When the same issue appeared in several submissions, I could bring it into a group question session. A difficulty in one assignment then became an example other students could use to check their own work."
    ]
  },
  "studio": {
    "title": "Learning to build custom software for clients",
    "paragraphs": [
      "During my second summer at university, I worked at a hotel front desk. Guests could leave an unfinished bottle for their next visit. We tagged the bottles and kept a paper ledger, and the two were hard to reconcile on a busy shift. I asked the owner if I could build a system and wrote the software myself to record deposits, look up balances and correct entries. I also delivered custom websites and small management systems through my software studio.",
      "Working independently meant discovering requirements, estimating the work and setting a price. These projects taught me to ask which records a requested change would affect and which parts of a workflow I would need to test again."
    ]
  },
  "paper-eth": {
    "title": "Two forecasting tasks on one Ethereum dataset",
    "paragraphs": [
      "Comparing models is difficult when each experiment starts with different data. We aligned Ethereum transactions from 2014 to 2024 with token profiles, prices, market indicators and Reddit discussions so researchers could repeat experiments on common inputs.",
      "The benchmark covers wallet behaviour and token price forecasts, comparing six dynamic graph models and nineteen time-series models in their respective tasks. As first author, I collected and organised the data, deployed the benchmark, compiled results and wrote the paper."
    ]
  },
  "paper-debate": {
    "title": "Keeping evidence in play across a debate",
    "paragraphs": [
      "A debater must respond to a new objection while remembering the evidence already on the table. R-Debater retrieves earlier arguments and supporting material and uses role and stance planning to decide how to respond in the next turn.",
      "The study used retrieval material spanning seven domains, evaluated the system on 32 held-out debates and involved 20 experienced debaters in human evaluation. I contributed to writing and revision as third author. The paper received an AAMAS 2026 Best Paper nomination."
    ]
  },
  "paper-values": {
    "title": "Following a value through an argument",
    "paragraphs": [
      "A debate might mention fairness repeatedly, all within one statement or across an exchange between opposing speakers. Using Schwartz’s ten basic values, we analysed arguments at several scales, from individual argumentative units to statements, sides and whole debates.",
      "AI debates expressed a wide range of values. Differences from human debates emerged in how values were organised within a statement and across turns. I contributed to writing and revision as second author."
    ]
  },
  "paper-trait": {
    "title": "Making a character’s personality visible across scenes",
    "paragraphs": [
      "When a character moves to a new scene, can a reader still recognise their personality from a gesture or expression? We built ViStoryBench-Personality and a visual cue dictionary, then evaluated seven text-to-image systems across six dimensions.",
      "Our prompting method translates traits into behaviours and then into cues an image can show. This lets researchers compare how a character acts across scenes before and after revising the prompt. I worked on writing and revision as second author."
    ]
  },
  "paper-review": {
    "title": "How many scores can the same paper receive?",
    "paragraphs": [
      "We drew 200 papers from two years of ICLR and ran about 14,000 AI reviews. Repeated scoring showed how a model’s judgments varied for identical material. Changing the scoring scale let us compare shifts in both the average score and its variance.",
      "A further experiment asked different models to assess the same revisions. Sometimes one evaluator scored a revision as an improvement while another moved in the opposite direction. I contributed to writing and revision of this public preprint as second author."
    ]
  },
  "paper-outline": {
    "title": "Outlining a novel that runs to thousands of chapters",
    "paragraphs": [
      "A storyline can begin in one chapter and return hundreds of chapters later. LeStrTP represents chapters as a graph, models their dependencies and searches for plot boundaries. The resulting structure guides a language model as it writes the outline.",
      "NovOutlineSet includes 28 Chinese novels, the longest with 2,271 chapters. I helped prepare the data and deploy the baselines for comparisons of how models handled transitions and plot coverage. The paper appeared in Findings of EMNLP 2025."
    ]
  },
  "paper-proto": {
    "title": "Retrieving typical examples to reason about personality",
    "paragraphs": [
      "ProtoMBTI draws on prototype theory in psychology. We organise examples from the Kaggle and Pandora personality corpora, train a lightweight encoder and retrieve related texts for a new post. The model uses those examples as evidence for its type judgment.",
      "The design lets us change the examples the model sees and observe how its judgment responds. As first author of the public preprint, I designed the method, implemented the model, ran experiments and wrote the paper."
    ]
  },
  "paper-courses": {
    "title": "Reading the experience behind a course rating",
    "paragraphs": [
      "A star rating can summarise satisfaction. The accompanying review can tell us why a student chose it. I studied Coursera reviews to compare the topics and sentiments expressed by students in computer science and other disciplines.",
      "I cleaned the text, checked agreement among human annotators and compared human judgments with topic and sentiment labels from language models including Text-Davinci-003. CEI 2023 accepted this first-author paper."
    ]
  },
  "paper-lab": {
    "title": "Connecting equipment bookings, projects and statistics",
    "paragraphs": [
      "The project began with daily work in a university lab. Equipment bookings need a connection to their users, project records need to be searchable and managers need statistics from the same records. I gathered the requirements, designed the database and built the front end and back end.",
      "I carried out integration and stress testing and wrote up the requirements, implementation and results. The article appeared in Technology Innovation and Application in 2022, and version 1.0 of the system received software copyright registration."
    ]
  },
  "speaking": {
    "title": "Talking about AI with different audiences",
    "paragraphs": [
      "Auckland community events bring together people trying AI for the first time and people already building products. My topics have included how models work, getting started with ChatGPT and Codex, and questions about ethics and marketing.",
      "At the youth leadership forum in Wellington I shared my research experience and discussed how generative AI relates to local culture. The work people already do gives each audience a different route into the conversation."
    ]
  },
  "fact": {
    "title": "Combining ECG images and clinical records",
    "paragraphs": [
      "I cleaned the data, designed and implemented the two-stage fusion architecture, and contributed to writing and revision. We combined a transformer for clinical features with an ECG image model, then evaluated disease detection, future risk and outcomes after diagnosis.",
      "The UK Biobank ECG image subset included about 64,448 participants, and the clinical data covered 133 features. We split the data by patient and used a cohort in Chengdu for external validation. We submitted this work to AISI 2027 / AAAI-27."
    ]
  },
  "ccdd": {
    "title": "Evaluating Chinese debate against professional adjudication",
    "paragraphs": [
      "CCDD links 20,542 speaking turns across 148 debates to 2,690 scoring instances, along with adjudicators’ comments and results. We tested whether models could predict the winner, score individual stages and identify the best speaker.",
      "As second author, I contributed to writing and revision. We submitted the work to ICLR 2027 and revised the manuscript in November 2026."
    ]
  },
  "canon": {
    "title": "Does a continuation respect the world of a novel?",
    "paragraphs": [
      "As fourth author, I helped design the dataset structure. We represented a novel’s characters, places, rules and other elements as individual claims that a reader could check against the text.",
      "We compared seven models and three generation strategies. Structured generation helped continuations include more of the original setting, while its effect on contradictions varied. We submitted the manuscript to ARR in October 2026."
    ]
  },
  "ecg-review": {
    "title": "Reviewing the evidence for AI in ECG interpretation",
    "paragraphs": [
      "As a co-author, I prepared and cleaned data for a systematic review and meta-analysis of AI-based ECG diagnosis and disease prediction. We submitted the manuscript to Clinical Research in Cardiology on 12 November 2026."
    ]
  },
  "business-visit": {
    "title": "Meeting Sir Richard Taylor",
    "paragraphs": [
      "At the request of Li (路易李), founder of a New Zealand business group, I hosted Sun Hengqin, chairman of Oriental Movie Metropolis. I accompanied Sun and the group founder to separate meetings with Sir Richard Taylor. An official WeChat report featured a photograph of Sun, Sir Richard and me.",
      "Sir Richard and I also spoke when he visited Liaocheng in Shandong, China. In all, we met about four or five times."
    ]
  }
};
