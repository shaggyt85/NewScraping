import HeroCarousel from "@/components/Home/HeroCarousel"
import Searchbar from "@/components/Home/Searchbar"
import TextHome from "@/components/Home/TextHome"

const Home = () => {
  return (
    <>
    <section className="px-6 md:px-20 py-24 " >
      <div className="flex max-xl:flex-col gap-16">
        <div className="flex flex-col justify-center">
          <TextHome />
          <Searchbar />
        </div>
          <HeroCarousel />
      </div>
    </section>
    <section className="trending-section">
      <h2 className="section-text">Trending</h2>
      <div className="flex flex-wrap gap-x-8 gap-y-16">
        {[ 'Apple Iphone 15', 'Apple Iphone 13', 'Apple Iphone 12', 'Apple Iphone 11', 'Apple Iphone X', 'Apple Iphone 8', 'Apple Iphone 7', 'Apple Iphone 6', 'Apple Iphone 5', 'Apple Iphone 4', 'Apple Iphone 3'].map((product) => (
          <div key={product}>{product}</div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Home