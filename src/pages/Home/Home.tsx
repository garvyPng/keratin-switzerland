import About from './sections/About';
import Feedbacks from './sections/Feedbacks';
import Hero from './sections/Hero';
import Info from './sections/Info';
import ParallaxSection from './sections/ParallaxSection';
import Portfolio from './sections/Portfolio';
import Questions from './sections/Questions';
import Services from './sections/Services';
import Statistics from './sections/Statistics';
import Treatments from './sections/Treatments';
import Welcome from './sections/Wellcome';

export default function Home() {
    return (
        <>
            <Hero />
            <Welcome />
            <Services />
            <Treatments />
            <Statistics />
            <About />
            <Portfolio />
            <ParallaxSection />
            <Feedbacks />
            <Questions />
            <Info />
        </>
    );
}
