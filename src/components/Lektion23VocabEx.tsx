import React from 'react';
import FlashcardGrid from './FlashcardGrid';
import { VOCABULARY_DATA } from '../constants';

interface Props {
  playAudio?: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId?: string | null;
}

export default function Lektion23VocabEx({ playAudio, playingId }: Props) {
  const lesson = VOCABULARY_DATA.find(l => l.id === 'l23');
  const vocabItems = lesson?.items.filter(item => !item.id.includes('g') && item.word) || [];

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      <div className="text-center space-y-4 mb-6">
        <h2 className="text-3xl font-black text-theme-dark uppercase tracking-tight">Luyện Tập Từ Vựng Lektion 23</h2>
        <p className="text-theme-dark/70 font-medium">Lật thẻ để kiểm tra trí nhớ của bạn!</p>
      </div>
      
      {vocabItems.length > 0 ? (
        <FlashcardGrid items={vocabItems} playAudio={playAudio} playingId={playingId} />
      ) : (
        <p className="text-center text-theme-secondary">Chưa có từ vựng cho bài học này.</p>
      )}
    </div>
  );
}
