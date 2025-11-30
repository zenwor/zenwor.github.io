const cardsData = [
  // Education
  {
    title: "Faculty of Sciences, University of Novi Sad – Information Technologies, BS",
    tags: ["education"],
    body: `GPA: 10.00 | 2023 – present`
  },
  {
    title: "Faculty of Computing, Union University – Computer Science, BS (Scholarship)",
    tags: ["education"],
    body: `GPA: 9.3 | 2023 – present`
  },

  // Industry Experience
  {
    title: "Smartocto – Machine Learning Engineer",
    tags: ["professional"],
    body: `Python, PyTorch, Flower, AWS | <a href="https://smartocto.com">Smartocto</a> | July 2024 – November 2024
           <ul>
             <li>Engineered distributed training workflows for federated language models with Flower + BERT.</li>
             <li>Built scalable AWS ETL pipeline (EC2, VPC, S3, IAM, Lambda) for 30k+ articles.</li>
             <li>Designed modular APIs and configurable pipelines, improving maintainability and accuracy.</li>
             <li>Contributed technical insights on system design and transformer architectures.</li>
           </ul>`
  },

  // Research Experience
  {
    title: "Osteo GDL – Geometric DL for Osteosarcoma (Unpublished Research Project)",
    tags: ["research"],
    body: `PyTorch (Geometric), Geoopt, Matplotlib, Pandas | <a href="https://github.com/zenwor/osteo_gdl">View on GitHub</a>
           <ul>
             <li>Research-style project inspired by SOTA histopathology literature for osteosarcoma classification.</li>
             <li>Implemented three GDL models (GNN, SPD, Hyperbolic) with ResNet/ViT patch embeddings.</li>
             <li>Performed systematic hyperparameter studies (k, curvature C, SPD dimensions).</li>
             <li>Structured research project serving as foundation for potential publication.</li>
           </ul>`
  },

  // Personal Projects
  {
    title: "LLM_LWR_CRAG – Flexible Code RAG Pipeline",
    tags: ["projects"],
    body: `Langchain, Huggingface, Gradio, Bash, Git | <a href="https://github.com/zenwor/llm_lwr_crag">View on GitHub</a>
           <ul>
             <li>Flexible code RAG pipeline for GitHub repositories (Recall@10 = 86%).</li>
             <li>Modular LLM & database handlers via LangChain.</li>
             <li>User-friendly Gradio UI and Sphinx documentation.</li>
           </ul>`
  },
  {
    title: "Article GNN – Article Reads Prediction",
    tags: ["projects"],
    body: `PyTorch, PyTorch Geometric, Pandas, BERT, Git | <a href="https://github.com/zenwor/article_gnn">View on GitHub</a>
           <ul>
             <li>Graph Neural Network leveraging BERT for node feature extraction.</li>
             <li>Improved prediction quality over BERT Regression and XGBoost baselines.</li>
             <li>Generated publication graphs with BERT-encoded node features.</li>
           </ul>`
  },
  {
    title: "(WIP) zwdx – Distributed ML Training Platform",
    tags: ["projects"],
    body: `torch.distributed, Flask, Socket.IO, Docker, Git | <a href="https://github.com/zenwor/zwdx">View on GitHub</a>
           <ul>
             <li>Open-source framework for distributed ML training in PyTorch (DDP, FSDP).</li>
             <li>Python client-server system using Socket.IO, REST APIs, cloudpickle.</li>
             <li>Real-time training progress reporting and logging pipelines.</li>
           </ul>`
  },
  {
    title: "(WIP) zwgrad – Machine Learning Framework",
    tags: ["projects"],
    body: `Python, Numpy, CUDA (JIT), C++, Git | <a href="https://github.com/zenwor/zwgrad">View on GitHub</a>
           <ul>
             <li>ML framework inspired by tinygrad.</li>
             <li>Lazy execution with tracing and kernel fusion optimizations.</li>
             <li>Supports dynamic CUDA code generation and potential MLIR integration.</li>
           </ul>`
  },
  {
    title: "ICM_RAG – RAG Evaluation Pipeline",
    tags: ["projects"],
    body: `Sentence-Transformers, Seaborn, Pandas, Bash, Git | <a href="https://github.com/zenwor/icm_rag">View on GitHub</a>
           <ul>
             <li>Flexible RAG chunking evaluation pipeline (Recall 99%+).</li>
             <li>Experiment logging and plotting using Matplotlib & Seaborn.</li>
             <li>Comparative analysis of 30 experiments written in LaTeX.</li>
           </ul>`
  },
  {
    title: "Reddit GCN – Discussion Classification",
    tags: ["projects"],
    body: `PyTorch, PyTorch Geometric, Pandas, Bash, Git | <a href="https://github.com/zenwor/reddit_gcnn">View on GitHub</a>
           <ul>
             <li>Graph Convolutional Networks for Graph Classification (72% accuracy).</li>
             <li>PyTorch Geometric GCNConv/SAGEConv layers with variable model dimensions.</li>
             <li>Analyzed discussion data with NLP preprocessing insights.</li>
           </ul>`
  },

  // Non-Industry Experience
  {
    title: "Mediterranean ML Summer School 2025 – Participant",
    tags: ["experience"],
    body: `Split, 08–12 September 2025
           <ul>
             <li>Selected as 1 of 300 participants out of ~1700 applicants.</li>
             <li>Presented a poster: "Geometry in Histopathology: Comparative Analysis on Graph Neural Networks and Riemannian Manifold Embeddings in Osteosarcoma Classification".</li>
           </ul>`
  },
  {
    title: "Eastern European ML Summer School 2025 – Teaching Assistant",
    tags: ["experience"],
    body: `Sarajevo, 21–26 July 2025
           <ul>
             <li>Mentored workshops on Computer Vision, Mechanistic Interpretability, Reinforcement Learning, Drug Discovery (Graph ML).</li>
             <li>Collaborated with Tutorial Leads for hands-on session materials.</li>
           </ul>`
  },
  {
    title: "Eastern European ML Summer School 2024 – Participant",
    tags: ["experience"],
    body: `Novi Sad, 15–20 July 2024
           <ul>
             <li>Submitted extended abstracts evaluated competitively.</li>
             <li>Only first-year undergraduate student accepted.</li>
           </ul>`
  },
  {
    title: "Competitive Programming Task Author, Team Lead & IOBIH Scientific Committee Member",
    tags: ["experience"],
    body: `2023 – Present
           <ul>
             <li>Created original tasks for competitive programming olympiads in Bosnia & Herzegovina.</li>
             <li>Designed competition syllabus to enrich higher-level performance.</li>
           </ul>`
  },

  // Achievements
  {
    title: "National Olympiad in Informatics (Republic of Srpska)",
    tags: ["achievements"],
    body: `2017 – 2023
           <ul>
             <li>1st place – awarded by president of Republic of Srpska | 2023</li>
           </ul>`
  },
  {
    title: "Bosnia and Herzegovina Olympiad in Informatics",
    tags: ["achievements"],
    body: `2018 – 2023
           <ul>
             <li>6th place – Balkan Olympiad in Informatics representative (2x) | 2022, 2023</li>
             <li>3rd place – European Junior Olympiad in Informatics representative | 2019</li>
           </ul>`
  },
];
