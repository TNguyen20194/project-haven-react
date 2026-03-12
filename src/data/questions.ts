
import type { CategoryId } from "./categories";

export type Question = {
    id: string;
    categoryId: CategoryId;
    prompt: string;
    options: Record<number, string>
}

export const questions: Question[] = [
    // Emotional Regulation
    {
        id: "emotional-regulation-1",
        categoryId: "emotional-regulation",
        prompt: "How often do you feel overwhelmed by your emotions?",
        options: {
            0: "Rarely – I feel emotionally balanced most of the time",
            1: "Sometimes – Occasionally I struggle to manage my feelings",
            2: "Often – I frequently feel emotionally overwhelmed",
            3: "Almost always – My emotions feel out of control daily"
        }
    },
   {
        id: "emotional-regulation-2",
        categoryId: "emotional-regulation",
        prompt: "When you feel upset, how quickly are you able to calm yourself down?",
        options: {
            0: "Very quickly – I can self-soothe within minutes",
            1: "Fairly quickly – It takes some effort but I manage",
            2: "Slowly – It can take hours to feel calm again",
            3: "Very slowly – I struggle to calm down even after a long time"
        }
    },
    {
        id: "emotional-regulation-3",
        categoryId: "emotional-regulation",
        prompt: "How often do your emotional reactions feel disproportionate to the situation?",
        options: {
            0: "Rarely – My reactions usually match the situation",
            1: "Sometimes – Certain triggers cause outsized reactions",
            2: "Often – I regularly overreact or shut down emotionally",
            3: "Almost always – My emotional responses feel out of proportion"
        }
    },
    {
        id: "emotional-regulation-4",
        categoryId: "emotional-regulation",
        prompt: "How comfortable are you identifying and naming your emotions?",
        options: {
            0: "Very comfortable – I can usually pinpoint what I'm feeling",
            1: "Somewhat comfortable – I recognize basic emotions but struggle with nuance",
            2: "Uncomfortable – I often feel confused about what I'm experiencing",
            3: "Very uncomfortable – I find it nearly impossible to identify my emotions"
        }
    },
    {
        id: "emotional-regulation-5",
        categoryId: "emotional-regulation",
        prompt: "How often do mood swings interfere with your daily responsibilities?",
        options: {
            0: "Rarely – My mood is generally stable throughout the day",
            1: "Sometimes – Occasional mood shifts affect my productivity",
            2: "Often – Mood swings make it hard to stay on track",
            3: "Almost always – Unpredictable moods dominate my day"
        }
    },

    // Sleep Health
    {
        id: "sleep-health-1",
        categoryId: "sleep-health",
        prompt: "How would you describe your current sleep patterns?",
        options: {
            0: "I sleep well and wake up feeling rested",
            1: "I have occasional trouble falling or staying asleep",
            2: "I frequently have sleep issues affecting my daily life",
            3: "I experience severe insomnia or sleep disturbances nightly"
        }
    },
    {
        id: "sleep-health-2",
        categoryId: "sleep-health",
        prompt: "How often do you wake up feeling refreshed and energized?",
        options: {
            0: "Almost every day – I feel well-rested",
            1: "Most days – but some mornings I feel groggy",
            2: "Rarely – I usually wake up tired",
            3: "Never – I feel exhausted every morning"
        }
    },

    {
        id: "sleep-health-3",
        categoryId: "sleep-health",
        prompt: "How long does it typically take you to fall asleep at night?",
        options: {
            0: "Less than 15 minutes",
            1: "15–30 minutes",
            2: "30–60 minutes",
            3: "Over an hour or I can't fall asleep without help"
        }
    },

    {
        id: "sleep-health-4",
        categoryId: "sleep-health",
        prompt: "How often do racing thoughts or worries keep you awake at night?",
        options: {
            0: "Rarely – My mind is calm at bedtime",
            1: "Occasionally – Some nights I have trouble winding down",
            2: "Often – I regularly lie awake with anxious thoughts",
            3: "Almost every night – My mind races constantly at bedtime"
        }
    },

    {
        id: "sleep-health-5",
        categoryId: "sleep-health",
        prompt: "How often do you experience nightmares or disturbing dreams?",
        options: {
            0: "Rarely or never",
            1: "A few times a month",
            2: "Several times a week",
            3: "Almost every night"
        }
    },

    // Anxiety
    {
        id: "anxiety-1",
        categoryId: "anxiety",
        prompt: "How often do you feel anxious or worried?",
        options: {
            0: "Rarely – I generally feel calm and relaxed",
            1: "Sometimes – I feel worried in certain situations",
            2: "Often – Anxiety affects my daily activities",
            3: "Almost always – Persistent worry dominates my thoughts"
        }
    },

    {
        id: "anxiety-2",
        categoryId: "anxiety",
        prompt: "How often do you experience physical symptoms of anxiety (e.g., rapid heartbeat, sweating, shortness of breath)?",
        options: {
            0: "Rarely or never",
            1: "Occasionally during stressful moments",
            2: "Frequently – physical symptoms are a regular occurrence",
            3: "Almost constantly – I experience them most days"
        }
    },

    {
        id: "anxiety-3",
        categoryId: "anxiety",
        prompt: "How much do you avoid situations or activities because of anxiety?",
        options: {
            0: "I don't avoid things due to anxiety",
            1: "I occasionally avoid a few uncomfortable situations",
            2: "I regularly avoid activities that trigger my anxiety",
            3: "Anxiety prevents me from doing many everyday things"
        }
    },

    {
        id: "anxiety-4",
        categoryId: "anxiety",
        prompt: "How often do you feel a sense of dread or that something bad is about to happen?",
        options: {
            0: "Rarely – I generally feel safe and secure",
            1: "Occasionally – In certain situations I feel uneasy",
            2: "Often – A sense of dread accompanies many activities",
            3: "Almost always – I constantly anticipate the worst"
        }
    },

    {
        id: "anxiety-5",
        categoryId: "anxiety",
        prompt: "How well can you concentrate when feeling anxious?",
        options: {
            0: "My concentration is rarely affected",
            1: "I lose focus occasionally but can redirect my attention",
            2: "Anxiety often makes it hard to concentrate on tasks",
            3: "I can barely focus on anything when anxious"
        }
    },

    // Motivation & Interest
    {
        id: "motivation-interest-1",
        categoryId: "motivation-interest",
        prompt: "How would you describe your motivation for daily activities?",
        options: {
            0: "I feel motivated and enjoy my regular activities",
            1: "I sometimes lack motivation but can push through",
            2: "I often struggle to find interest in activities",
            3: "I rarely feel motivated or interested"
        }
    },

    {
        id: "motivation-interest-2",
        categoryId: "motivation-interest",
        prompt: "How often do you feel excited or look forward to upcoming events or plans?",
        options: {
            0: "Often – I regularly anticipate things with excitement",
            1: "Sometimes – I enjoy planning but don't always feel excited",
            2: "Rarely – Very few things spark enthusiasm for me",
            3: "Almost never – I struggle to feel excited about future plans"
        }
    },

    {
        id: "motivation-interest-3",
        categoryId: "motivation-interest",
        prompt: "How difficult is it for you to start or complete everyday tasks?",
        options: {
            0: "Not difficult – I manage my tasks without issues",
            1: "Slightly difficult – I procrastinate sometimes but get things done",
            2: "Very difficult – Starting tasks feels like a major hurdle",
            3: "Extremely difficult – I struggle to complete even basic tasks"
        }
    },

    {
        id: "motivation-interest-4",
        categoryId: "motivation-interest",
        prompt: "How often do hobbies or activities you used to enjoy now feel uninteresting?",
        options: {
            0: "Rarely – I still enjoy my hobbies",
            1: "Occasionally – Some interests have faded",
            2: "Often – Most hobbies feel like a chore",
            3: "Almost always – Nothing brings me pleasure anymore"
        }
    },

    {
        id: "motivation-interest-5",
        categoryId: "motivation-interest",
        prompt: "How would you describe your energy levels throughout the day?",
        options: {
            0: "Consistently good – I have energy to do what I need",
            1: "Variable – Energy dips at times but is manageable",
            2: "Low – I feel drained for most of the day",
            3: "Extremely low – I feel exhausted no matter what I do"
        }
    },

    // Stress Coping
    {
        id: "stress-coping-1",
        categoryId: "stress-coping",
        prompt: "How do you typically cope with stress?",
        options: {
            0: "I have healthy coping strategies that work well for me",
            1: "I manage stress reasonably well most of the time",
            2: "I often struggle to cope with stress effectively",
            3: "Stress frequently feels overwhelming and difficult to manage"
        }
    },

    {
        id: "stress-coping-2",
        categoryId: "stress-coping",
        prompt: "How quickly do you recover after a stressful event?",
        options: {
            0: "Quickly – I bounce back within hours",
            1: "Moderately – It takes a day or two to feel normal",
            2: "Slowly – Stress lingers for days or weeks",
            3: "Very slowly – I feel unable to recover from stressful events"
        }
    },

    {
        id: "stress-coping-3",
        categoryId: "stress-coping",
        prompt: "How often do you feel that stress is more than you can handle?",
        options: {
            0: "Rarely – I feel capable of managing life's demands",
            1: "Sometimes – Certain periods feel overwhelming",
            2: "Often – I frequently feel in over my head",
            3: "Almost always – Life feels unmanageable"
        }
    },

    {
        id: "stress-coping-4",
        categoryId: "stress-coping",
        prompt: "How comfortable are you asking for help when you're stressed?",
        options: {
            0: "Very comfortable – I reach out easily to friends, family, or professionals",
            1: "Somewhat comfortable – I ask for help but only when it's serious",
            2: "Uncomfortable – I prefer to handle things alone even when struggling",
            3: "Very uncomfortable – I never ask for help no matter how stressed I am"
        }
    },

    {
        id: "stress-coping-5",
        categoryId: "stress-coping",
        prompt: "How often do you engage in activities specifically to manage stress (e.g., exercise, meditation)?",
        options: {
            0: "Regularly – I have a consistent stress-management routine",
            1: "Sometimes – I do stress-relieving activities when I remember",
            2: "Rarely – I don't prioritize stress relief",
            3: "Never – I don't have any stress-management practices"
        }
    },

    // Relationships
    {
        id: "relationships-1",
        categoryId: "relationships",
        prompt: "How would you rate your relationships with family and friends?",
        options: {
            0: "Strong and supportive – I feel connected to others",
            1: "Generally positive with occasional conflicts",
            2: "Somewhat strained or distant",
            3: "Very difficult – Relationships often cause distress"
        }
    },

    {
        id: "relationships-2",
        categoryId: "relationships",
        prompt: "How comfortable are you expressing your needs and boundaries to others?",
        options: {
            0: "Very comfortable – I communicate my needs clearly",
            1: "Somewhat comfortable – I can set boundaries but it's sometimes hard",
            2: "Uncomfortable – I often keep my needs to myself",
            3: "Very uncomfortable – I can't express boundaries at all"
        }
    },

    {
        id: "relationships-3",
        categoryId: "relationships",
        prompt: "How often do you feel lonely or disconnected from people around you?",
        options: {
            0: "Rarely – I feel a strong sense of belonging",
            1: "Sometimes – I have occasional bouts of loneliness",
            2: "Often – I frequently feel disconnected even around others",
            3: "Almost always – I feel deeply lonely most of the time"
        }
    },

    {
        id: "relationships-4",
        categoryId: "relationships",
        prompt: "How do conflicts in your relationships typically affect you?",
        options: {
            0: "Minimally – I handle disagreements constructively",
            1: "Moderately – Conflicts bother me but I work through them",
            2: "Significantly – Conflicts cause me lasting distress",
            3: "Severely – I avoid conflict at all costs or it spirals out of control"
        }
    },

    {
        id: "relationships-5",
        categoryId: "relationships",
        prompt: "How often do you feel you can trust the people closest to you?",
        options: {
            0: "Almost always – I have deep trust in my close relationships",
            1: "Usually – I trust most people in my life",
            2: "Rarely – I have difficulty trusting others",
            3: "Never – I don't feel I can trust anyone"
        }
    },

    // Trauma Impact
    {
        id: "trauma-impact-1",
        categoryId: "trauma-impact",
        prompt: "Have past difficult experiences continued to affect your daily life?",
        options: {
            0: "Rarely – Past events no longer affect me much",
            1: "Sometimes – I notice occasional effects",
            2: "Often – Past events still affect my life",
            3: "Almost always – Past experiences significantly impact me"
        }
    },

    {
        id: "trauma-impact-2",
        categoryId: "trauma-impact",
        prompt: "How often do unwanted memories or flashbacks of past events intrude on your thoughts?",
        options: {
            0: "Rarely or never",
            1: "Occasionally – brief memories surface but pass quickly",
            2: "Often – intrusive memories disrupt my concentration",
            3: "Very frequently – flashbacks feel vivid and overwhelming"
        }
    },

    {
        id: "trauma-impact-3",
        categoryId: "trauma-impact",
        prompt: "How much do you avoid people, places, or situations that remind you of a difficult experience?",
        options: {
            0: "I don't engage in avoidance behavior",
            1: "I avoid a few specific triggers but it doesn't limit me much",
            2: "I avoid many situations, which limits my daily life",
            3: "Avoidance dominates my decisions and restricts my life significantly"
        }
    },

    {
        id: "trauma-impact-4",
        categoryId: "trauma-impact",
        prompt: "How often do you feel on edge, easily startled, or hyper-alert?",
        options: {
            0: "Rarely – I generally feel safe and calm",
            1: "Occasionally – Certain situations heighten my alertness",
            2: "Often – I frequently feel on guard or jumpy",
            3: "Almost always – I feel constantly on high alert"
        }
    },

    {
        id: "trauma-impact-5",
        categoryId: "trauma-impact",
        prompt: "How much have difficult past experiences affected your ability to feel safe in relationships?",
        options: {
            0: "Not at all – I feel secure in my relationships",
            1: "Slightly – I sometimes have trust concerns",
            2: "Significantly – Past experiences make it hard to feel safe with others",
            3: "Profoundly – I struggle to let anyone in emotionally"
        }
    },

    // Self Image
    {
        id: "self-image-1",
        categoryId: "self-image",
        prompt: "How often do you have negative thoughts about yourself?",
        options: {
            0: "Rarely – I generally feel positive about myself",
            1: "Sometimes – I occasionally doubt myself",
            2: "Often – I frequently criticize myself",
            3: "Almost always – Negative self-talk is constant"
        }
    },

    {
        id: "self-image-2",
        categoryId: "self-image",
        prompt: "How would you describe your overall sense of self-worth?",
        options: {
            0: "Strong – I believe in my value as a person",
            1: "Moderate – I feel worthy but have occasional doubts",
            2: "Low – I frequently feel not good enough",
            3: "Very low – I rarely feel I have any worth"
        }
    },

    {
        id: "self-image-3",
        categoryId: "self-image",
        prompt: "How often do you compare yourself unfavorably to others?",
        options: {
            0: "Rarely – I'm comfortable with who I am",
            1: "Sometimes – Social media or certain settings trigger comparison",
            2: "Often – I regularly feel inferior to others",
            3: "Constantly – I always feel I don't measure up"
        }
    },

    {
        id: "self-image-4",
        categoryId: "self-image",
        prompt: "How comfortable are you with your physical appearance?",
        options: {
            0: "Very comfortable – I have a healthy body image",
            1: "Somewhat comfortable – Minor insecurities but generally okay",
            2: "Uncomfortable – My appearance causes me frequent distress",
            3: "Very uncomfortable – I avoid mirrors, photos, or social situations because of it"
        }
    },

    {
        id: "self-image-5",
        categoryId: "self-image",
        prompt: "How easily can you accept compliments or acknowledge your achievements?",
        options: {
            0: "Easily – I gracefully accept praise and recognize my accomplishments",
            1: "Somewhat easily – I appreciate them but feel a little awkward",
            2: "With difficulty – I tend to dismiss compliments or downplay achievements",
            3: "I can't – Compliments feel undeserved and I reject them"
        }
    },
]