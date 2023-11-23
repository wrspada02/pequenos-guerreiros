import { useSpringCarousel } from 'react-spring-carousel';

export function SliderHome() {
  const content = [
  {
    paragraph: 'A Adriana sempre nos ajudou, procurou médico, informações, se pôs disposta, ofereceu festinhas, mesmo quando a Maria estava internada eles faziam questão de estar presentes. Eu sou muito grata ao projeto porque sempre que precisei eles me ajudavam, com alimentos, remédios e com todo apoio.',
    ownerName: 'Pâmela',
    ownerTitle: 'Mãe da eterna Maria Clara',
  },
  {
    paragraph: 'Esse projeto trouxe para ela uma perspectiva de que a vida dela não tinha acabado ali, que ela ainda tinha o que viver, que a vida dela não se resumia ao hospital. A Lowise amava participar dos eventos, participar das festas, vestir fantasias, de se sentir igual, todos carequinhas.',
    ownerName: 'Larissa Maciel',
    ownerTitle: 'Mãe da eterna princesa Lowise',
  },
  {
    paragraph: 'Esse projeto é um projeto que nasceu no coração da Adriana, e quando ela estava pensando em desistir a Sophia deu um novo sentido pro projeto Pequenos Guerreiros. E o mais bacana disso tudo é que a Adriana ama todas as crianças como filhos dela, e não deixa faltar nada.',
    ownerName: 'Franciele',
    ownerTitle: 'Mãe da eterna princesa Sophia Hadassa',
  },
  {
    paragraph: 'Fazemos parte do projeto “Pequenos Guerreiros”, sou muito grata mesmo a tudo que o projeto já fez por nós até hoje. Dentro do projeto temos o contato com outras mães que passam por uma situação parecida com a nossa, trocando experiências, tem um apoio.',
    ownerName: 'Rosana',
    ownerTitle: 'Mãe do príncipe Heitor Gabriel',
  }];

  const items = content.map((value, index) => {
    return {
      id: `item-${index}`,
      renderItem: (
        <div className='mobile:p-6 p-10 min-h-min'>
          <p className='text-white text-xl'>{value.paragraph}</p>
          <span className='block text-green-500 text-lg'>{value.ownerName}</span>
          <span className='block text-blue-500 text-lg'>{value.ownerTitle}</span>
        </div>
      ),
    }
  });

  const { carouselFragment, slideToNextItem, slideToPrevItem } = useSpringCarousel({
    items,
  });

  return (
    <div className='bg-yellow-default min-h-min overflow-hidden cursor-grab'>
        {carouselFragment}
        <div className='flex items-center justify-center gap-x-5 mb-5'>
          <button className='rounded-sm bg-white p-5' onClick={slideToPrevItem}>Anterior</button>
          <button className='rounded-sm bg-white p-5' onClick={slideToNextItem}>Próximo</button>
        </div>
    </div>
  );
}