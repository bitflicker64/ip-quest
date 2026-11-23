import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { IP_TYPES } from './data';

export default function App() {
  const [screen, setScreen] = useState('home');

  return (
    <View style={styles.app}>
      <StatusBar style="dark" />
      {screen === 'home' && <HomeScreen onLearn={() => setScreen('learn')} />}
      {screen === 'learn' && <LearnScreen onBack={() => setScreen('home')} />}
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

function HomeScreen({ onLearn }) {
  return (
    <View style={[styles.screen, styles.center]}>
      <Text style={styles.logo}>🏆</Text>
      <Text style={styles.title}>IP Quest</Text>
      <Text style={styles.tagline}>
        Learn how ideas, inventions and art are protected, then test yourself!
      </Text>
      <View style={styles.buttonGroup}>
        <BigButton label="📚  Learn" onPress={onLearn} color="#2EC4B6" />
        <BigButton label="🎮  Play Quiz" />
      </View>
    </View>
  );
}

function LearnScreen({ onBack }) {
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
      <BigButton label="⬅  Home" onPress={onBack} color="#E0E0E0" textColor="#333" />
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
});
