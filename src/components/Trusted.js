import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src=""
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://www.freepnglogos.com/uploads/adidas-logo-photo-png-3.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://pngimg.com/uploads/nike/nike_PNG18.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://o.remove.bg/downloads/49f2d0bc-52e4-43b3-9431-ec870badf053/samsung-logo-png-1299-removebg-preview.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src=""
              alt=""
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;
