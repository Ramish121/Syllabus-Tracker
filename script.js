// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyDu8mqTBS-Z-yMwbkkWih_wEHhFp8eOl2s",
    authDomain: "syllabus-tracker-13888.firebaseapp.com",
    projectId: "syllabus-tracker-13888",
    storageBucket: "syllabus-tracker-13888.firebasestorage.app",
    messagingSenderId: "621565704146",
    appId: "1:621565704146:web:0cf3469e71a95fc4407a0b"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Status Configuration (Colors aur Text)
const statusConfig = {
    0: { text: "Not Started", colorClass: "status-0" },
    1: { text: "Studied", colorClass: "status-1" },
    2: { text: "Practise Done", colorClass: "status-2" },
    3: { text: "Revision 1", colorClass: "status-3" },
    4: { text: "Revision 2", colorClass: "status-4" }
};

// Data file jisme saara syllabus hoga
let syllabusData = [
    {
        unitId: "p1_u1",
        title: "Paper 1 - Unit 1: Teaching Aptitude",
        topics: [
            { id: "p1_u1_t1", title: "Teaching: Concept", status: 0 },
            { id: "p1_u1_t2", title: "Teaching: Objectives", status: 0 },
            { id: "p1_u1_t3", title: "Levels of teaching (Memory, Understanding and Reflective)", status: 0 },
            { id: "p1_u1_t4", title: "Characteristics and basic requirements", status: 0 },
            { id: "p1_u1_t5", title: "Learner's characteristics: Characteristics of adolescent and adult learners (Academic, Social, Emotional and Cognitive)", status: 0 },
            { id: "p1_u1_t6", title: "Learner's characteristics: Individual differences", status: 0 },
            { id: "p1_u1_t7", title: "Factors affecting teaching related to: Teacher", status: 0 },
            { id: "p1_u1_t8", title: "Factors affecting teaching related to: Learner", status: 0 },
            { id: "p1_u1_t9", title: "Factors affecting teaching related to: Support material", status: 0 },
            { id: "p1_u1_t10", title: "Factors affecting teaching related to: Instructional facilities", status: 0 },
            { id: "p1_u1_t11", title: "Factors affecting teaching related to: Learning environment and Institution", status: 0 },
            { id: "p1_u1_t12", title: "Methods of teaching in Institutions of higher learning: Teacher centred vs. Learner centred methods", status: 0 },
            { id: "p1_u1_t13", title: "Methods of teaching in Institutions of higher learning: Off-line vs. On-line methods (Swayam, Swayamprabha, MOOCs etc.)", status: 0 },
            { id: "p1_u1_t14", title: "Teaching Support System: Traditional", status: 0 },
            { id: "p1_u1_t15", title: "Teaching Support System: Modern", status: 0 },
            { id: "p1_u1_t16", title: "Teaching Support System: ICT based", status: 0 },
            { id: "p1_u1_t17", title: "Evaluation Systems: Elements and Types of evaluation", status: 0 },
            { id: "p1_u1_t18", title: "Evaluation in Choice Based Credit System in Higher education", status: 0 },
            { id: "p1_u1_t19", title: "Computer based testing", status: 0 },
            { id: "p1_u1_t20", title: "Innovations in evaluation systems", status: 0 }
        ]
    },
    {
        unitId: "p1_u2",
        title: "Paper 1 - Unit 2: Research Aptitude",
        topics: [
            { id: "p1_u2_t1", title: "Research: Meaning", status: 0 },
            { id: "p1_u2_t2", title: "Research: Types", status: 0 },
            { id: "p1_u2_t3", title: "Research: Characteristics", status: 0 },
            { id: "p1_u2_t4", title: "Research: Positivism and Post-positivistic approach to research", status: 0 },
            { id: "p1_u2_t5", title: "Methods of Research: Experimental", status: 0 },
            { id: "p1_u2_t6", title: "Methods of Research: Descriptive", status: 0 },
            { id: "p1_u2_t7", title: "Methods of Research: Historical", status: 0 },
            { id: "p1_u2_t8", title: "Methods of Research: Qualitative and Quantitative methods", status: 0 },
            { id: "p1_u2_t9", title: "Steps of Research", status: 0 },
            { id: "p1_u2_t10", title: "Thesis and Article writing: Format and styles of referencing", status: 0 },
            { id: "p1_u2_t11", title: "Application of ICT in research", status: 0 },
            { id: "p1_u2_t12", title: "Research ethics", status: 0 }
        ]
    },
    {
        unitId: "p1_u3",
        title: "Paper 1 - Unit 3: Comprehension",
        topics: [
            { id: "p1_u3_t1", title: "A passage of text be given. Questions be asked from the passage to be answered", status: 0 }
        ]
    },
    {
        unitId: "p1_u4",
        title: "Paper 1 - Unit 4: Communication",
        topics: [
            { id: "p1_u4_t1", title: "Communication: Meaning", status: 0 },
            { id: "p1_u4_t2", title: "Communication: types", status: 0 },
            { id: "p1_u4_t3", title: "Communication: characteristics of communication", status: 0 },
            { id: "p1_u4_t4", title: "Effective communication: Verbal and Non-verbal", status: 0 },
            { id: "p1_u4_t5", title: "Effective communication: Inter-Cultural and group communications", status: 0 },
            { id: "p1_u4_t6", title: "Effective communication: Classroom communication", status: 0 },
            { id: "p1_u4_t7", title: "Barriers to effective communication", status: 0 },
            { id: "p1_u4_t8", title: "Mass-Media and Society", status: 0 }
        ]
    },
    {
        unitId: "p1_u5",
        title: "Paper 1 - Unit 5: Mathematical Reasoning and Aptitude",
        topics: [
            { id: "p1_u5_t1", title: "Types of reasoning", status: 0 },
            { id: "p1_u5_t2", title: "Number series", status: 0 },
            { id: "p1_u5_t3", title: "Letter series", status: 0 },
            { id: "p1_u5_t4", title: "Codes and Relationships", status: 0 },
            { id: "p1_u5_t5", title: "Mathematical Aptitude: Fraction", status: 0 },
            { id: "p1_u5_t6", title: "Mathematical Aptitude: Time & Distance", status: 0 },
            { id: "p1_u5_t7", title: "Mathematical Aptitude: Ratio", status: 0 },
            { id: "p1_u5_t8", title: "Mathematical Aptitude: Proportion and Percentage", status: 0 },
            { id: "p1_u5_t9", title: "Mathematical Aptitude: Profit and Loss", status: 0 },
            { id: "p1_u5_t10", title: "Mathematical Aptitude: Interest and Discounting", status: 0 },
            { id: "p1_u5_t11", title: "Mathematical Aptitude: Averages etc.", status: 0 }
        ]
    },
    {
        unitId: "p1_u6",
        title: "Paper 1 - Unit 6: Logical Reasoning",
        topics: [
            { id: "p1_u6_t1", title: "Understanding the structure of arguments: argument forms", status: 0 },
            { id: "p1_u6_t2", title: "Understanding the structure of arguments: structure of categorical propositions", status: 0 },
            { id: "p1_u6_t3", title: "Understanding the structure of arguments: Mood and Figure", status: 0 },
            { id: "p1_u6_t4", title: "Understanding the structure of arguments: Formal and Informal fallacies", status: 0 },
            { id: "p1_u6_t5", title: "Understanding the structure of arguments: Uses of language", status: 0 },
            { id: "p1_u6_t6", title: "Understanding the structure of arguments: Connotations and denotations of terms", status: 0 },
            { id: "p1_u6_t7", title: "Understanding the structure of arguments: Classical square of opposition", status: 0 },
            { id: "p1_u6_t8", title: "Evaluating and distinguishing deductive and inductive reasoning", status: 0 },
            { id: "p1_u6_t9", title: "Analogies", status: 0 },
            { id: "p1_u6_t10", title: "Venn diagram: Simple and multiple use for establishing validity of arguments", status: 0 },
            { id: "p1_u6_t11", title: "Indian Logic: Means of knowledge", status: 0 },
            { id: "p1_u6_t12", title: "Pramanas: Pratyaksha (Perception)", status: 0 },
            { id: "p1_u6_t13", title: "Pramanas: Anumana (Inference)", status: 0 },
            { id: "p1_u6_t14", title: "Pramanas: Upamana (Comparison)", status: 0 },
            { id: "p1_u6_t15", title: "Pramanas: Shabda (Verbal testimony)", status: 0 },
            { id: "p1_u6_t16", title: "Pramanas: Arthapatti (Implication) and Anupalabddhi (Non-apprehension)", status: 0 },
            { id: "p1_u6_t17", title: "Structure and kinds of Anumana (inference)", status: 0 },
            { id: "p1_u6_t18", title: "Vyapti (invariable relation)", status: 0 },
            { id: "p1_u6_t19", title: "Hetvabhasas (fallacies of inference)", status: 0 }
        ]
    },
    {
        unitId: "p1_u7",
        title: "Paper 1 - Unit 7: Data Interpretation",
        topics: [
            { id: "p1_u7_t1", title: "Sources, acquisition and classification of Data", status: 0 },
            { id: "p1_u7_t2", title: "Quantitative and Qualitative Data", status: 0 },
            { id: "p1_u7_t3", title: "Graphical representation (Bar-chart, Histograms, Pie-chart, Table-chart and Line-chart)", status: 0 },
            { id: "p1_u7_t4", title: "Mapping of Data", status: 0 },
            { id: "p1_u7_t5", title: "Data Interpretation", status: 0 },
            { id: "p1_u7_t6", title: "Data and Governance", status: 0 }
        ]
    },
    {
        unitId: "p1_u8",
        title: "Paper 1 - Unit 8: Information and Communication Technology (ICT)",
        topics: [
            { id: "p1_u8_t1", title: "ICT: General abbreviations and terminology", status: 0 },
            { id: "p1_u8_t2", title: "Basics of Internet", status: 0 },
            { id: "p1_u8_t3", title: "Basics of Intranet", status: 0 },
            { id: "p1_u8_t4", title: "Basics of E-mail", status: 0 },
            { id: "p1_u8_t5", title: "Basics of Audio and Video-conferencing", status: 0 },
            { id: "p1_u8_t6", title: "Digital initiatives in higher education", status: 0 },
            { id: "p1_u8_t7", title: "ICT and Governance", status: 0 }
        ]
    },
    {
        unitId: "p1_u9",
        title: "Paper 1 - Unit 9: People, Development and Environment",
        topics: [
            { id: "p1_u9_t1", title: "Development and environment: Millennium development goals", status: 0 },
            { id: "p1_u9_t2", title: "Development and environment: Sustainable development goals", status: 0 },
            { id: "p1_u9_t3", title: "Human and environment interaction: Anthropogenic activities and their impacts on environment", status: 0 },
            { id: "p1_u9_t4", title: "Environmental issues: Local, Regional and Global", status: 0 },
            { id: "p1_u9_t5", title: "Environmental issues: Air pollution", status: 0 },
            { id: "p1_u9_t6", title: "Environmental issues: Water pollution", status: 0 },
            { id: "p1_u9_t7", title: "Environmental issues: Soil pollution", status: 0 },
            { id: "p1_u9_t8", title: "Environmental issues: Noise pollution", status: 0 },
            { id: "p1_u9_t9", title: "Environmental issues: Waste (solid, liquid, biomedical, hazardous, electronic)", status: 0 },
            { id: "p1_u9_t10", title: "Environmental issues: Climate change and its Socio-Economic and Political dimensions", status: 0 },
            { id: "p1_u9_t11", title: "Impacts of pollutants on human health", status: 0 },
            { id: "p1_u9_t12", title: "Natural and energy resources: Solar", status: 0 },
            { id: "p1_u9_t13", title: "Natural and energy resources: Wind", status: 0 },
            { id: "p1_u9_t14", title: "Natural and energy resources: Soil", status: 0 },
            { id: "p1_u9_t15", title: "Natural and energy resources: Hydro", status: 0 },
            { id: "p1_u9_t16", title: "Natural and energy resources: Geothermal", status: 0 },
            { id: "p1_u9_t17", title: "Natural and energy resources: Biomass", status: 0 },
            { id: "p1_u9_t18", title: "Natural and energy resources: Nuclear", status: 0 },
            { id: "p1_u9_t19", title: "Natural and energy resources: Forests", status: 0 },
            { id: "p1_u9_t20", title: "Natural hazards and disasters: Mitigation strategies", status: 0 },
            { id: "p1_u9_t21", title: "Environmental Protection Act (1986)", status: 0 },
            { id: "p1_u9_t22", title: "National Action Plan on Climate Change", status: 0 },
            { id: "p1_u9_t23", title: "International agreements/efforts: Montreal Protocol", status: 0 },
            { id: "p1_u9_t24", title: "International agreements/efforts: Rio Summit", status: 0 },
            { id: "p1_u9_t25", title: "International agreements/efforts: Convention on Biodiversity", status: 0 },
            { id: "p1_u9_t26", title: "International agreements/efforts: Kyoto Protocol", status: 0 },
            { id: "p1_u9_t27", title: "International agreements/efforts: Paris Agreement", status: 0 },
            { id: "p1_u9_t28", title: "International agreements/efforts: International Solar Alliance", status: 0 }
        ]
    },
    {
        unitId: "p1_u10",
        title: "Paper 1 - Unit 10: Higher Education System",
        topics: [
            { id: "p1_u10_t1", title: "Institutions of higher learning and education in ancient India", status: 0 },
            { id: "p1_u10_t2", title: "Evolution of higher learning and research in Post Independence India", status: 0 },
            { id: "p1_u10_t3", title: "Oriental, Conventional and Non-conventional learning programmes in India", status: 0 },
            { id: "p1_u10_t4", title: "Professional, Technical and Skill Based education", status: 0 },
            { id: "p1_u10_t5", title: "Value education and environmental education", status: 0 },
            { id: "p1_u10_t6", title: "Policies, Governance, and Administration", status: 0 }
        ]
    },
    {
        unitId: "p2_u1",
        title: "Paper 2 - Unit 1: Emergence of Psychology",
        topics: [
            { id: "p2_u1_t1", title: "Psychological thought in some major Eastern Systems: Bhagavad Gita", status: 0 }, //[cite: 14]
            { id: "p2_u1_t2", title: "Psychological thought in some major Eastern Systems: Buddhism", status: 0 }, //[cite: 14]
            { id: "p2_u1_t3", title: "Psychological thought in some major Eastern Systems: Sufism", status: 0 }, //[cite: 14]
            { id: "p2_u1_t4", title: "Psychological thought in some major Eastern Systems: Integral Yoga", status: 0 }, //[cite: 14]
            { id: "p2_u1_t5", title: "Academic psychology in India: Pre-independence era", status: 0 }, //[cite: 14]
            { id: "p2_u1_t6", title: "Academic psychology in India: post-independence era", status: 0 }, //[cite: 14]
            { id: "p2_u1_t7", title: "Academic psychology in India: 1970s: The move to addressing social issues", status: 0 }, //[cite: 14]
            { id: "p2_u1_t8", title: "Academic psychology in India: 1980s: Indigenization", status: 0 }, //[cite: 14]
            { id: "p2_u1_t9", title: "Academic psychology in India: 1990s: Paradigmatic concerns, disciplinary identity crisis", status: 0 }, //[cite: 14]
            { id: "p2_u1_t10", title: "Academic psychology in India: 2000s: Emergence of Indian psychology in academia", status: 0 }, //[cite: 14]
            { id: "p2_u1_t11", title: "Issues: The colonial encounter", status: 0 }, //[cite: 14]
            { id: "p2_u1_t12", title: "Issues: Post colonialism and psychology", status: 0 }, //[cite: 14]
            { id: "p2_u1_t13", title: "Issues: Lack of distinct disciplinary identity", status: 0 }, //[cite: 14]
            { id: "p2_u1_t14", title: "Western: Greek heritage, medieval period and modern period", status: 0 }, //[cite: 14]
            { id: "p2_u1_t15", title: "Western: Structuralism", status: 0 }, //[cite: 14]
            { id: "p2_u1_t16", title: "Western: Functionalism", status: 0 }, //[cite: 14]
            { id: "p2_u1_t17", title: "Western: Psychoanalytical", status: 0 }, //[cite: 14]
            { id: "p2_u1_t18", title: "Western: Gestalt", status: 0 }, //[cite: 14]
            { id: "p2_u1_t19", title: "Western: Behaviorism", status: 0 }, //[cite: 14]
            { id: "p2_u1_t20", title: "Western: Humanistic-Existential", status: 0 }, //[cite: 14]
            { id: "p2_u1_t21", title: "Western: Transpersonal", status: 0 }, //[cite: 14]
            { id: "p2_u1_t22", title: "Western: Cognitive revolution", status: 0 }, //[cite: 14]
            { id: "p2_u1_t23", title: "Western: Multiculturalism", status: 0 }, //[cite: 14]
            { id: "p2_u1_t24", title: "Four founding paths of academic psychology: Wundt", status: 0 }, //[cite: 14]
            { id: "p2_u1_t25", title: "Four founding paths of academic psychology: Freud", status: 0 }, //[cite: 14]
            { id: "p2_u1_t26", title: "Four founding paths of academic psychology: James", status: 0 }, //[cite: 14]
            { id: "p2_u1_t27", title: "Four founding paths of academic psychology: Dilthey", status: 0 }, //[cite: 14]
            { id: "p2_u1_t28", title: "Issues: Crisis in psychology due to strict adherence to experimental-analytical paradigm (logical empiricism)", status: 0 }, //[cite: 14]
            { id: "p2_u1_t29", title: "Indic influences on modern psychology", status: 0 }, //[cite: 14]
            { id: "p2_u1_t30", title: "Essential aspects of knowledge paradigms: Ontology", status: 0 }, //[cite: 14]
            { id: "p2_u1_t31", title: "Essential aspects of knowledge paradigms: epistemology", status: 0 }, //[cite: 14]
            { id: "p2_u1_t32", title: "Essential aspects of knowledge paradigms: methodology", status: 0 }, //[cite: 14]
            { id: "p2_u1_t33", title: "Paradigms of Western Psychology: Positivism", status: 0 }, //[cite: 14]
            { id: "p2_u1_t34", title: "Paradigms of Western Psychology: Post-Positivism", status: 0 }, //[cite: 14]
            { id: "p2_u1_t35", title: "Paradigms of Western Psychology: Critical perspective", status: 0 }, //[cite: 14]
            { id: "p2_u1_t36", title: "Paradigms of Western Psychology: Social Constructionism", status: 0 }, //[cite: 14]
            { id: "p2_u1_t37", title: "Paradigms of Western Psychology: Existential Phenomenology", status: 0 }, //[cite: 14]
            { id: "p2_u1_t38", title: "Paradigms of Western Psychology: Co-operative Enquiry", status: 0 }, //[cite: 14]
            { id: "p2_u1_t39", title: "Paradigmatic Controversies", status: 0 }, //[cite: 14]
            { id: "p2_u1_t40", title: "Significant Indian paradigms on psychological knowledge: Yoga", status: 0 }, //[cite: 14]
            { id: "p2_u1_t41", title: "Significant Indian paradigms on psychological knowledge: Bhagavad Gita", status: 0 }, //[cite: 14]
            { id: "p2_u1_t42", title: "Significant Indian paradigms on psychological knowledge: Buddhism", status: 0 }, //[cite: 14]
            { id: "p2_u1_t43", title: "Significant Indian paradigms on psychological knowledge: Sufism", status: 0 }, //[cite: 14]
            { id: "p2_u1_t44", title: "Significant Indian paradigms on psychological knowledge: Integral Yoga", status: 0 }, //[cite: 14]
            { id: "p2_u1_t45", title: "Science and spirituality (avidya and vidya)", status: 0 }, //[cite: 14]
            { id: "p2_u1_t46", title: "The primacy of self-knowledge in Indian psychology", status: 0 } //[cite: 14]
        ]
    },
    {
        unitId: "p2_u2",
        title: "Paper 2 - Unit 2: Research Methodology and Statistics",
        topics: [
            { id: "p2_u2_t1", title: "Research: Meaning", status: 0 }, //[cite: 15]
            { id: "p2_u2_t2", title: "Research: Purpose", status: 0 }, //[cite: 15]
            { id: "p2_u2_t3", title: "Research: Dimensions", status: 0 }, //[cite: 15]
            { id: "p2_u2_t4", title: "Research problems", status: 0 }, //[cite: 15]
            { id: "p2_u2_t5", title: "Variables and Operational Definitions", status: 0 }, //[cite: 15]
            { id: "p2_u2_t6", title: "Hypothesis", status: 0 }, //[cite: 15]
            { id: "p2_u2_t7", title: "Sampling", status: 0 }, //[cite: 15]
            { id: "p2_u2_t8", title: "Ethics in conducting and reporting research", status: 0 }, //[cite: 15]
            { id: "p2_u2_t9", title: "Paradigms of research: Quantitative", status: 0 }, //[cite: 15]
            { id: "p2_u2_t10", title: "Paradigms of research: Qualitative", status: 0 }, //[cite: 15]
            { id: "p2_u2_t11", title: "Paradigms of research: Mixed methods approach", status: 0 }, //[cite: 15]
            { id: "p2_u2_t12", title: "Methods of research: Observation", status: 0 }, //[cite: 15]
            { id: "p2_u2_t13", title: "Methods of research: Survey [Interview, Questionnaires]", status: 0 }, //[cite: 15]
            { id: "p2_u2_t14", title: "Methods of research: Experimental", status: 0 }, //[cite: 15]
            { id: "p2_u2_t15", title: "Methods of research: Quasi-experimental", status: 0 }, //[cite: 15]
            { id: "p2_u2_t16", title: "Methods of research: Field studies", status: 0 }, //[cite: 15]
            { id: "p2_u2_t17", title: "Methods of research: Cross-Cultural Studies", status: 0 }, //[cite: 15]
            { id: "p2_u2_t18", title: "Methods of research: Phenomenology", status: 0 }, //[cite: 15]
            { id: "p2_u2_t19", title: "Methods of research: Grounded theory", status: 0 }, //[cite: 15]
            { id: "p2_u2_t20", title: "Methods of research: Focus groups", status: 0 }, //[cite: 15]
            { id: "p2_u2_t21", title: "Methods of research: Narratives", status: 0 }, //[cite: 15]
            { id: "p2_u2_t22", title: "Methods of research: Case studies", status: 0 }, //[cite: 15]
            { id: "p2_u2_t23", title: "Methods of research: Ethnography", status: 0 }, //[cite: 15]
            { id: "p2_u2_t24", title: "Statistics in Psychology: Measures of Central Tendency and Dispersion", status: 0 }, //[cite: 15]
            { id: "p2_u2_t25", title: "Normal Probability Curve", status: 0 }, //[cite: 15]
            { id: "p2_u2_t26", title: "Parametric [t-test]", status: 0 }, //[cite: 15]
            { id: "p2_u2_t27", title: "Non-parametric tests [Sign Test, Wilcoxon Signed rank test, Mann-Whitney test, Kruskal-Wallis test, Friedman]", status: 0 }, //[cite: 15]
            { id: "p2_u2_t28", title: "Power analysis", status: 0 }, //[cite: 15]
            { id: "p2_u2_t29", title: "Effect size", status: 0 }, //[cite: 15]
            { id: "p2_u2_t30", title: "Correlational Analysis: Correlation [Product Moment, Rank Order]", status: 0 }, //[cite: 15]
            { id: "p2_u2_t31", title: "Correlational Analysis: Partial correlation", status: 0 }, //[cite: 15]
            { id: "p2_u2_t32", title: "Correlational Analysis: multiple correlation", status: 0 }, //[cite: 15]
            { id: "p2_u2_t33", title: "Special Correlation Methods: Biserial", status: 0 }, //[cite: 15]
            { id: "p2_u2_t34", title: "Special Correlation Methods: Point biserial", status: 0 }, //[cite: 15]
            { id: "p2_u2_t35", title: "Special Correlation Methods: tetrachoric", status: 0 }, //[cite: 15]
            { id: "p2_u2_t36", title: "Special Correlation Methods: phi coefficient", status: 0 }, //[cite: 15]
            { id: "p2_u2_t37", title: "Regression: Simple linear regression", status: 0 }, //[cite: 15]
            { id: "p2_u2_t38", title: "Regression: Multiple regression", status: 0 }, //[cite: 15]
            { id: "p2_u2_t39", title: "Factor analysis: Assumptions", status: 0 }, //[cite: 15]
            { id: "p2_u2_t40", title: "Factor analysis: Methods", status: 0 }, //[cite: 15]
            { id: "p2_u2_t41", title: "Factor analysis: Rotation and Interpretation", status: 0 }, //[cite: 15]
            { id: "p2_u2_t42", title: "Experimental Designs: ANOVA [One-way, Factorial]", status: 0 }, //[cite: 15]
            { id: "p2_u2_t43", title: "Experimental Designs: Randomized Block Designs", status: 0 }, //[cite: 15]
            { id: "p2_u2_t44", title: "Experimental Designs: Repeated Measures Design", status: 0 }, //[cite: 15]
            { id: "p2_u2_t45", title: "Experimental Designs: Latin Square", status: 0 }, //[cite: 15]
            { id: "p2_u2_t46", title: "Experimental Designs: Cohort studies", status: 0 }, //[cite: 15]
            { id: "p2_u2_t47", title: "Experimental Designs: Time series", status: 0 }, //[cite: 15]
            { id: "p2_u2_t48", title: "Experimental Designs: MANOVA", status: 0 }, //[cite: 15]
            { id: "p2_u2_t49", title: "Experimental Designs: ANCOVA", status: 0 }, //[cite: 15]
            { id: "p2_u2_t50", title: "Single-subject designs", status: 0 } //[cite: 15]
        ]
    },
    {
        unitId: "p2_u3",
        title: "Paper 2 - Unit 3: Psychological testing",
        topics: [
            { id: "p2_u3_t1", title: "Types of tests", status: 0 }, //[cite: 16]
            { id: "p2_u3_t2", title: "Test construction: Item writing", status: 0 }, //[cite: 16]
            { id: "p2_u3_t3", title: "Test construction: item analysis", status: 0 }, //[cite: 16]
            { id: "p2_u3_t4", title: "Test standardization: Reliability", status: 0 }, //[cite: 16]
            { id: "p2_u3_t5", title: "Test standardization: validity", status: 0 }, //[cite: 16]
            { id: "p2_u3_t6", title: "Test standardization: Norms", status: 0 }, //[cite: 16]
            { id: "p2_u3_t7", title: "Areas of testing: Intelligence", status: 0 }, //[cite: 16]
            { id: "p2_u3_t8", title: "Areas of testing: creativity", status: 0 }, //[cite: 16]
            { id: "p2_u3_t9", title: "Areas of testing: neuropsychological tests", status: 0 }, //[cite: 16]
            { id: "p2_u3_t10", title: "Areas of testing: aptitude", status: 0 }, //[cite: 16]
            { id: "p2_u3_t11", title: "Areas of testing: Personality assessment", status: 0 }, //[cite: 16]
            { id: "p2_u3_t12", title: "Areas of testing: interest inventories", status: 0 }, //[cite: 16]
            { id: "p2_u3_t13", title: "Attitude scales – Semantic differential", status: 0 }, //[cite: 16]
            { id: "p2_u3_t14", title: "Attitude scales – Staples", status: 0 }, //[cite: 16]
            { id: "p2_u3_t15", title: "Attitude scales – Likert scale", status: 0 }, //[cite: 16]
            { id: "p2_u3_t16", title: "Computer-based psychological testing", status: 0 }, //[cite: 16]
            { id: "p2_u3_t17", title: "Applications of psychological testing in various settings: Clinical", status: 0 }, //[cite: 16]
            { id: "p2_u3_t18", title: "Applications of psychological testing in various settings: Organizational and business", status: 0 }, //[cite: 16]
            { id: "p2_u3_t19", title: "Applications of psychological testing in various settings: Education", status: 0 }, //[cite: 16]
            { id: "p2_u3_t20", title: "Applications of psychological testing in various settings: Counseling", status: 0 }, //[cite: 16]
            { id: "p2_u3_t21", title: "Applications of psychological testing in various settings: Military", status: 0 }, //[cite: 16]
            { id: "p2_u3_t22", title: "Applications of psychological testing in various settings: Career guidance", status: 0 } //[cite: 16]
        ]
    },
    {
        unitId: "p2_u4",
        title: "Paper 2 - Unit 4: Biological basis of behavior",
        topics: [
            { id: "p2_u4_t1", title: "Sensory systems: General and specific sensations", status: 0 }, //[cite: 17]
            { id: "p2_u4_t2", title: "Sensory systems: receptors and processes", status: 0 }, //[cite: 17]
            { id: "p2_u4_t3", title: "Neurons: Structure", status: 0 }, //[cite: 17]
            { id: "p2_u4_t4", title: "Neurons: functions", status: 0 }, //[cite: 17]
            { id: "p2_u4_t5", title: "Neurons: types", status: 0 }, //[cite: 17]
            { id: "p2_u4_t6", title: "Neurons: neural impulse", status: 0 }, //[cite: 17]
            { id: "p2_u4_t7", title: "Neurons: synaptic transmission", status: 0 }, //[cite: 17]
            { id: "p2_u4_t8", title: "Neurotransmitters", status: 0 }, //[cite: 17]
            { id: "p2_u4_t9", title: "The Central and Peripheral Nervous Systems – Structure and functions", status: 0 }, //[cite: 17]
            { id: "p2_u4_t10", title: "Neuroplasticity", status: 0 }, //[cite: 17]
            { id: "p2_u4_t11", title: "Methods of Physiological Psychology: Invasive methods – Anatomical methods", status: 0 }, //[cite: 17]
            { id: "p2_u4_t12", title: "Methods of Physiological Psychology: Invasive methods – degeneration techniques", status: 0 }, //[cite: 17]
            { id: "p2_u4_t13", title: "Methods of Physiological Psychology: Invasive methods – lesion techniques", status: 0 }, //[cite: 17]
            { id: "p2_u4_t14", title: "Methods of Physiological Psychology: Invasive methods – chemical methods", status: 0 }, //[cite: 17]
            { id: "p2_u4_t15", title: "Methods of Physiological Psychology: Invasive methods – microelectrode studies", status: 0 }, //[cite: 17]
            { id: "p2_u4_t16", title: "Methods of Physiological Psychology: Non-invasive methods – EEG", status: 0 }, //[cite: 17]
            { id: "p2_u4_t17", title: "Methods of Physiological Psychology: Non-invasive methods – Scanning methods", status: 0 }, //[cite: 17]
            { id: "p2_u4_t18", title: "Muscular and Glandular system: Types and functions", status: 0 }, //[cite: 17]
            { id: "p2_u4_t19", title: "Biological basis of Motivation: Hunger", status: 0 }, //[cite: 17]
            { id: "p2_u4_t20", title: "Biological basis of Motivation: Thirst", status: 0 }, //[cite: 17]
            { id: "p2_u4_t21", title: "Biological basis of Motivation: Sleep", status: 0 }, //[cite: 17]
            { id: "p2_u4_t22", title: "Biological basis of Motivation: Sex", status: 0 }, //[cite: 17]
            { id: "p2_u4_t23", title: "Biological basis of emotion: The Limbic system", status: 0 }, //[cite: 17]
            { id: "p2_u4_t24", title: "Biological basis of emotion: Hormonal regulation of behavior", status: 0 }, //[cite: 17]
            { id: "p2_u4_t25", title: "Genetics and behavior: Chromosomal anomalies", status: 0 }, //[cite: 17]
            { id: "p2_u4_t26", title: "Genetics and behavior: Nature-Nurture controversy [Twin studies and adoption studies]", status: 0 } //[cite: 17]
        ]
    },
    {
        unitId: "p2_u5",
        title: "Paper 2 - Unit 5: Attention, Perception, Learning, Memory and Forgetting",
        topics: [
            { id: "p2_u5_t1", title: "Attention: Forms of attention", status: 0 }, //[cite: 18]
            { id: "p2_u5_t2", title: "Attention: Models of attention", status: 0 }, //[cite: 18]
            { id: "p2_u5_t3", title: "Perception: Approaches to the Study of Perception: Gestalt and physiological approaches", status: 0 }, //[cite: 18]
            { id: "p2_u5_t4", title: "Perceptual Organization: Gestalt", status: 0 }, //[cite: 18]
            { id: "p2_u5_t5", title: "Perceptual Organization: Figure and Ground", status: 0 }, //[cite: 18]
            { id: "p2_u5_t6", title: "Perceptual Organization: Law of Organization", status: 0 }, //[cite: 18]
            { id: "p2_u5_t7", title: "Perceptual Constancy: Size", status: 0 }, //[cite: 18]
            { id: "p2_u5_t8", title: "Perceptual Constancy: Shape", status: 0 }, //[cite: 18]
            { id: "p2_u5_t9", title: "Perceptual Constancy: Color", status: 0 }, //[cite: 18]
            { id: "p2_u5_t10", title: "Perceptual Constancy: Illusions", status: 0 }, //[cite: 18]
            { id: "p2_u5_t11", title: "Perception of Form, Depth and Movement", status: 0 }, //[cite: 18]
            { id: "p2_u5_t12", title: "Role of motivation and learning in perception", status: 0 }, //[cite: 18]
            { id: "p2_u5_t13", title: "Signal detection theory: Assumptions", status: 0 }, //[cite: 18]
            { id: "p2_u5_t14", title: "Signal detection theory: applications", status: 0 }, //[cite: 18]
            { id: "p2_u5_t15", title: "Subliminal perception and related factors", status: 0 }, //[cite: 18]
            { id: "p2_u5_t16", title: "information processing approach to perception", status: 0 }, //[cite: 18]
            { id: "p2_u5_t17", title: "culture and perception", status: 0 }, //[cite: 18]
            { id: "p2_u5_t18", title: "perceptual styles", status: 0 }, //[cite: 18]
            { id: "p2_u5_t19", title: "Pattern recognition", status: 0 }, //[cite: 18]
            { id: "p2_u5_t20", title: "Ecological perspective on perception", status: 0 }, //[cite: 18]
            { id: "p2_u5_t21", title: "Learning Process: Fundamental theories: Thorndike", status: 0 }, //[cite: 18]
            { id: "p2_u5_t22", title: "Learning Process: Fundamental theories: Guthrie", status: 0 }, //[cite: 18]
            { id: "p2_u5_t23", title: "Learning Process: Fundamental theories: Hull", status: 0 }, //[cite: 18]
            { id: "p2_u5_t24", title: "Classical Conditioning: Procedure, phenomena and related issues", status: 0 }, //[cite: 18]
            { id: "p2_u5_t25", title: "Instrumental learning: Phenomena, Paradigms and theoretical issues", status: 0 }, //[cite: 18]
            { id: "p2_u5_t26", title: "Reinforcement: Basic variables and schedules", status: 0 }, //[cite: 18]
            { id: "p2_u5_t27", title: "Behaviour modification and its applications", status: 0 }, //[cite: 18]
            { id: "p2_u5_t28", title: "Cognitive approaches in learning: Latent learning", status: 0 }, //[cite: 18]
            { id: "p2_u5_t29", title: "Cognitive approaches in learning: observational learning", status: 0 }, //[cite: 18]
            { id: "p2_u5_t30", title: "Verbal learning and Discrimination learning", status: 0 }, //[cite: 18]
            { id: "p2_u5_t31", title: "Recent trends in learning: Neurophysiology of learning", status: 0 }, //[cite: 18]
            { id: "p2_u5_t32", title: "Memory processes: Encoding", status: 0 }, //[cite: 18]
            { id: "p2_u5_t33", title: "Memory processes: Storage", status: 0 }, //[cite: 18]
            { id: "p2_u5_t34", title: "Memory processes: Retrieval", status: 0 }, //[cite: 18]
            { id: "p2_u5_t35", title: "Stages of memory: Sensory memory", status: 0 }, //[cite: 18]
            { id: "p2_u5_t36", title: "Stages of memory: Short-term memory (Working memory)", status: 0 }, //[cite: 18]
            { id: "p2_u5_t37", title: "Stages of memory: Long-term Memory (Declarative – Episodic)", status: 0 }, //[cite: 18]
            { id: "p2_u5_t38", title: "Stages of memory: Long-term Memory (Declarative – Semantic)", status: 0 }, //[cite: 18]
            { id: "p2_u5_t39", title: "Stages of memory: Long-term Memory (Procedural)", status: 0 }, //[cite: 18]
            { id: "p2_u5_t40", title: "Theories of Forgetting: Interference", status: 0 }, //[cite: 18]
            { id: "p2_u5_t41", title: "Theories of Forgetting: Retrieval Failure", status: 0 }, //[cite: 18]
            { id: "p2_u5_t42", title: "Theories of Forgetting: Decay", status: 0 }, //[cite: 18]
            { id: "p2_u5_t43", title: "Theories of Forgetting: Motivated forgetting", status: 0 } //[cite: 18]
        ]
    },
    {
        unitId: "p2_u6",
        title: "Paper 2 - Unit 6: Thinking, Intelligence and Creativity",
        topics: [
            { id: "p2_u6_t1", title: "Theoretical perspectives on thought processes: Associationism", status: 0 }, //[cite: 19]
            { id: "p2_u6_t2", title: "Theoretical perspectives on thought processes: Gestalt", status: 0 }, //[cite: 19]
            { id: "p2_u6_t3", title: "Theoretical perspectives on thought processes: Information processing", status: 0 }, //[cite: 19]
            { id: "p2_u6_t4", title: "Theoretical perspectives on thought processes: Feature integration model", status: 0 }, //[cite: 19]
            { id: "p2_u6_t5", title: "Concept formation: Rules, Types, and Strategies", status: 0 }, //[cite: 19]
            { id: "p2_u6_t6", title: "Role of concepts in thinking", status: 0 }, //[cite: 19]
            { id: "p2_u6_t7", title: "Types of Reasoning", status: 0 }, //[cite: 19]
            { id: "p2_u6_t8", title: "Language and thought", status: 0 }, //[cite: 19]
            { id: "p2_u6_t9", title: "Problem solving: Type, Strategies, and Obstacles", status: 0 }, //[cite: 19]
            { id: "p2_u6_t10", title: "Decision-making: Types and models", status: 0 }, //[cite: 19]
            { id: "p2_u6_t11", title: "Metacognition: Metacognitive knowledge", status: 0 }, //[cite: 19]
            { id: "p2_u6_t12", title: "Metacognition: Metacognitive regulation", status: 0 }, //[cite: 19]
            { id: "p2_u6_t13", title: "Intelligence: Spearman", status: 0 }, //[cite: 19]
            { id: "p2_u6_t14", title: "Intelligence: Thurstone", status: 0 }, //[cite: 19]
            { id: "p2_u6_t15", title: "Intelligence: Jensen", status: 0 }, //[cite: 19]
            { id: "p2_u6_t16", title: "Intelligence: Cattell", status: 0 }, //[cite: 19]
            { id: "p2_u6_t17", title: "Intelligence: Gardner", status: 0 }, //[cite: 19]
            { id: "p2_u6_t18", title: "Intelligence: Stenberg", status: 0 }, //[cite: 19]
            { id: "p2_u6_t19", title: "Intelligence: Goleman", status: 0 }, //[cite: 19]
            { id: "p2_u6_t20", title: "Intelligence: Das, Kar & Parrila", status: 0 }, //[cite: 19]
            { id: "p2_u6_t21", title: "Creativity: Torrance", status: 0 }, //[cite: 19]
            { id: "p2_u6_t22", title: "Creativity: Getzels & Jackson", status: 0 }, //[cite: 19]
            { id: "p2_u6_t23", title: "Creativity: Guilford", status: 0 }, //[cite: 19]
            { id: "p2_u6_t24", title: "Creativity: Wallach & Kogan", status: 0 }, //[cite: 19]
            { id: "p2_u6_t25", title: "Relationship between Intelligence and Creativity", status: 0 } //[cite: 19]
        ]
    },
    {
        unitId: "p2_u7",
        title: "Paper 2 - Unit 7: Personality, Motivation, emotion, stress and coping",
        topics: [
            { id: "p2_u7_t1", title: "Determinants of personality: Biological", status: 0 }, //[cite: 20]
            { id: "p2_u7_t2", title: "Determinants of personality: socio-cultural", status: 0 }, //[cite: 20]
            { id: "p2_u7_t3", title: "Approaches to the study of personality: Psychoanalytical", status: 0 }, //[cite: 20]
            { id: "p2_u7_t4", title: "Approaches to the study of personality: Neo-Freudian", status: 0 }, //[cite: 20]
            { id: "p2_u7_t5", title: "Approaches to the study of personality: Social learning", status: 0 }, //[cite: 20]
            { id: "p2_u7_t6", title: "Approaches to the study of personality: Trait and Type", status: 0 }, //[cite: 20]
            { id: "p2_u7_t7", title: "Approaches to the study of personality: Cognitive", status: 0 }, //[cite: 20]
            { id: "p2_u7_t8", title: "Approaches to the study of personality: Humanistic", status: 0 }, //[cite: 20]
            { id: "p2_u7_t9", title: "Approaches to the study of personality: Existential", status: 0 }, //[cite: 20]
            { id: "p2_u7_t10", title: "Approaches to the study of personality: Transpersonal psychology", status: 0 }, //[cite: 20]
            { id: "p2_u7_t11", title: "Other theories: Rotter's Locus of Control", status: 0 }, //[cite: 20]
            { id: "p2_u7_t12", title: "Other theories: Seligman's Explanatory styles", status: 0 }, //[cite: 20]
            { id: "p2_u7_t13", title: "Other theories: Kohlberg's theory of Moral development", status: 0 }, //[cite: 20]
            { id: "p2_u7_t14", title: "Basic motivational concepts: Instincts", status: 0 }, //[cite: 20]
            { id: "p2_u7_t15", title: "Basic motivational concepts: Needs", status: 0 }, //[cite: 20]
            { id: "p2_u7_t16", title: "Basic motivational concepts: Drives", status: 0 }, //[cite: 20]
            { id: "p2_u7_t17", title: "Basic motivational concepts: Arousal", status: 0 }, //[cite: 20]
            { id: "p2_u7_t18", title: "Basic motivational concepts: Incentives", status: 0 }, //[cite: 20]
            { id: "p2_u7_t19", title: "Basic motivational concepts: Motivational Cycle", status: 0 }, //[cite: 20]
            { id: "p2_u7_t20", title: "Approaches to the study of motivation: Psychoanalytical", status: 0 }, //[cite: 20]
            { id: "p2_u7_t21", title: "Approaches to the study of motivation: Ethological", status: 0 }, //[cite: 20]
            { id: "p2_u7_t22", title: "Approaches to the study of motivation: S-R Cognitive", status: 0 }, //[cite: 20]
            { id: "p2_u7_t23", title: "Approaches to the study of motivation: Humanistic", status: 0 }, //[cite: 20]
            { id: "p2_u7_t24", title: "Exploratory behavior and curiosity", status: 0 }, //[cite: 20]
            { id: "p2_u7_t25", title: "Zuckerman's Sensation seeking", status: 0 }, //[cite: 20]
            { id: "p2_u7_t26", title: "Achievement, Affiliation and Power", status: 0 }, //[cite: 20]
            { id: "p2_u7_t27", title: "Motivational Competence", status: 0 }, //[cite: 20]
            { id: "p2_u7_t28", title: "Self-regulation", status: 0 }, //[cite: 20]
            { id: "p2_u7_t29", title: "Flow", status: 0 }, //[cite: 20]
            { id: "p2_u7_t30", title: "Emotions: Physiological correlates", status: 0 }, //[cite: 20]
            { id: "p2_u7_t31", title: "Theories of emotions: James-Lange", status: 0 }, //[cite: 20]
            { id: "p2_u7_t32", title: "Theories of emotions: Canon-Bard", status: 0 }, //[cite: 20]
            { id: "p2_u7_t33", title: "Theories of emotions: Schachter and Singer", status: 0 }, //[cite: 20]
            { id: "p2_u7_t34", title: "Theories of emotions: Lazarus", status: 0 }, //[cite: 20]
            { id: "p2_u7_t35", title: "Theories of emotions: Lindsley", status: 0 }, //[cite: 20]
            { id: "p2_u7_t36", title: "Emotion regulation", status: 0 }, //[cite: 20]
            { id: "p2_u7_t37", title: "Conflicts: Sources and types", status: 0 }, //[cite: 20]
            { id: "p2_u7_t38", title: "Stress and Coping: Concept", status: 0 }, //[cite: 20]
            { id: "p2_u7_t39", title: "Stress and Coping: Models", status: 0 }, //[cite: 20]
            { id: "p2_u7_t40", title: "Stress and Coping: Type A, B, C, D behaviors", status: 0 }, //[cite: 20]
            { id: "p2_u7_t41", title: "Stress management strategies: Biofeedback", status: 0 }, //[cite: 20]
            { id: "p2_u7_t42", title: "Stress management strategies: Music therapy", status: 0 }, //[cite: 20]
            { id: "p2_u7_t43", title: "Stress management strategies: Breathing exercises", status: 0 }, //[cite: 20]
            { id: "p2_u7_t44", title: "Stress management strategies: Progressive Muscular Relaxation", status: 0 }, //[cite: 20]
            { id: "p2_u7_t45", title: "Stress management strategies: Guided Imagery", status: 0 }, //[cite: 20]
            { id: "p2_u7_t46", title: "Stress management strategies: Mindfulness", status: 0 }, //[cite: 20]
            { id: "p2_u7_t47", title: "Stress management strategies: Meditation", status: 0 }, //[cite: 20]
            { id: "p2_u7_t48", title: "Stress management strategies: Yogasana", status: 0 }, //[cite: 20]
            { id: "p2_u7_t49", title: "Stress management strategies: Stress Inoculation Training", status: 0 } //[cite: 20]
        ]
    },
    {
        unitId: "p2_u8",
        title: "Paper 2 - Unit 8: Social Psychology",
        topics: [
            { id: "p2_u8_t1", title: "Nature, scope and history of social psychology", status: 0 }, //[cite: 21]
            { id: "p2_u8_t2", title: "Traditional theoretical perspectives: Field theory", status: 0 }, //[cite: 21]
            { id: "p2_u8_t3", title: "Traditional theoretical perspectives: Cognitive Dissonance", status: 0 }, //[cite: 21]
            { id: "p2_u8_t4", title: "Traditional theoretical perspectives: Sociobiology", status: 0 }, //[cite: 21]
            { id: "p2_u8_t5", title: "Traditional theoretical perspectives: Psychodynamic Approaches", status: 0 }, //[cite: 21]
            { id: "p2_u8_t6", title: "Traditional theoretical perspectives: Social Cognition", status: 0 }, //[cite: 21]
            { id: "p2_u8_t7", title: "Social perception: Communication", status: 0 }, //[cite: 21]
            { id: "p2_u8_t8", title: "Social perception: Attributions", status: 0 }, //[cite: 21]
            { id: "p2_u8_t9", title: "attitude and its change within cultural context", status: 0 }, //[cite: 21]
            { id: "p2_u8_t10", title: "prosocial behavior", status: 0 }, //[cite: 21]
            { id: "p2_u8_t11", title: "Group and Social influence: Social Facilitation", status: 0 }, //[cite: 21]
            { id: "p2_u8_t12", title: "Group and Social influence: Social loafing", status: 0 }, //[cite: 21]
            { id: "p2_u8_t13", title: "Social influence: Conformity", status: 0 }, //[cite: 21]
            { id: "p2_u8_t14", title: "Social influence: Peer Pressure", status: 0 }, //[cite: 21]
            { id: "p2_u8_t15", title: "Social influence: Persuasion", status: 0 }, //[cite: 21]
            { id: "p2_u8_t16", title: "Social influence: Compliance", status: 0 }, //[cite: 21]
            { id: "p2_u8_t17", title: "Social influence: Obedience", status: 0 }, //[cite: 21]
            { id: "p2_u8_t18", title: "Social influence: Social Power", status: 0 }, //[cite: 21]
            { id: "p2_u8_t19", title: "Social influence: Reactance", status: 0 }, //[cite: 21]
            { id: "p2_u8_t20", title: "Aggression", status: 0 }, //[cite: 21]
            { id: "p2_u8_t21", title: "Group dynamics, leadership style and effectiveness", status: 0 }, //[cite: 21]
            { id: "p2_u8_t22", title: "Theories of intergroup relations: Minimal Group Experiment", status: 0 }, //[cite: 21]
            { id: "p2_u8_t23", title: "Theories of intergroup relations: Social Identity Theory", status: 0 }, //[cite: 21]
            { id: "p2_u8_t24", title: "Theories of intergroup relations: Relative Deprivation Theory", status: 0 }, //[cite: 21]
            { id: "p2_u8_t25", title: "Theories of intergroup relations: Realistic Conflict Theory", status: 0 }, //[cite: 21]
            { id: "p2_u8_t26", title: "Theories of intergroup relations: Balance Theories", status: 0 }, //[cite: 21]
            { id: "p2_u8_t27", title: "Theories of intergroup relations: Equity Theory", status: 0 }, //[cite: 21]
            { id: "p2_u8_t28", title: "Theories of intergroup relations: Social Exchange Theory", status: 0 }, //[cite: 21]
            { id: "p2_u8_t29", title: "Applied social psychology: Health", status: 0 }, //[cite: 21]
            { id: "p2_u8_t30", title: "Applied social psychology: Environment and Law", status: 0 }, //[cite: 21]
            { id: "p2_u8_t31", title: "Personal space", status: 0 }, //[cite: 21]
            { id: "p2_u8_t32", title: "crowding", status: 0 }, //[cite: 21]
            { id: "p2_u8_t33", title: "territoriality", status: 0 } //[cite: 21]
        ]
    },
    {
        unitId: "p2_u9",
        title: "Paper 2 - Unit 9: Human Development and Interventions",
        topics: [
            { id: "p2_u9_t1", title: "Developmental processes: Nature", status: 0 },
            { id: "p2_u9_t2", title: "Developmental processes: Principles", status: 0 },
            { id: "p2_u9_t3", title: "Developmental processes: Factors in development", status: 0 },
            { id: "p2_u9_t4", title: "Developmental processes: Stages of Development", status: 0 },
            { id: "p2_u9_t5", title: "Successful aging", status: 0 },
            { id: "p2_u9_t6", title: "Theories of development: Psychoanalytical", status: 0 },
            { id: "p2_u9_t7", title: "Theories of development: Behavioristic", status: 0 },
            { id: "p2_u9_t8", title: "Theories of development: Cognitive", status: 0 },
            { id: "p2_u9_t9", title: "Various aspects of development: Sensory-motor", status: 0 },
            { id: "p2_u9_t10", title: "Various aspects of development: cognitive", status: 0 },
            { id: "p2_u9_t11", title: "Various aspects of development: language", status: 0 },
            { id: "p2_u9_t12", title: "Various aspects of development: emotional", status: 0 },
            { id: "p2_u9_t13", title: "Various aspects of development: social and moral", status: 0 },
            { id: "p2_u9_t14", title: "Psychopathology: Concept", status: 0 },
            { id: "p2_u9_t15", title: "Psychopathology: Mental Status Examination", status: 0 },
            { id: "p2_u9_t16", title: "Psychopathology: Classification", status: 0 },
            { id: "p2_u9_t17", title: "Psychopathology: Causes", status: 0 },
            { id: "p2_u9_t18", title: "Psychotherapies: Psychoanalysis", status: 0 },
            { id: "p2_u9_t19", title: "Psychotherapies: Person-centered", status: 0 },
            { id: "p2_u9_t20", title: "Psychotherapies: Gestalt", status: 0 },
            { id: "p2_u9_t21", title: "Psychotherapies: Existential", status: 0 },
            { id: "p2_u9_t22", title: "Psychotherapies: Acceptance Commitment Therapy", status: 0 },
            { id: "p2_u9_t23", title: "Psychotherapies: Behavior therapy", status: 0 },
            { id: "p2_u9_t24", title: "Psychotherapies: REBT", status: 0 },
            { id: "p2_u9_t25", title: "Psychotherapies: CBT", status: 0 },
            { id: "p2_u9_t26", title: "Psychotherapies: MBCT", status: 0 },
            { id: "p2_u9_t27", title: "Psychotherapies: Play therapy", status: 0 },
            { id: "p2_u9_t28", title: "Psychotherapies: Positive psychotherapy", status: 0 },
            { id: "p2_u9_t29", title: "Psychotherapies: Transactional Analysis", status: 0 },
            { id: "p2_u9_t30", title: "Psychotherapies: Dialectic behavior therapy", status: 0 },
            { id: "p2_u9_t31", title: "Psychotherapies: Art therapy", status: 0 },
            { id: "p2_u9_t32", title: "Psychotherapies: Performing Art Therapy", status: 0 },
            { id: "p2_u9_t33", title: "Psychotherapies: Family therapy", status: 0 },
            { id: "p2_u9_t34", title: "Applications of theories of motivation and learning in School", status: 0 },
            { id: "p2_u9_t35", title: "Factors in educational achievement", status: 0 },
            { id: "p2_u9_t36", title: "Teacher effectiveness", status: 0 },
            { id: "p2_u9_t37", title: "Guidance in schools: Needs", status: 0 },
            { id: "p2_u9_t38", title: "Guidance in schools: organizational set up", status: 0 },
            { id: "p2_u9_t39", title: "Guidance in schools: techniques", status: 0 },
            { id: "p2_u9_t40", title: "Counselling: Process", status: 0 },
            { id: "p2_u9_t41", title: "Counselling: skills", status: 0 },
            { id: "p2_u9_t42", title: "Counselling: techniques", status: 0 }
        ]
    },
    {
        unitId: "p2_u10",
        title: "Paper 2 - Unit 10: Emerging Areas",
        topics: [
            { id: "p2_u10_t1", title: "Issues of Gender, Poverty, Disability, and Migration: Cultural bias and discrimination", status: 0 },
            { id: "p2_u10_t2", title: "Stigma, Marginalization, and Social Suffering", status: 0 },
            { id: "p2_u10_t3", title: "Child Abuse and Domestic violence", status: 0 },
            { id: "p2_u10_t4", title: "Peace psychology: Violence", status: 0 },
            { id: "p2_u10_t5", title: "Peace psychology: non-violence", status: 0 },
            { id: "p2_u10_t6", title: "Peace psychology: conflict resolution at macro level", status: 0 },
            { id: "p2_u10_t7", title: "Peace psychology: role of media in conflict resolution", status: 0 },
            { id: "p2_u10_t8", title: "Wellbeing and self-growth: Types of wellbeing [Hedonic and Eudemonic]", status: 0 },
            { id: "p2_u10_t9", title: "Wellbeing and self-growth: Character strengths", status: 0 },
            { id: "p2_u10_t10", title: "Wellbeing and self-growth: Resilience and Post-Traumatic Growth", status: 0 },
            { id: "p2_u10_t11", title: "Health: Health promoting and health compromising behaviors", status: 0 },
            { id: "p2_u10_t12", title: "Health: Life style and Chronic diseases [Diabetes, Hypertension, Coronary Heart Disease]", status: 0 },
            { id: "p2_u10_t13", title: "Health: Psychoneuroimmunology [Cancer, HIV/AIDS]", status: 0 },
            { id: "p2_u10_t14", title: "Psychology and technology interface: Digital learning", status: 0 },
            { id: "p2_u10_t15", title: "Psychology and technology interface: Digital etiquette: Cyber bullying", status: 0 },
            { id: "p2_u10_t16", title: "Psychology and technology interface: Cyber pornography: Consumption", status: 0 },
            { id: "p2_u10_t17", title: "Psychology and technology interface: Cyber pornography: implications", status: 0 },
            { id: "p2_u10_t18", title: "Psychology and technology interface: Parental mediation of Digital Usage", status: 0 }
        ]
    }
];

