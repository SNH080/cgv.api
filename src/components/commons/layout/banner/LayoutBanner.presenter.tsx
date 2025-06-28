import {
  MovieText,
  MovieTextBtn,
  MovieTextBtnImg,
  MovieTextBtnImgHover,
  MovieTextBtnText,
  MovieTextWrap,
  MovieTitle,
  SliderItem,
  SliderItemWrap,
  TextBackground,
  Wrapper,
} from "./LayoutBanner.styles";

export default function LayoutBannerUI(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <SliderItemWrap>
        <SliderItem
          src="https://www.youtube.com/embed/M25PkCDaUEg?autoplay=1&mute=1&controls=0&loop=1&playlist=M25PkCDaUEg"
          title="레전드 위스키의 부활을 위해🥃 《코마다 위스키 패밀리》 메인 예고편 CGV #최초공개"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></SliderItem>
        <TextBackground>
          <MovieTextWrap>
            <MovieTitle>코마다 위스키 패밀리</MovieTitle>
            <MovieText>
              올가을을 향긋하게 물들일
              <br />
              환상의 위스키 테라피
            </MovieText>
            <MovieTextBtn>
              <MovieTextBtnText>상세보기</MovieTextBtnText>
              <MovieTextBtnImg src="/images/layout/banner/right-999.png" />
              <MovieTextBtnImgHover src="/images/layout/banner/right-ed3124.png" />
            </MovieTextBtn>
          </MovieTextWrap>
        </TextBackground>
      </SliderItemWrap>
    </Wrapper>
  );
}
