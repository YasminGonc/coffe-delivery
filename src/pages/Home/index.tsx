import { HomeContainer } from './style'

import { Banner } from './components/Banner'

export function Home() {
    return(
        <HomeContainer>
            <Banner />
            <h1>Home</h1>
        </HomeContainer>
    )
}