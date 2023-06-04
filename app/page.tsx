"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

interface AdviceData {
  id: number;
  advice: string;
}

export default function Home() {
  const [data, setData] = useState<AdviceData | null>({ id: 0, advice: '' });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setData(data.slip);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[343px] sm:max-w-[540px] relative space-y-6 p-6 sm:px-11 text-center justify-center flex flex-col rounded-lg bg-neutral-dark-grayish-blue">
      <h1 className='mt-4 text-[11px] sm:text-[13px] tracking-[3px] font-manrope text-primary-neon-green'>ADVICE #{data?.id}</h1>

      {isLoading ? (
        <LoadingSpinner />
      ) : (<>
        <p className="py-2 before:content-['“'] after:content-['”'] sm:leading-[38px] text-2xl sm:text-[28px] leading-8 text-center font-manrope text-primary-light-cyan">{data?.advice}</p>
      </>)}

      <Image
        className="w-full"
        src="/images/pattern-divider-mobile.svg"
        alt=""
        width={300}
        height={20}
      />
      <div className='h-4'>
        <button onClick={fetchData} className='absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-primary-neon-green hover:drop-shadow-[0_0_40px_#53FFAA]' aria-label="Get Advice">
          <Image
            className=""
            src="/images/icon-dice.svg"
            alt=""
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  )
}
