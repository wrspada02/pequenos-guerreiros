import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className='flex items-center justify-between py-8 px-12 bg-transparent fixed w-full'>
        <figure className='flex items-center gap-3'>
          <Image src={'./logo.svg'} alt='Pequenos guerreiros logo aperto de mao e titulo escrito' width={50} height={50} />
          <figcaption className='text-white max-w-logo font-logo text-2xl'>Pequenos Guerreiros</figcaption>
        </figure>
            
        <button className='flex items-center justify-between gap-2 bg-white p-3 text-[#5C95D8] hover:opacity-50 ease-linear'>
          <Image src={'./hearth-icon.svg'} alt='Icone de coração para simular carência das crianças da Ong' width={20} height={20} />
          <p className='uppercase font-bold font-rubik'>Ajude-nos</p>
        </button>
      </header>

      <main className='bg-gradient-primary min-h-screen'>
      </main>
      <footer className='flex items-center justify-between bg-[#5C5252] p-3 flex-wrap text-center'>
        <p className='text-white text-xl'>Feito por Marco Aurélio e William Spada</p>
        <p className='text-white text-xl'>IFSP - Câmpus Bragança Paulista</p>
      </footer>
    </>
   )
}
