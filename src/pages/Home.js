import styled from 'styled-components'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import img from '../images/photoM-bg.png'

const Wrapper = styled.section`
    width: 80vw;
    height: 79.5vh;
    margin: 0 auto;
    position: relative;
    display: flex;
    
    svg.vague {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 126%;
        margin-left: -13%;

        &.first {
            z-index: 2;
        }
        &.second {
            z-index: 1;
        }
    }
`

const Reseaux = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 70px;
    a {
        font-size: 1.4em;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        padding: 10px;
        border: solid transparent 2px;
        border-radius: 15px;
        transition: all 0.5s ease;
        &:hover {
            border: solid rgba(73,77,141,255) 2px;
            color: rgba(73,77,141,255);
        }
    }
`

const Hero = styled.div`
    padding-top: 40px;
    padding-left: 70px;
    width: 100%;
    overflow: hidden;
    position: relative;
    h2 {
        font-size: 3.5em;
        font-weight: 200;
    }
    p {
        font-size: 1.2em;
    }
    img {
        position: absolute;
        bottom: 0;
        right: -50px;
        transform: scaleX(-1);
        z-index: 2;
    }
`

const Home = () => {
    return (
        <Wrapper>
            <Reseaux><a href="https://github.com/MatheoDev"><AiFillGithub /></a><a href="https://www.linkedin.com/in/matheodeknuydt/"><AiFillLinkedin /></a></Reseaux>
            <Hero>
                <h2>I'm Deknuydt Mathéo</h2>
                <p>Développeur web & front end</p>
                <img src={img} alt="" />
            </Hero>
            <svg className="vague first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#3d4657" fill-opacity="1" d="M0,64L80,96C160,128,320,192,480,234.7C640,277,800,299,960,298.7C1120,299,1280,277,1360,266.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
            <svg className="vague second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#475266" fill-opacity="1" d="M0,160L40,149.3C80,139,160,117,240,112C320,107,400,117,480,149.3C560,181,640,235,720,213.3C800,192,880,96,960,101.3C1040,107,1120,213,1200,229.3C1280,245,1360,171,1400,133.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
        </Wrapper>
    )
}

export default Home