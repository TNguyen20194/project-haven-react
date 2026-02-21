const categories = [
    "Emotional Regulation", 
    "Sleep Health",
    "Anxiety",
    "Motivation & Interest",
    "Stress Coping",
    "Relationships",
    "Trauma Impact",
    "Self Image",
]

const categoryResultMsg = [
    {
        category: "Emotional Regulation",
        low: "You seem to manage your emotions well. Mindfulness can further strengthen this.",
        moderate: "Therapy techniques like DBT can offer structured support for emotional regulation.",
        elevated: "Therapy techniques like DBT can offer structured support for emotional regulation.",
        high: "Speaking with a therapist about emotion regulation strategies could be very beneficial.",
    },
    {
        category: "Sleep Health",
        low: "Great sleep habits! Maintain your routine for continued wellness.",
        moderate: "Sleep hygiene improvements and relaxation techniques may help significantly.",
        elevated: "Sleep hygiene improvements and relaxation techniques may help significantly.",
        high: "A therapist can help address underlying causes of sleep disturbances.",
    },
      {
        category: "Anxiety",
        low: "You appear to manage worry well. Mindfulness can help maintain this balance.",
        moderate: "Sleep hygiene improvements and relaxation techniques may help significantly.",
        elevated: "CBT-based approaches are effective for managing recurring anxiety patterns.",
        high: "Professional support can provide tools to manage persistent anxiety effectively.",
    },
      {
        category: "Motivation & Interest",
        low: "Your motivation levels are healthy. Keep engaging in activities you enjoy!",
        moderate: "Behavioral activation techniques can help re-engage with meaningful activities.",
        elevated: "Behavioral activation techniques can help re-engage with meaningful activities.",
        high: "A therapist can help explore what may be underlying your loss of interest.",
    },
      {
        category: "Stress Coping",
        low: "You have strong coping skills. Continue building on what works for you.",
        moderate: "Learning structured stress management techniques could be very beneficial.",
        elevated: "Learning structured stress management techniques could be very beneficial.",
        high: "A therapist can help you develop healthier coping mechanisms tailored to you.",
    },
      {
        category: "Relationships",
        low: "Your relationships seem supportive. Nurturing them continues to benefit well-being.",
        moderate: "Exploring relationship patterns in therapy can improve connection and understanding.",
        elevated: "Exploring relationship patterns in therapy can improve connection and understanding.",
        high: "Professional support can help navigate relationship difficulties and build healthier bonds.",
    },
    {
        category: "Trauma Impact",
        low: "Past events aren't currently affecting you significantly. That's a positive sign.",
        moderate: "Trauma-informed therapy approaches like EMDR may be helpful for you.",
        elevated: "Trauma-informed therapy approaches like EMDR may be helpful for you.",
        high: "Specialized trauma therapy can provide safe, structured support for healing.",
    },
    {
        category: "Self Image",
        low: "You have a generally positive self-image. Self-compassion practices can nurture this.",
        moderate: "CBT techniques can help challenge and reframe persistent negative self-talk.",
        elevated: "CBT techniques can help challenge and reframe persistent negative self-talk.",
        high: "A therapist can help build a healthier, more compassionate self-relationship.",
    },
]

const concernLevel = {
    low: [1, 2, 3],
    moderate: [4, 5, 6],
    elevated: [7, 8, 9],
    high: [10, 11, 12],
}

// function to calculate concern level

type QuestionProps = {
    id: string,
    title: string,
    question: string,
    category: string,
    options: {
        value: string,
        label: string,
        concernPoint: number
    }[]
}