// Array khatam hone ke baad yahan add karein
const savedData = localStorage.getItem('ugcNetTrackerData');
if (savedData) {
    syllabusData = JSON.parse(savedData);
}

let currentEditingTopic = null;
let expandedUnits = {};

function renderSyllabus() {
    const container = document.getElementById('syllabus-container');
    container.innerHTML = '';

    syllabusData.forEach(unit => {
        // Strict Progress Logic Calculate karna
        const totalTopics = unit.topics.length;
        // Sirf un topics ko gino jinka status 4 (Revision 2) hai
        const completedTopics = unit.topics.filter(t => t.status === 4).length;
        const progressPercent = totalTopics === 0 ? 0 : Math.round((completedTopics / totalTopics) * 100);

        // Unit Card
        const unitCard = document.createElement('div');
        unitCard.className = 'unit-card';

        // Naya Unit Header jisme Progress Bar hai
        const header = document.createElement('div');
        header.className = 'unit-header';
        
        header.innerHTML = `
            <div class="unit-header-content">
                <div style="font-size: 15px;">${unit.title}</div>
                <div class="unit-progress-wrapper">
                    <div class="unit-progress-bar-bg">
                        <div class="unit-progress-fill" style="width: ${progressPercent}%"></div>
                    </div>
                    <div class="unit-progress-text">${completedTopics}/${totalTopics} topics completed</div>
                </div>
            </div>
            <div style="color: #888; font-size: 14px;">▼</div>
        `;
        
        // Topics List
        const topicsList = document.createElement('div');
        topicsList.className = 'topics-list';

        unit.topics.forEach(topic => {
            const statusData = statusConfig[topic.status];
            
            const topicRow = document.createElement('div');
            topicRow.className = 'topic-item';
            topicRow.onclick = () => openModal(topic.id, topic.title, topic.status);

            topicRow.innerHTML = `
                <div class="status-circle ${statusData.colorClass}"></div>
                <div class="topic-content">
                    <div class="topic-title">${topic.title}</div>
                    <div class="topic-subtitle" style="color: var(--color, gray); opacity: 0.7;">
                        ${statusData.text}
                    </div>
                </div>
                <div class="edit-icon">✎</div>
            `;
            topicsList.appendChild(topicRow);
        });

        // NAYA LOGIC: Check karo ki kya ye unit pehle se khula hua tha
        const isExpanded = expandedUnits[unit.unitId] === true;
        topicsList.style.display = isExpanded ? 'block' : 'none';

        // Toggle Expand/Collapse aur state save karna
        header.onclick = () => {
            const isCurrentlyBlock = topicsList.style.display === 'block';
            if (isCurrentlyBlock) {
                topicsList.style.display = 'none';
                expandedUnits[unit.unitId] = false; // Band kiya toh false save karo
            } else {
                topicsList.style.display = 'block';
                expandedUnits[unit.unitId] = true;  // Khola toh true save karo
            }
        };

        unitCard.appendChild(header);
        unitCard.appendChild(topicsList);
        container.appendChild(unitCard);
    });
}

