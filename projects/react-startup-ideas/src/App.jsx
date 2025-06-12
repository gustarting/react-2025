import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App () {
    return(
      <section className='App'>
        <TwitterFollowCard isFollowing userName="midudev" name="Miguel Ángel Durán" />
        <TwitterFollowCard isFollowing={false} userName="elonmusk" name="Elon Musk" />
        <TwitterFollowCard isFollowing={false} userName="mrbeast" name="Mr Beast" />
      </section>
    )
}