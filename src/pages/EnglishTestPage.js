import React, { useState, useEffect } from 'react';
import '../assets/css/EnglishTestPage.css';

const EnglishTestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [testCompleted, setTestCompleted] = useState(false);
  const [result, setResult] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [showUserForm, setShowUserForm] = useState(true);

  // Perguntas do teste de inglês organizadas por nível CEFR
  const questions = [
    // A1 Level - Basic User (Beginner)
    {
      id: 1,
      question: "How do you greet someone in the morning?",
      type: "multiple",
      options: [
        "Good morning",
        "Good night", 
        "Good afternoon",
        "Good evening"
      ],
      correct: 0,
      level: "A1"
    },
    {
      id: 2,
      question: "Complete the sentence: 'I _____ a student.'",
      type: "multiple",
      options: [
        "is",
        "am",
        "are",
        "be"
      ],
      correct: 1,
      level: "A1"
    },
    {
      id: 3,
      question: "What is the plural of 'cat'?",
      type: "multiple",
      options: [
        "cats",
        "cates",
        "cat's",
        "caties"
      ],
      correct: 0,
      level: "A1"
    },
    
    // A2 Level - Basic User (Elementary)
    {
      id: 4,
      question: "Yesterday, I _____ to the cinema.",
      type: "multiple",
      options: [
        "go",
        "goes",
        "went",
        "going"
      ],
      correct: 2,
      level: "A2"
    },
    {
      id: 5,
      question: "Choose the correct question form:",
      type: "multiple",
      options: [
        "How old you are?",
        "How old are you?",
        "How you are old?",
        "How are old you?"
      ],
      correct: 1,
      level: "A2"
    },
    {
      id: 6,
      question: "I will _____ you tomorrow.",
      type: "multiple",
      options: [
        "called",
        "calling",
        "call",
        "calls"
      ],
      correct: 2,
      level: "A2"
    },

    // B1 Level - Independent User (Intermediate)
    {
      id: 7,
      question: "I have _____ finished my homework.",
      type: "multiple",
      options: [
        "yet",
        "just",
        "never",
        "since"
      ],
      correct: 1,
      level: "B1"
    },
    {
      id: 8,
      question: "If I had more time, I _____ learn Spanish.",
      type: "multiple",
      options: [
        "will",
        "would",
        "can",
        "should"
      ],
      correct: 1,
      level: "B1"
    },
    {
      id: 9,
      question: "She's been working here _____ 2015.",
      type: "multiple",
      options: [
        "for",
        "since",
        "during",
        "from"
      ],
      correct: 1,
      level: "B1"
    },

    // B2 Level - Independent User (Upper Intermediate)
    {
      id: 10,
      question: "The project should _____ completed by next month.",
      type: "multiple",
      options: [
        "have been",
        "has been",
        "be",
        "been"
      ],
      correct: 0,
      level: "B2"
    },
    {
      id: 11,
      question: "I wish I _____ studied harder for the exam.",
      type: "multiple",
      options: [
        "have",
        "had",
        "would have",
        "will have"
      ],
      correct: 1,
      level: "B2"
    },
    {
      id: 12,
      question: "The meeting was put _____ until next week.",
      type: "multiple",
      options: [
        "out",
        "off",
        "on",
        "up"
      ],
      correct: 1,
      level: "B2"
    },

    // C1 Level - Proficient User (Advanced)
    {
      id: 13,
      question: "Her presentation was so compelling that it left the audience _____.",
      type: "multiple",
      options: [
        "speechless",
        "wordless",
        "soundless",
        "voiceless"
      ],
      correct: 0,
      level: "C1"
    },
    {
      id: 14,
      question: "The company's profits have been _____ declining over the past quarter.",
      type: "multiple",
      options: [
        "consecutively",
        "consistently",
        "consequently",
        "considerably"
      ],
      correct: 1,
      level: "C1"
    },
    {
      id: 15,
      question: "Choose the most appropriate formal expression:",
      type: "multiple",
      options: [
        "I'm really sorry, but I can't make it",
        "I regret to inform you that I will be unable to attend",
        "Sorry, can't come",
        "I'm afraid I won't be there"
      ],
      correct: 1,
      level: "C1"
    },

    // C2 Level - Proficient User (Proficiency/Mastery)
    {
      id: 16,
      question: "The politician's speech was full of _____ designed to avoid answering the question directly.",
      type: "multiple",
      options: [
        "euphemisms",
        "circumlocutions",
        "platitudes",
        "hyperbole"
      ],
      correct: 1,
      level: "C2"
    },
    {
      id: 17,
      question: "What does 'to throw caution to the wind' mean?",
      type: "multiple",
      options: [
        "To be very careful",
        "To act recklessly",
        "To give a warning",
        "To predict the weather"
      ],
      correct: 1,
      level: "C2"
    },
    {
      id: 18,
      question: "The researcher's findings were _____ with the established theory, creating a paradigm shift in the field.",
      type: "multiple",
      options: [
        "incompatible",
        "irreconcilable",
        "incommensurable",
        "incongruous"
      ],
      correct: 2,
      level: "C2"
    }
  ];

  const handleUserInfoSubmit = (e) => {
    e.preventDefault();
    if (userInfo.name && userInfo.email) {
      setShowUserForm(false);
    }
  };

  const handleUserInfoChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleAnswer = (answerIndex) => {
    setAnswers({
      ...answers,
      [currentQuestion]: answerIndex
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResult = () => {
    let totalScore = 0;
    let levelScores = {
      A1: 0,
      A2: 0,
      B1: 0,
      B2: 0,
      C1: 0,
      C2: 0
    };

    questions.forEach((question, index) => {
      if (answers[index] === question.correct) {
        totalScore++;
        levelScores[question.level]++;
      }
    });

    // Determinar nível baseado na performance
    let cefrLevel = 'A1';
    let description = '';
    let recommendations = [];
    let color = '#FF6B6B';

    // Lógica de avaliação CEFR
    if (levelScores.C2 >= 2 && totalScore >= 15) {
      cefrLevel = 'C2';
      description = 'Mastery Level! You have near-native proficiency in English. You can understand virtually everything and express yourself spontaneously and precisely.';
      recommendations = ['Cambridge CPE Preparation', 'Academic Writing', 'Business English Mastery', 'Translation Studies'];
      color = '#9C27B0';
    } else if (levelScores.C1 >= 2 && totalScore >= 13) {
      cefrLevel = 'C1';
      description = 'Advanced Level! You can understand a wide range of demanding texts and express yourself fluently without obvious searching for expressions.';
      recommendations = ['Cambridge CAE Preparation', 'IELTS Advanced', 'Professional English', 'Academic English'];
      color = '#673AB7';
    } else if (levelScores.B2 >= 2 && totalScore >= 11) {
      cefrLevel = 'B2';
      description = 'Upper Intermediate Level! You can interact with native speakers with fluency and spontaneity, and understand complex texts.';
      recommendations = ['Cambridge FCE Preparation', 'IELTS Intermediate', 'Business English', 'Advanced Grammar'];
      color = '#3F51B5';
    } else if (levelScores.B1 >= 2 && totalScore >= 8) {
      cefrLevel = 'B1';
      description = 'Intermediate Level! You can deal with most situations and express yourself on familiar topics and personal interests.';
      recommendations = ['Cambridge PET Preparation', 'Conversation Classes', 'Intermediate Grammar', 'Travel English'];
      color = '#2196F3';
    } else if (levelScores.A2 >= 2 && totalScore >= 5) {
      cefrLevel = 'A2';
      description = 'Elementary Level! You can communicate in simple routine tasks and understand frequently used expressions.';
      recommendations = ['Cambridge KET Preparation', 'Basic Conversation', 'Elementary Grammar', 'Everyday English'];
      color = '#4CAF50';
    } else {
      cefrLevel = 'A1';
      description = 'Beginner Level! You can understand and use familiar everyday expressions and very basic phrases.';
      recommendations = ['General English Beginner', 'Basic Grammar', 'Essential Vocabulary', 'Pronunciation Practice'];
      color = '#FF9800';
    }

    setResult({
      totalScore,
      totalQuestions: questions.length,
      levelScores,
      cefrLevel,
      description,
      recommendations,
      color,
      percentage: Math.round((totalScore / questions.length) * 100)
    });
    setTestCompleted(true);
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setTestCompleted(false);
    setResult(null);
    setShowUserForm(true);
    setUserInfo({ name: '', email: '', phone: '' });
  };

  if (showUserForm) {
    return (
      <div className="test-page">
        <div className="test-container">
          <div className="user-form-section">
            <h1>CEFR English Level Assessment</h1>
            <p>Complete assessment covering levels A1 to C2 (18 questions)</p>
            <div className="cefr-levels">
              <div className="level-indicator">
                <span className="level a1">A1</span>
                <span className="level a2">A2</span>
                <span className="level b1">B1</span>
                <span className="level b2">B2</span>
                <span className="level c1">C1</span>
                <span className="level c2">C2</span>
              </div>
            </div>
            
            <form onSubmit={handleUserInfoSubmit} className="user-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userInfo.name}
                  onChange={handleUserInfoChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleUserInfoChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone (optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleUserInfoChange}
                  placeholder="Enter your phone number"
                />
              </div>
              
              <button type="submit" className="start-test-btn">
                Start CEFR Assessment
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (testCompleted) {
    return (
      <div className="test-page">
        <div className="test-container">
          <div className="result-section">
            <div className="result-header">
              <h1>CEFR Assessment Results</h1>
              <div className="score-display">
                <span className="score">{result.totalScore}/{result.totalQuestions}</span>
                <span className="percentage">({result.percentage}%)</span>
              </div>
            </div>
            
            <div className="level-badge" style={{ background: result.color }}>
              <h2>Your Level: {result.cefrLevel}</h2>
            </div>
            
            <div className="result-description">
              <p>{result.description}</p>
            </div>
            
            <div className="detailed-breakdown">
              <h3>Detailed Performance by CEFR Level:</h3>
              <div className="level-breakdown">
                {Object.entries(result.levelScores).map(([level, score]) => (
                  <div key={level} className="level-stat">
                    <span className={`level-tag ${level.toLowerCase()}`}>{level}</span>
                    <div className="level-progress">
                      <div 
                        className="level-progress-fill" 
                        style={{ width: `${(score / 3) * 100}%` }}
                      ></div>
                    </div>
                    <span className="level-score">{score}/3</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="recommendations">
              <h3>Recommended Courses for {result.cefrLevel} Level:</h3>
              <ul>
                {result.recommendations.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
            
            <div className="cefr-info">
              <h3>What does {result.cefrLevel} level mean?</h3>
              <div className="cefr-description">
                {result.cefrLevel === 'A1' && "You can understand and use familiar everyday expressions and very basic phrases aimed at the satisfaction of needs of a concrete type."}
                {result.cefrLevel === 'A2' && "You can understand sentences and frequently used expressions related to areas of most immediate relevance."}
                {result.cefrLevel === 'B1' && "You can understand the main points of clear standard input on familiar matters regularly encountered in work, school, leisure, etc."}
                {result.cefrLevel === 'B2' && "You can understand the main ideas of complex text on both concrete and abstract topics, including technical discussions."}
                {result.cefrLevel === 'C1' && "You can understand a wide range of demanding, longer texts, and recognize implicit meaning."}
                {result.cefrLevel === 'C2' && "You can understand with ease virtually everything heard or read and express yourself spontaneously, very fluently and precisely."}
              </div>
            </div>
            
            <div className="result-actions">
              <button onClick={restartTest} className="restart-btn">
                Take Test Again
              </button>
              <a href="/contact" className="contact-btn">
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="test-page">
      <div className="test-container">
        <div className="test-header">
          <h1>CEFR English Assessment</h1>
          <div className="current-level">
            <span className={`level-indicator ${questions[currentQuestion].level.toLowerCase()}`}>
              {questions[currentQuestion].level} Level
            </span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <p className="progress-text">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>
        
        <div className="question-section">
          <div className="question-card">
            <div className="question-header">
              <span className={`question-level ${questions[currentQuestion].level.toLowerCase()}`}>
                {questions[currentQuestion].level}
              </span>
              <span className="question-number">#{questions[currentQuestion].id}</span>
            </div>
            <h2>{questions[currentQuestion].question}</h2>
            
            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`option-btn ${answers[currentQuestion] === index ? 'selected' : ''}`}
                  onClick={() => handleAnswer(index)}
                >
                  <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                  <span className="option-text">{option}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="navigation">
          <button 
            onClick={prevQuestion} 
            disabled={currentQuestion === 0}
            className="nav-btn prev-btn"
          >
            ← Previous
          </button>
          
          <button 
            onClick={nextQuestion} 
            disabled={answers[currentQuestion] === undefined}
            className="nav-btn next-btn"
          >
            {currentQuestion === questions.length - 1 ? 'Finish Assessment' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnglishTestPage;