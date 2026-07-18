import {Header} from '../components/layout/Header.tsx';
import { HeroSection } from '../components/home/HeroSection'

export function HomePage() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
            </main>
        </>

    )
}