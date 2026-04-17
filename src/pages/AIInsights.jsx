import AIInsightPanel from '../components/AIInsightPanel';
import { useLenis } from '../hooks/useLenis';

export default function AIInsights() {
  useLenis();

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">AI Insights</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <AIInsightPanel
          title="Profile Analysis"
          score={78}
          insights={[
            'Your technical skills are strong',
            'Consider adding soft skills section',
            'Your experience aligns well with current market',
          ]}
        />

        <AIInsightPanel
          title="Career Growth"
          score={82}
          insights={[
            'Trending skills: AI/ML, Cloud Computing',
            'Your growth trajectory is above average',
            'Recommend learning Next.js for better opportunities',
          ]}
        />
      </div>
    </div>
  );
}