function openModal(topicId, title, currentStatus) {
    currentEditingTopic = topicId;
    document.getElementById('modalTopicTitle').innerText = title;
    
    const optionsContainer = document.getElementById('sheetOptions');
    optionsContainer.innerHTML = '';

    // Render Options in Popup
    for (const [key, value] of Object.entries(statusConfig)) {
        const statusValue = parseInt(key);
        const isSelected = statusValue === currentStatus;
        
        const optionRow = document.createElement('div');
        optionRow.className = `option-row ${isSelected ? 'selected' : ''}`;
        optionRow.onclick = () => updateTopicStatus(statusValue);
        
        optionRow.innerHTML = `
            <div class="status-circle ${value.colorClass}"></div>
            <div class="option-text">${value.text}</div>
            <div class="check-icon">✓</div>
        `;
        optionsContainer.appendChild(optionRow);
    }

    document.getElementById('modalOverlay').style.display = 'block';
    // Small delay to allow CSS transition to work
    setTimeout(() => {
        document.getElementById('bottomSheet').classList.add('open');
    }, 10);
}

function closeModal() {
    document.getElementById('bottomSheet').classList.remove('open');
    setTimeout(() => {
        document.getElementById('modalOverlay').style.display = 'none';
        currentEditingTopic = null;
    }, 300);
}

