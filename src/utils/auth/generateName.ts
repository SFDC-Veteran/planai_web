export const generateRandomNickname = () => {
  const determines = [
    '예쁜',
    '화난',
    '귀여운',
    '배고픈',
    '철학적인',
    '현학적인',
    '슬픈',
    '푸른',
    '비싼',
    '밝은',
    '어리숙한',
  ];

  const creatures = [
    '호랑이',
    '비버',
    '강아지',
    '부엉이',
    '여우',
    '치타',
    '문어',
    '고양이',
    '미어캣',
    '다람쥐',
    '사마귀',
  ];

  const randomDetermine = determines[Math.floor(Math.random() * determines.length)];
  const randomAnimal = creatures[Math.floor(Math.random() * creatures.length)];

  return `${randomDetermine} ${randomAnimal}`;
};
