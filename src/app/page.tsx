'use client'
import { SliderHome } from '@/components/sliderHome';
import Image from 'next/image'
import React from 'react';

export default function Home() {
  const headerRef = React.useRef<HTMLDivElement | null>(null);

  const handleAddHeaderStyle = (event: Event) => {
    const scroll = document.documentElement.scrollTop;
    
    if (scroll > 0) headerRef.current?.classList.add('!bg-yellow-default')
    else headerRef.current?.classList.remove('!bg-yellow-default')
  };

  React.useEffect(() => {
    document.addEventListener('scroll', handleAddHeaderStyle);

    return () => {
      document.removeEventListener('scroll', handleAddHeaderStyle);
    }
  }, []);

  return (
    <>
      <header className='flex items-center justify-between py-8 px-12 bg-transparent fixed w-full transition-all z-50' ref={headerRef}>
        <figure className='flex items-center gap-3'>
          <Image src={'./logo.svg'} alt='Pequenos guerreiros logo aperto de mao e titulo escrito' width={50} height={50} />
          <figcaption className='text-white max-w-logo font-logo text-2xl font-bold mobile:text-base'>Pequenos Guerreiros</figcaption>
        </figure>
            
        <button className='flex items-center justify-between gap-2 bg-white mobile:p-2 tablet:p-2 desktop:p-3 fullscreen:p-3 text-[#5C95D8] hover:opacity-50 ease-linear'>
          <Image src={'./hearth-icon.svg'} alt='Icone de coração para simular carência das crianças da Ong' width={20} height={20} />
          <p className='uppercase font-bold font-rubik mobile:text-sm text-xl'>Ajude-nos</p>
        </button>
      </header>

      <main className='min-h-screen'>
        <section className='bg-gradient-primary mobile:pt-40 tablet:pt-40 desktop:pt-44 fullscreen:pt-60 mobile:pb-20 desktop:pb-20 mobile:px-16 tablet:px-24 desktop:px-32 fullscreen:px-40'>
          <article className='text-white desktop:pl-20 fullscreen:pl-20'>
            <div className='bg-green-default py-3 px-5 desktop:max-w-sm fullscreen:max-w-md mobile:w-full tablet:w-full mobile:text-center tablet:text-center'>
              <h1 className='desktop:border-l-4 fullscreen:border-l-4 border-white border-solid font-poppins font-bold desktop:text-6xl fullscreen:text-6xl desktop:pl-5 fullscreen:pl-5 mobile:text-2xl tablet:text-4xl'>Quem somos?</h1>
            </div>
            <p className='font-strait font-light text-2xl mobile:text-lg tablet:text-xl desktop:pl-7 fullscreen:pl-7 pt-5'>A associação Pequenos Guerreiros apoia e desenvolve ações para o lazer, saúde e a defesa, elevação e manutenção da qualidade de vida do ser humano, atendendo meninas e meninos entre 0 a 16 anos de idade, com qualquer tipo de Neoplasia (Câncer), portadoras de Doenças Raras, crianças em Cuidados Paliativos e com deficiências.</p>
          </article>
          <article className='text-white pt-20'>
            <div className='bg-green-default py-3 px-5 desktop:max-w-sm fullscreen:max-w-md mobile:w-full tablet:w-full mobile:text-center tablet:text-center'>
              <h2 className='desktop:border-l-4 fullscreen:border-l-4 border-white border-solid desktop:pl-5 fullscreen:pl-5 font-poppins desktop:text-6xl fullscreen:text-6xl font-bold mobile:text-2xl tablet:text-4xl'>Sobre nós</h2>
            </div>
            <p className='font-strait font-light text-2xl desktop:pl-7 fullscreen:pl-7 pt-5 pb-10 mobile:text-lg tablet:text-xl'>“Começamos em 2014 com 5 crianças em tratamento de quimioterapia, realizando passeios, visitas, aniversários e outras atividades. Com isso, acreditamos que pequenos gestos de gentileza podem mudar a vida de alguém, nosso combustível é a alegria de nossos pequenos! Hoje, atendemos mais de 80 crianças de Uberlândia e região, entre tratamento de quimioterapia, diagnóstico de doenças raras e cuidados paliativos.“</p>
          </article>
        </section>

        <section className='grid desktop:grid-cols-3 fullscreen:grid-cols-3 mobile:grid-cols-1 tablet:grid-cols-2 mobile:grid-rows-[0.5fr 1fr 0.5fr 1fr] tablet:grid-rows-[0.5fr 1fr 0.5fr 1fr] mobile:gap-y-10 tablet:gap-y-10 gap-x-5 p-10'>
          <Image src={'/placeholder-image.png'} alt='Placeholder image' className='mobile:row-start-2 mobile:row-end-3 tablet:row-start-1 tablet:row-end-2 tablet:col-start-1 tablet:col-end-2 desktop:col-start-1 desktop:col-end-1 fullscreen:col-start-1 fullscreen:col-end-1 desktop:row-start-1 desktop:row-end-3 fullscreen:row-start-1 fullscreen:row-end-3 w-1/2 h-full object-cover desktop:self-center fullscreen:self-center m-auto' width={50} height={50} />

          <Image src={'/placeholder-image.png'} alt='Placeholder image' className='mobile:row-start-4 mobile:row-end-5 tablet:row-start-2 tablet:row-end-3 tablet:col-start-1 tablet:col-end-2 desktop:col-start-2 desktop:col-end-3 fullscreen:col-start-2 fullscreen:col-end-3 desktop:row-start-1 desktop:row-end-2 fullscreen:row-start-1 fullscreen:row-end-2 mobile:pt-0 tablet:pt-0 w-1/2 h-full object-cover m-auto' width={50} height={50} />

          <article className='text-white mobile:row-start-1 mobile:row-end-2 tablet:row-start-1 tablet:row-end-2 tablet:col-start-2 tablet:col-end-3 desktop:col-start-3 desktop:col-end-4 fullscreen:col-start-3 fullscreen:col-end-4 desktop:row-start-1 desktop:row-end-2 fullscreen:row-start-1 fullscreen:row-end-2'>
            <div className='bg-green-default p-8 mobile:p-3 tablet:p-4 max-w-sm'>
              <h3 className='text-3xl font-semibold'>Nossa Missão</h3>
            </div>
            <p className='pl-5 mobile:pl-0 tablet:pl-0 pt-3 text-black text-xl mobile:text-base tablet:lg'>Estamos sempre na busca da felicidade na vida dos pequenos guerreiros, trazendo brincadeiras, divertindo e buscando entretenimento e o saber</p>
          </article>

          <article className='text-white mobile:pt-0 tablet:pt-0 pt-20 mobile:row-start-3 mobile:row-end-4 tablet:row-start-2 tablet:row-end-3 tablet:col-start-2 tablet:col-end-3 desktop:col-start-3 desktop:col-end-4 fullscreen:col-start-3 fullscreen:col-end-4 desktop:row-start-2 desktop:row-end-3 fullscreen:row-start-2 fullscreen:row-end-3'>
            <div className='bg-yellow-default p-8 mobile:p-3 tablet:p-4 max-w-sm'>
              <h3 className='text-3xl font-semibold'>O que acreditamos</h3>
            </div>
            <p className='pl-5 pt-3  mobile:pl-0 tablet:pl-0 text-black text-xl mobile:text-base tablet:lg'>Acreditamos que o amor e o cuidado são essenciais nas relações com nossos pequenos. Além disso, a diversão e uma boa recepção são um afeto para que possamos ter um ambiente saudável e colaborativo e nossos pequenos se sintam bem.</p>
          </article>
        </section>

        <section className='p-10 bg-green-default'>
          <div className='bg-[#5C95D8] p-3 desktop:max-w-sm fullscreen:max-w-md'>
            <h3 className='font-poppins text-white text-4xl font-semibold mobile:w-full tablet:w-full mobile:text-center tablet:text-center'>Nossa história</h3>
          </div>

          <figure className='flex flex-1 justify-between gap-x-10 mobile:flex-col tablet:flex-col'>
            <figcaption className='text-white font-roboto mobile:text-lg tablet:text-xl text-2xl flex flex-col gap-y-5 pt-5'>
              <p>O trabalho teve início em outubro de 2014. Surgiu então a ideia de proporcionar às crianças em tratamento contra o câncer o sentimento de que poderiam, de fato, terem uma vida social, facilitando à criança enferma, de forma lúdica, a expressão e compreensão de suas necessidades, sejam elas físicas ou psicológicas.</p>
              <p>Logo em 2016, surgiu uma oportunidade de apadrinhar uma criança com Doença Rara, onde o projeto passou a integrar crianças portadoras de doenças raras e acolher todos familiares.</p>
              <p>E em 2019, enfim nasceu “Pequenos Guerreiros” (Associação Príncipes e Princesas da Quimioterapia e Doenças Raras), que apoia e desenvolve ações para o lazer, saúde e a defesa, elevação e manutenção da qualidade de vida do ser humano, atendendo meninas e meninos entre 0 a 16 anos de idade, com qualquer tipo de Neoplasia (Câncer), portadoras de Doenças Raras, crianças em Cuidados Paliativos e com deficiências.</p>
            </figcaption>
            <Image src={'/placeholder-image.png'} alt='Placeholder image' className='self-center pt-5 min-w-[300px] object-contain' width={50} height={50} />
          </figure>
        </section>

        <section className='p-10 after:z-20 before:z-20 after:content-[url("/commas-close.svg")] after:block before:content-[url("/commas-open.svg")]  before:block before:relative before:top-28 before:right-3 after:relative after:-top-5 after:right-0 after:float-right'>
          <div className='p-3 bg-[#D9D9D9] text-[#494747] text-3xl m-auto w-min mb-5 max-h-[1000px]'>
            <h3>Depoimentos</h3>
          </div>
            <SliderHome />
        </section>

        <section className='bg-[#5C95D8] h-28 p-10'>
          <h3 className='text-white font-poppins text-2xl font-semibold'>Fique atento as novidades</h3>
          <div></div>
        </section>
      </main>
      <footer className='flex items-center justify-between bg-[#5C5252] p-3 flex-wrap text-center'>
        <p className='text-white text-xl'>Feito por Marco Aurélio e William Spada</p>
        <p className='text-white text-xl'>IFSP - Câmpus Bragança Paulista</p>
      </footer>
    </>
   )
}