function updateTopicStatus(newStatus) {
    syllabusData.forEach(unit => {
        const topic = unit.topics.find(t => t.id === currentEditingTopic);
        if (topic) {
            topic.status = newStatus;
        }
    });
    
    // NAYA: Ab data us specific user ki ID par save hoga
    db.ref('users/' + currentUser).set(syllabusData);
    
    closeModal();
    renderSyllabus();
}

// Simple Login / ID System
let currentUser = localStorage.getItem("trackerUser");

if (!currentUser) {
    currentUser = prompt("Apna Naam dalein (Jaise: Ramish):");
    if (currentUser) {
        localStorage.setItem("trackerUser", currentUser.trim());
    } else {
        currentUser = "Guest"; 
    }
}

// User ke apne folder se data laana
const userDbRef = db.ref('users/' + currentUser);

userDbRef.once('value').then((snapshot) => {
    const cloudData = snapshot.val();
    
    if (cloudData) {
        syllabusData = cloudData;
    } else {
        userDbRef.set(syllabusData);
    }
    
    renderSyllabus();
});

let barChartInstance = null;
let donutChartInstance = null;

// Tabs switch karne ka logic
function switchTab(tabName) {
    if (tabName === 'syllabus') {
        document.getElementById('tab-syllabus').classList.add('active');
        document.getElementById('tab-insights').classList.remove('active');
        document.getElementById('syllabus-container').style.display = 'block';
        document.getElementById('insights-container').style.display = 'none';
        renderSyllabus();
    } else {
        document.getElementById('tab-insights').classList.add('active');
        document.getElementById('tab-syllabus').classList.remove('active');
        document.getElementById('syllabus-container').style.display = 'none';
        document.getElementById('insights-container').style.display = 'block';
        renderInsights();
    }
}

