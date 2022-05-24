
import styled from 'styled-components';

const Logo = () => {

    const Alpha = styled.div`
        font-size: 100px;
        display: inline-block;
        transform: rotate(335deg);
        font-family: roboto;
        position: absolute;
        font-weight: bolder;
        font-stretch: ultra-expanded;

    `;

    const AlphaOne = styled(Alpha)`
    color: cyan;
    left: 150px;
    top: 100px;
    `

    return(
  <div className="logo">
      <Alpha> M </Alpha>
      <AlphaOne>M</AlphaOne>

  </div>
)}

export default Logo