# Therapy Education Web App (Project Haven)

## Project Overview

Project Haven is a therapy education and self-assessment web app built for a psychotherapy practice.

This app helps users learn about therapy, reflect on their mental welness, and connect qith professional support when they are ready.

This app does not diagnose users. The assessment results are educational and are meant to support self-reflection.

## Features

- Therapy education pages
- Mental wellness self-assessment
- 10-question questionnaire flow
- Anonymous result generation
- Score-based result card
- Light and dark theme
- Therapist booking CTA
- Supabase-backed session tracking
- Admin dashboard for completed questionnaire sessions

## Tech Stack

### Frontend

- React
- TypeScript
- Tailwind CSS
- Zustand
- React Router
- shadcn/ui
- Lucide Icon

### Backend

- Node.js
- Express
- TypeScript
- REST API

### Database

- Supabase
- PostgresSQL

## Project Structure

```txt
**Project Haven React**

- Public therapy website
- Therapy education pages
- Questionnaire flow
- Result page
- Sends completed assessment data to backend

**Project Haven Dashboard**

- Admind dashboard frontend
- Express backend
- Supabse database connection
- Displays completed anonymous sessions
```

## App Flow

```txt
User visits public therapy website
→ User reads therapy education content
→ User starts the assessment
→ User answers 10 questions
→ App saves answers in Zustand
→ App calculates total score
→ App displays result card
→ App sends anonymous session to backend
→ Backend saves sessions in Supabase
→ Dashboard displays completed sessions
```

## Architecture

```txt
Project-Haven-React
   |
   | POST completed assessment
   v
Project-Haven-Dashboard Back-End
   |
   | Insert / Select
   v
Supabase Database
   |
   | GET completed sessions
   v
```

The public app does not connect directly to Supabase. It sends completed assessment data to the backend. The backend owns the database connection and keeps Supabase keys private.

## Public App

The public app is a client-facing therapy website.

It includes:

&bull; Home page
&bull; Learn page
&bull; Assessment page
&bull; Results page
&bull; Booking page

The goal is to make therapy feel more approachable and easier to understand.

## Booking Flow

Booking handled through Jane.

Jane does not allow its booking to be embedded inside an iframe, so the app uses a dedicated booking handoff page.

The booking page explains that the user will be taken to Jane's trusted booking system to choose an appointment time.

This keeps the experience clear, intentional, and secure.

## Mental Wellness Assessment

The assessment has 10 questions.

Each question uses the same answer scale:

```txt
1 = Not at all
2 = Rarely
3 = Sometimes
4 = Often
5 = Almost always
```

The assessment is anonymous. Users do not need to create an account to complete it.

## How Answers Are Saved

Each question has a unique ID.

Example:

```ts
{
    id: "question-1",
    prompt: "I feel overwhelmed by my daily responsibilities.",
    options: {
        1: "Not at all",
        2: "Rarely",
        3: "Sometimes",
        4: "Often",
        5; "Almost always"
    }
}
```

When a user selects an answer, the app saves the answer by question ID.

```ts
{
    "question-1" : "3",
    "question-2" : "4",
    "question-3" : "2",
}
```

The question ID connects each question to the selected answer
Answers are stored in Zustand and persisted in localStorage using the assessment store.

## How Scoring Works

Most questions use the selected number directly as the score.

Example:

```txt
Question answer = 4
Score = 4
```

Some questions are reverse scored because they represent positive wellness habits.
Reverse scored questions:

```txt
question-5 = Energy
question-8 = Feeling Rested
question-9 = Self-care
question-10 = Connection with others
```

Reverse scoring works like this:

```txt
1 → 5
2 → 4
3 → 3
4 → 2
5 → 1
```

Example:

```txt
Question: I feel connected to others.
Answer: 5 = Almost always
Score: 1
```

This keeps the scoring accurate because positive wellness answers should lower the concern score.

## Result Categories

After all 10 answers are scored, the app adds them together.

```txt
Minimum score = 10
Maximum score = 50
```

The final score maps to one of three resule levels:

```txt
10-20 = Low Support Needed
21-34 = Moderate Support Needed
35-50 = High Suport Needed
```

The result page uses the final score to show a personalized result card with:

&bull; Result label
&bull; Headline
&bull; Score
&bull; Support Range
&bull; Explanation
&bull; Suggestions
&bull; Closing message

## Backend API

The backend stores completed anonymous assessment sessions.

Base URL:

```txt
http://localhost:3000
```

## Create Assessment Session

```txt
POST /api/assessment-sessions
```

Request body:

```json
{
  "questionCount": 10,
  "resultLevel": "moderate",
  "score": 28,
  "completedAt": "2026-05-04T18:30:00.000Z"
}
```

Resonse:

```json
{
  "id": 1,
  "participant_name": "Participant #001",
  "question_count": 10,
  "result_level": "moderate",
  "score": 28,
  "completed_at": "2026-05-04T18:30:00.000Z",
  "created_at": "2026-05-04T18:30:01.000Z"
}
```

## Get Assessment Sessions

```txt
GET /api/assessment-sessions
```

Respons:

```json
[
  {
    "id": 1,
    "participant_name": "Participant #001",
    "question_count": 10,
    "result_level": "moderate",
    "score": 28,
    "completed_at": "2026-05-04T18:30:00.000Z",
    "created_at": "2026-05-04T18:30:01.000Z"
  }
]
```

## Database

Table name:

```txt
assessment_sessions
```

Columns:

```txt
id
participant_name
question_count
result_level
score
completed_at
created_at

```

The backend creates anonymous partcipant names using the generated databse ID.

Example:

```txt
Participant #001
Participant #002
Participant #003
```

## Dashboard

The dashboard displays completed questionnaire sessions from Supabase.
The dashboard table shows:

&bull; Anonymous participant name
&bull; Completion date
&bull; Number of questions
&bull; Result level
&bull; Score

Example:

```txt
Participant #001
Completed: 2026-05-04
Questions: 10
Result: Moderate Support Needed
Score: 28/50

```

## UI State

The app handles common UI states during API calls.

```txt
Loading state
- Shows while sessions are being fetched

Error state
- Shows when the backend request fails

Empty State
- Shows when no sessions exist yet

Success state
- Shows completed sessions in the dashboard table
```

## Authentication
The dashboard has a simple admin login and signup form

Current version:

```txt
- Admin can sign up
- Admin can log in
- Current user is sored in localStorage
- Admin can log out
```

Future improvement

```txt
- Replace localStorage auth with Supabase Auth
- Add protected routes
- Add role-based access
- Store admin users securely
```


## App Screenshots

### Home Page
<img src="/src//assets/project UI/home_page.png" alt="Home screen" width="" />

### Learn Page

<img src="/src/assets/project UI/understanding-therapy.jpg" alt="Understanding therapy" width="600" />
<br><br>
<img src="/src/assets/project UI/understanding-therapy-2.jpg" alt="Understanding therapy" width="600" />

### Assessment Page
<img src="/src/assets/project UI/assessment_page.png" alt="Assessment" width="70%" />

### Result Page
<img src="/src/assets/project UI/assessment_page.png" alt="Assessment" width="70%" />

### Login/Sign Up Page


### Dashboard Page

