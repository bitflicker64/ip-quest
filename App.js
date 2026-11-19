import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.app}>
      <StatusBar style="dark" />
      <HomeScreen />
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

function HomeScreen() {
  return (
    <View style={[styles.screen, styles.center]}>
      <Text style={styles.logo}>🏆</Text>
      <Text style={styles.title}>IP Quest</Text>
      <Text style={styles.tagline}>
        Learn how ideas, inventions and art are protected, then test yourself!
      </Text>
      <View style={styles.buttonGroup}>
        <BigButton label="📚  Learn" color="#2EC4B6" />
        <BigButton label="🎮  Play Quiz" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: '#FFF8E7' },
  screen: { flex: 1, paddingTop: 56, paddingHorizontal: 20 },
  center: { alignItems: 'center', justifyContent: 'center', paddingBottom: 40 },
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
});
