'use client'
import Image from 'next/image'
import React from 'react';

export default function Home() {
  const headerRef = React.useRef<HTMLDivElement | null>(null);

  const handleAddHeaderStyle = (event: Event) => {
    const scroll = document.documentElement.scrollTop;
    
    if (scroll > 200) headerRef.current?.classList.add('!bg-black')
    else headerRef.current?.classList.remove('!bg-black')
  };

  React.useEffect(() => {
    document.addEventListener('scroll', handleAddHeaderStyle);

    return () => {
      document.removeEventListener('scroll', handleAddHeaderStyle);
    }
  }, []);

  return (
    <>
      <header className='flex items-center justify-between py-8 px-12 bg-transparent fixed w-full transition-all' ref={headerRef}>
        <figure className='flex items-center gap-3'>
          <Image src={'./logo.svg'} alt='Pequenos guerreiros logo aperto de mao e titulo escrito' width={50} height={50} />
          <figcaption className='text-white max-w-logo font-logo text-2xl mobile:text-base'>Pequenos Guerreiros</figcaption>
        </figure>
            
        <button className='flex items-center justify-between gap-2 bg-white mobile:p-2 tablet:p-2 desktop:p-3 fullscreen:p-3 text-[#5C95D8] hover:opacity-50 ease-linear'>
          <Image src={'./hearth-icon.svg'} alt='Icone de coração para simular carência das crianças da Ong' width={20} height={20} />
          <p className='uppercase font-bold font-rubik'>Ajude-nos</p>
        </button>
      </header>

      <main className='bg-gradient-primary min-h-screen'>
        <section className='mobile:pt-40 tablet:pt-40 desktop:pt-60 fullscreen:pt-60 mobile:pb-20 mobile:px-16 tablet:px-24 desktop:px-32 fullscreen:px-40'>
          <article className='text-white desktop:pl-20 fullscreen:pl-20'>
            <h1 className='desktop:border-l-4 fullscreen:border-l-4 border-white border-solid font-poppins font-extrabold text-6xl desktop:pl-5 fullscreen:pl-5'>Quem somos?</h1>
            <p className='font-strait font-light text-2xl desktop:pl-7 fullscreen:pl-7 pt-5'>A associação Pequenos Guerreiros apoia e desenvolve ações para o lazer, saúde e a defesa, elevação e manutenção da qualidade de vida do ser humano, atendendo meninas e meninos entre 0 a 16 anos de idade, com qualquer tipo de Neoplasia (Câncer), portadoras de Doenças Raras, crianças em Cuidados Paliativos e com deficiências.</p>
          </article>
          <article className='text-white pt-20'>
            <div className='bg-green-default py-3 px-5 max-w-sm'>
              <h2 className='desktop:border-l-4 fullscreen:border-l-4 border-white border-solid desktop:pl-5 fullscreen:pl-5 font-poppins text-6xl font-bold'>Sobre nós</h2>
            </div>
            <p className='font-strait font-light text-2xl desktop:pl-7 fullscreen:pl-7 pt-5'>“Começamos em 2014 com 5 crianças em tratamento de quimioterapia, realizando passeios, visitas, aniversários e outras atividades. Com isso, acreditamos que pequenos gestos de gentileza podem mudar a vida de alguém, nosso combustível é a alegria de nossos pequenos! Hoje, atendemos mais de 80 crianças de Uberlândia e região, entre tratamento de quimioterapia, diagnóstico de doenças raras e cuidados paliativos.“</p>
          </article>
        </section>
      </main>
      <footer className='flex items-center justify-between bg-[#5C5252] p-3 flex-wrap text-center'>
        <p className='text-white text-xl'>Feito por Marco Aurélio e William Spada</p>
        <p className='text-white text-xl'>IFSP - Câmpus Bragança Paulista</p>
      </footer>
    </>
   )
}
