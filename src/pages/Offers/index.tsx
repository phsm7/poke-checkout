import usePokemons from 'context/hooks/usePokemons';
import * as Styled from './styles';
import BaseTemplate from 'templates/BaseTemplate';
import Footer from 'components/Footer';
import Button from 'components/Button';
import Card from 'components/Card';
import Slider from 'react-slick';
import OffersHeading from 'components/OffersHeading';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PokemonNotFound from 'components/PokemonNotFound';
import { PokemonsProps } from 'context/types/Pokemons';

export default function Offers() {
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const { pokemons, next, getPokemons } = usePokemons();
  const settingsCarousel = {
    dots: true,
    infinite: true,
    speed: 3000,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    arrows: false,
    beforeChange: (nextSlide: number) => setSlideIndex(nextSlide),
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  async function loadPokemons() {
    await getPokemons(next);
  }
  useEffect(() => {
    if (slideIndex !== 0) {
      if ((slideIndex + 1) % 4 === 0) {
        loadPokemons();
      }
    }
  }, [slideIndex]);

  return (
    <>
      <BaseTemplate useBackground={!(pokemons.length === 0)}>
        {!(pokemons.length === 0) && (
          <Styled.Content>
            <>
              <OffersHeading />
              <Styled.SliderWrapper>
                <Styled.TitleOffers>Escolha seu Pokémon</Styled.TitleOffers>
                <Slider {...settingsCarousel}>
                  {pokemons &&
                    pokemons.map(({ name, image }: PokemonsProps) => (
                      <Card key={name} name={name} image={image}>
                        <Button
                          color="yellow"
                          onClick={() => {
                            navigate(`/checkout/${name}`);
                          }}
                        >
                          COMPRAR
                        </Button>
                      </Card>
                    ))}
                </Slider>
              </Styled.SliderWrapper>
              <Styled.Description>
                <Styled.Title>Informações legais</Styled.Title>
                <Styled.Text>
                  {`Pokem ipsum dolor sit amet Audino Umbreon Pewter City Gothorita
                    Chatot Pokemon. Rainbow Badge Ducklett Plain Badge Lumineon
                    Dusclops Wailord Great Ball. Gotta catch 'em all Lanturn
                    Metagross Water Gun Mint Berry Conkeldurr Vibrava. Pokemon
                    Heroes Wigglytuff Sunflora Pewter City Timburr Treecko Delcatty.
                    Ground Grass Bronzor Metang Murkrow Beldum Ferroseed.`}
                </Styled.Text>
              </Styled.Description>
              <Footer backgroundColor="#e5e5e5" textColor="gray" />
            </>
          </Styled.Content>
        )}
        {pokemons.length === 0 && (
          <>
            <PokemonNotFound />
            <Footer textColor="gray" />
          </>
        )}
      </BaseTemplate>
    </>
  );
}
