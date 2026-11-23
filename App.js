import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { IP_TYPES, QUESTIONS } from './data';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setScore(0);
    setScreen('quiz');
  };

  return (
    <View style={styles.app}>
      <StatusBar style="dark" />
      {screen === 'home' && <HomeScreen onLearn={() => setScreen('learn')} onPlay={startQuiz} />}
      {screen === 'learn' && <LearnScreen onBack={() => setScreen('home')} onPlay={startQuiz} />}
      {screen === 'quiz' && (
        <QuizScreen
          score={score}
          onCorrect={() => setScore((s) => s + 1)}
          onFinish={() => setScreen('home')}
          onQuit={() => setScreen('home')}
        />
      )}
    </View>
  );
}

function BigButton({ label, onPress, color = '#5B5FEF', textColor = '#fff' }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, { backgroundColor: color, opacity: pressed ? 0.8 : 1 }]}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{label}</Text>
    </Pressable>
  );
}

function HomeScreen({ onLearn, onPlay }) {
  return (
    <View style={[styles.screen, styles.center]}>
      <Text style={styles.logo}>🏆</Text>
      <Text style={styles.title}>IP Quest</Text>
      <Text style={styles.tagline}>
        Learn how ideas, inventions and art are protected, then test yourself!
      </Text>
      <View style={styles.buttonGroup}>
        <BigButton label="📚  Learn" onPress={onLearn} color="#2EC4B6" />
        <BigButton label="🎮  Play Quiz" onPress={onPlay} />
      </View>
    </View>
  );
}

function LearnScreen({ onBack, onPlay }) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.scrollContent}>
      <Text style={styles.heading}>6 Types of IP</Text>
      {IP_TYPES.map((ip) => (
        <View key={ip.id} style={[styles.card, { backgroundColor: ip.color }]}>
          <Text style={styles.cardTitle}>
            {ip.emoji}  {ip.title}
          </Text>
          <Text style={styles.cardText}>{ip.definition}</Text>
          <Text style={styles.cardExample}>Example: {ip.example}</Text>
        </View>
      ))}
      <BigButton label="🎮  I'm ready, Play Quiz" onPress={onPlay} />
      <BigButton label="⬅  Home" onPress={onBack} color="#E0E0E0" textColor="#333" />
    </ScrollView>
  );
}

function QuizScreen({ score, onCorrect, onFinish, onQuit }) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null);

  const q = QUESTIONS[index];
  const answered = picked !== null;
  const isLast = index === QUESTIONS.length - 1;

  const choose = (i) => {
    if (answered) return;
    setPicked(i);
    if (i === q.answer) onCorrect();
  };

  const next = () => {
    if (isLast) {
      onFinish();
    } else {
      setIndex(index + 1);
      setPicked(null);
    }
  };

  const optionColor = (i) => {
    if (!answered) return '#FFFFFF';
    if (i === q.answer) return '#B9F6CA';
    if (i === picked) return '#FFCDD2';
    return '#FFFFFF';
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.scrollContent}>
      <View style={styles.quizHeader}>
        <Text style={styles.progress}>
          Question {index + 1} / {QUESTIONS.length}
        </Text>
        <Text style={styles.scoreBadge}>⭐ {score}</Text>
      </View>

      <Text style={styles.question}>{q.question}</Text>

      {q.options.map((opt, i) => (
        <Pressable
          key={opt}
          onPress={() => choose(i)}
          style={[styles.option, { backgroundColor: optionColor(i) }]}
        >
          <Text style={styles.optionText}>{opt}</Text>
        </Pressable>
      ))}

      {answered && (
        <View style={styles.feedback}>
          <Text style={styles.feedbackTitle}>
            {picked === q.answer ? '✅ Correct!' : '❌ Not quite'}
          </Text>
          <Text style={styles.feedbackText}>{q.explanation}</Text>
          <BigButton label={isLast ? 'Back to Home' : 'Next ➡'} onPress={next} />
        </View>
      )}

      <BigButton label="Quit to Home" onPress={onQuit} color="#E0E0E0" textColor="#333" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: '#FFF8E7' },
  screen: { flex: 1, paddingTop: 56, paddingHorizontal: 20 },
  center: { alignItems: 'center', justifyContent: 'center', paddingBottom: 40 },
  scrollContent: { paddingBottom: 40 },
  logo: { fontSize: 72 },
  title: { fontSize: 40, fontWeight: '800', color: '#3A2E7D', marginTop: 8 },
  tagline: { fontSize: 18, textAlign: 'center', color: '#555', marginVertical: 16, lineHeight: 26 },
  buttonGroup: { width: '100%', marginTop: 16 },
  button: {
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginVertical: 8,
    width: '100%',
  },
  buttonText: { fontSize: 20, fontWeight: '700' },
  heading: { fontSize: 30, fontWeight: '800', color: '#3A2E7D', marginBottom: 12 },
  card: { borderRadius: 18, padding: 16, marginBottom: 14 },
  cardTitle: { fontSize: 22, fontWeight: '800', color: '#222', marginBottom: 6 },
  cardText: { fontSize: 16, color: '#222', lineHeight: 22 },
  cardExample: { fontSize: 15, color: '#333', marginTop: 8, fontStyle: 'italic', lineHeight: 21 },
  quizHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  progress: { fontSize: 16, color: '#666', fontWeight: '600' },
  scoreBadge: {
    fontSize: 18,
    fontWeight: '800',
    backgroundColor: '#FFE08A',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    overflow: 'hidden',
  },
  question: { fontSize: 24, fontWeight: '800', color: '#3A2E7D', marginVertical: 20, lineHeight: 32 },
  option: {
    borderRadius: 14,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#DDD',
  },
  optionText: { fontSize: 18, color: '#222', fontWeight: '600' },
  feedback: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, marginVertical: 8 },
  feedbackTitle: { fontSize: 22, fontWeight: '800', marginBottom: 6 },
  feedbackText: { fontSize: 16, color: '#444', lineHeight: 22, marginBottom: 8 },
});
