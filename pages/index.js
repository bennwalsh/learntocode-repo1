import styles from '../styles/index.module.css'
const Home = () => {
return (
    <div className={styles.container}>

    <h1>Big heading</h1>

    <p>Hello my first app is Live!</p>
   
    <h2>Smaller sub heading?</h2>

<p>
    <input />
    <textarea />
    <button onClick={() => window.alert('Im alive!')}>Click me now bro!</button>
</p>
    </div>
)
}

export default Home