export const questions: QuestionProps[] = [
    {
        id: "q1",
        title: "Question 1",
        question: "How often do you feel overwhelmed by your emotions?",
        category: "",
        options: [
            {
                value: "low",
                label: "Rarely – I feel emotionally balanced most of the time",
                concernPoint: 0
            },
            {
                value: "moderate",
                label: "Sometimes – Occasionally I struggle to manage my feelings",
                concernPoint: 1
            },
            {
                value: "elevated",
                label: "Often – I frequently feel emotionally overwhelmed",
                concernPoint: 2
            },
            {
                value: "high",
                label: "Almost always – My emotions feel out of control daily",
                concernPoint: 3
            },
        ],
    },
      {
        id: "q2",
        title: "Question 2",
        question: "How would you describe your current sleep patterns?",
        category: "",
        options: [
            {
                value: "low",
                label: "I sleep well and wake up feeling rested",
                concernPoint: 0
            },
            {
                value: "moderate",
                label: "I have occasional trouble falling or staying asleep",
                concernPoint: 1
            },
            {
                value: "elevated",
                label: "I frequently have sleep issues affecting my daily life",
                concernPoint: 2
            },
            {
                value: "high",
                label: "I experience severe insomnia or sleep disturbances nightly",
                concernPoint: 3
            },
        ],
    },
      {
        id: "q3",
        title: "Question 3",
        question: "How often do you experience feelings of anxiety or worry?",
        category: "",
        options: [
            {
                value: "low",
                label: "Rarely – I generally feel calm and at ease",
                concernPoint: 0
            },
            {
                value: "moderate",
                label: "Sometimes – I worry about specific situations occasionally",
                concernPoint: 1
            },
            {
                value: "elevated",
                label: "Often – Anxiety affects my daily activities regularly",
                concernPoint: 2
            },
            {
                value: "high",
                label: "Constantly – Persistent worry dominates my thoughts",
                concernPoint: 3
            },
        ],
    },
        {
        id: "q4",
        title: "Question 4",
        question: "How would you describe your motivation and interest in daily activities?",
        category: "",
        options: [
            {
                value: "low",
                label: "I feel motivated and enjoy my regular activities",
                concernPoint: 0
            },
            {
                value: "moderate",
                label: "I sometimes lack motivation but can push through",
                concernPoint: 1
            },
            {
                value: "elevated",
                label: "I often struggle to find interest or pleasure in activities",
                concernPoint: 2
            },
            {
                value: "high",
                label: "I rarely feel motivated and have lost interest in most things",
                concernPoint: 3
            },
        ],
    },
        {
        id: "q5",
        title: "Question 5",
        question: "How do you typically cope with stress?",
        category: "",
        options: [
            {
                value: "low",
                label: "I have healthy coping mechanisms that work well for me",
                concernPoint: 0
            },
            {
                value: "moderate",
                label: "I manage okay but sometimes resort to unhealthy habits",
                concernPoint: 1
            },
            {
                value: "elevated",
                label: "I struggle to cope and often feel stuck",
                concernPoint: 2
            },
            {
                value: "high",
                label: "I rely heavily on unhealthy coping mechanisms",
                concernPoint: 3
            },
        ],
    },
        {
        id: "q6",
        title: "Question 6",
        question: "How would you rate your relationships with family and friends?",
        category: "",
        options: [
            {
                value: "low",
                label: "Strong and supportive – I feel connected to others",
                concernPoint: 0
            },
            {
                value: "moderate",
                label: "Generally good with occasional conflicts",
                concernPoint: 1
            },
            {
                value: "elevated",
                label: "Strained – I often feel misunderstood or isolated",
                concernPoint: 2
            },
            {
                value: "high",
                label: "Very difficult – Relationships cause significant distress",
                concernPoint: 3
            },
        ],
    },
        {
        id: "q7",
        title: "Question 7",
        question: "Have you experienced any traumatic events that still affect you?",
        category: "",
        options: [
            {
                value: "low",
                label: "No, or past events no longer impact my daily life",
                concernPoint: 0
            },
            {
                value: "moderate",
                label: "Yes, but I manage the effects reasonably well",
                concernPoint: 1
            },
            {
                value: "elevated",
                label: "Yes, and they occasionally interfere with my functioning",
                concernPoint: 2
            },
            {
                value: "high",
                label: "Yes, and they significantly impact my daily life",
                concernPoint: 3
            },
        ],
    },
        {
        id: "q8",
        title: "Question 8",
        question: "Have you experienced any traumatic events that still affect you?",
        category: "",
        options: [
            {
                value: "low",
                label: "Rarely – I generally have a positive self-image",
                concernPoint: 0
            },
            {
                value: "moderate",
                label: "Sometimes – I occasionally doubt myself",
                concernPoint: 1
            },
            {
                value: "elevated",
                label: "Often – Negative self-talk is a regular occurrence",
                concernPoint: 2
            },
            {
                value: "high",
                label: "Constantly – I struggle with persistent self-criticism",
                concernPoint: 3
            },
        ],
    },
];


