'use client';
import CreateButton from '@/components/Button/createButton/index';
import Input from '@/components/Input/index';
import Textarea from '@/components/Textarea/index';
import styles from './page.module.css';
import { useState } from 'react';
import Image from 'next/image';

export default function CreatePage() {
  const [word, setWord] = useState(''); // 등록할 단어
  const [meaning, setMeaning] = useState(''); // 단어의 뜻
  const [example, setExample] = useState(''); // 예시 문장
  const [hashTag, setHashTag] = useState(''); // 해시 태그
  return (
    <div className={styles.components}>
      <div className={styles.regist}>
        <div className={styles.title}>밈 등록 페이지</div>
        <div className={styles.icon}>
          <Image
            src="/assets/hamburgerIcon.png"
            height={70}
            width={80}
            alt="햄버그바"
          />
        </div>
        <div className={styles.registcard}>
          <div className={styles.wordTag}>등록하고 싶은 단어</div>
          <Input
            setValue={setWord}
            variant={'word'}
            name={'단어등록'}
            value={word}
          ></Input>
          <div className={styles.wordTag}>단어의 뜻</div>
          <Textarea
            setValue={setMeaning}
            variant={'decs'}
            name={'단어의 뜻'}
            value={meaning}
          ></Textarea>
        </div>
        <div className={styles.button}>
          <CreateButton
            word={word}
            meaning={meaning}
            example={example}
            hashTag={hashTag}
          ></CreateButton>
        </div>
      </div>
    </div>
  );
}