// Insights data calculate aur render karna
function renderInsights() {
    let counts = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };
    let totalTopics = 0;
    
    let unitNames = [];
    let unitProgress = [];

    // Har unit aur topic ka data ikattha karna
    syllabusData.forEach(unit => {
        unitNames.push(unit.title.substring(0, 15) + "..."); // Naam bada ho to chhota karna
        let unitTotal = unit.topics.length;
        let unitCompleted = 0;

        unit.topics.forEach(topic => {
            counts[topic.status]++;
            totalTopics++;
            if(topic.status === 4) unitCompleted++;
        });

        let uPercent = unitTotal === 0 ? 0 : (unitCompleted / unitTotal) * 100;
        unitProgress.push(uPercent);
    });

    // Overall Progress update karna
    let overallPercent = totalTopics === 0 ? 0 : ((counts[4] / totalTopics) * 100).toFixed(1);
    document.getElementById('overall-percentage-text').innerText = overallPercent + "%";
    document.getElementById('overall-progress-fill').style.width = overallPercent + "%";

    document.getElementById('stat-total').innerText = totalTopics;
    document.getElementById('stat-studied').innerText = counts[1];
    document.getElementById('stat-practise').innerText = counts[2];
    document.getElementById('stat-rev1').innerText = counts[3];
    document.getElementById('stat-rev2').innerText = counts[4];

    // Bar Chart draw karna
    const ctxBar = document.getElementById('subjectBarChart').getContext('2d');
    if (barChartInstance) barChartInstance.destroy();
    barChartInstance = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: unitNames,
            datasets: [{
                label: 'Progress %',
                data: unitProgress,
                backgroundColor: '#ff6b6b',
                borderRadius: 5,
                barThickness: 15
            }]
        },
        options: {
            scales: { y: { beginAtZero: true, max: 100 } },
            plugins: { legend: { display: false } }
        }
    });

    // Donut Chart draw karna
    const ctxDonut = document.getElementById('statusDonutChart').getContext('2d');
    if (donutChartInstance) donutChartInstance.destroy();
    donutChartInstance = new Chart(ctxDonut, {
        type: 'doughnut',
        data: {
            labels: ['Not Started', 'Studied', 'Practise Done', 'Revision 1', 'Revision 2'],
            datasets: [{
                data: [counts[0], counts[1], counts[2], counts[3], counts[4]],
                backgroundColor: ['#e0e0e0', '#4caf50', '#2196f3', '#fbc02d', '#ff9800'],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '70%',
            plugins: {
                legend: { position: 'right', labels: { boxWidth: 12 } }
            }
        }
    });
}