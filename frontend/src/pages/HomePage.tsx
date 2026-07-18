import {Header} from '../components/layout/Header.tsx';
import { HeroSection } from '../components/home/HeroSection'
import { HowItWorksSection } from '../components/home/HowItWorksSection'

export function HomePage() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <HowItWorksSection />
            </main>
        </>

    )
}