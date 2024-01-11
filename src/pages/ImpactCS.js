import React, { useRef, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { VideoOne, VideoTwo, EditorXLogo, Design, SeasonThree, Banner } from '../assets/impactagenda'
import { Button, Heading, JobDescription } from '../components'
import ReactPlayer from 'react-player'

const Wrapper = styled.div`
    display: block;

`

const VideoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    div {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        width: 50%;

        h1 {
            font-weight: 500;
            color: var(--primary-color);
            font-size: 1.2rem;
            width: 100%;
            margin-top: 5px;
        }

        ul {
            padding-left: 0;
        }

        
        li {
            margin-top: 20px;
            width: 90%;
            text-indent: -1.3em;
            padding-left: 1.3em;
        }

        a {
            margin-top: 10px;
            text-decoration: underline;
            cursor: pointer;
            font-size: 0.8rem;
            text-align: center;
        }

        a:hover {
            color: var(--primary-color);
        }
    }
`

const BannerContainer = styled.div`
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;

    img {
        display: block;
        width: 100%;
        height: auto;
        position: absolute;
    }
`

const Text = styled.div`

    height: 100%;
    width: 100%;
    margin-left: 13.4%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    z-index: 1;
    background-color: transparent;


    h1 {
        margin-top: 10%;
        width: 400px;
        background-color: transparent;
        font-weight: 700;
        font-size: 2.6rem;

        font-size: clamp(20px, 3vw, 48px)
    }

    p {
        max-width: 400px;

        margin-top: 20px;
        margin-bottom: 20px;
        background-color: transparent;
        font-weight: 400;

        font-size: clamp(10px, 1.5vw, 24px);

        line-height: clamp(16px, 2.3vw, 28px);
    }
`

const Container = styled.div`

    position: relative;

    margin-left: 13.8%;
    margin-right: 13.8%;

    width: 72.4%;
    height: auto;

    display: flex;
    flex-direction: column;

    margin-top: ${props => props.marginTop || '0px'};

    p {
        font-weight: 400;
        margin-bottom: 20px;
    }

`

const BulletedList = styled.ul`
    display: block;
    list-style-type: disc;
    list-style-position: inside;
    color: var(--text-color);
    margin-bottom: 20px;
`

const ImpactCS = () => {

    const imageRef = useRef(null);
    const containerRef = useRef(null);
    

    const [bannerHeight, setBannerHeight] = useState('0px');

    useEffect(() => {
        if (imageRef.current && containerRef.current) {
            const height = `${imageRef.current.offsetHeight}px`;
            const margin = `${imageRef.current.offsetHeight - 168}px`;
            containerRef.current.style.height = height;
            setBannerHeight(margin);
        }
    }, [])


  return (
    <Wrapper>
        <BannerContainer ref={containerRef}>
            <img ref={imageRef} src={Banner} alt="Banner"/>
            <Text>
                <h1>The Impact Agenda</h1>
                <p>A website concept showcasing the content of a student founded social impact career podcast.</p>
                <Button width="200px" text="View Prototype →"/>
            </Text>

        </BannerContainer>
        <Container marginTop={bannerHeight}>
            <Heading title="Overview"/>
            <p>The Impact Agenda (previously known as the i-Impact Podcast) is a podcast that explores new horizons of social good in the 21st centure. The podcast engages in conversation with innovators and leader to debunk myths about social impact careers.</p>
            <JobDescription role="Volunteer Designer" design="February 2023 - March 2023" third="September 2023 - October 2023" tools="Figma, Adobe Photoshop, EditorX" />
            <Heading title="Design Challenge"/>
            <p>Following the rebranding from “i-Impact Podcast” to “The Impact Agenda” during its Season 2 release, redesign the original website design with a fresh look, updated content, and more streamlined elements to accommodate future seasons. Additionally, I am responsible for transferring these designs to the chosen CMS, EditorX, to create a responsive website.</p>
            <p><b>The website should:</b></p>
            <BulletedList>
                <li>Maintain a fun, but professional aesthetic.</li>
                <li>Feature clickable links to the individual episodes.</li>
                <li>Include "About," "Meet the Team," and "News" pages.</li>
            </BulletedList>
            <br></br>
            <Heading title="First Iteration (Initial Design)"/>
                <VideoContainer>
                    <div>
                        <h1>"i-Impact Prodcast" Website Concept</h1>
                        <BulletedList>
                            <li>Implemented colors and typography from the podcast style guide.</li>
                            <li>Short podcast description included on the landing page along with a social media bar.</li>
                            <li>"About the Podcast" description and "Meet the Team" section included below the landing page.</li>
                            <li>Horizontal layout of the episode "cards." Clicking on a card will open to episode on Spotify.</li>
                        </BulletedList>
                    </div>
                    <div>
                        <ReactPlayer url="https://www.youtube.com/watch?v=mf76Yw9lalk" style={{overflow: "hidden"}}/>
                        <a>View protoype</a>
                    </div>
                </VideoContainer>
            <Heading title="Second Iteration (Redesign)"/>
                <VideoContainer>
                    <div>
                        <ReactPlayer url="https://www.youtube.com/watch?v=mf76Yw9lalk" style={{overflow: "hidden"}}/>
                        <a>View protoype</a>
                    </div>
                    <div style={{marginLeft: "5%"}}>
                        <h1>"The Impact Agenda" Website Concept</h1>
                        <BulletedList>
                            <li>Adopted a sleeker look, moving away from initial gradient patterns.</li>
                            <li>More in-depth contact information in the footer.</li>
                            <li>Added a "Latest Episodes" section below the landing page for quick preview and redirection to the "Episodes" page.</li>
                            <li>Added a dropdown for selection between Season 1 and 2. The episode cards link to both spotify and Apple Podcasts, rather than just Spotify.</li>
                        </BulletedList>
                    </div>
                </VideoContainer>
            <Heading title="Next Steps"/>
            <Heading title="Reflection"/>
        </Container>
    </Wrapper>
  )
}

export default ImpactCS