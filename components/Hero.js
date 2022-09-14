import React from 'react'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Discover, collect, and sell  Non-Fungible Token (NFT)
            </div>
            <div className={style.description}>
              Versatile is the  largest and trusted  NFT marketplace
            </div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}>Explore</button>
              <button className={style.button}>Create</button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img
              className="rounded-t-lg"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div className={style.infoContainer}>
              <img
                className="h-[2.25rem] rounded-full"
                src="https://lh3.googleusercontent.com/qQj55gGIWmT1EnMmGQBNUpIaj0qTyg4YZSQ2ymJVvwr_mXXjuFiHJG9d3MRgj5DVgyLa69u8Tq9ijSm_stsph8YmIJlJQ1e7n6xj=s64"
                alt=""
              />
              <div className={style.author}>
                <div className={style.name}>Jolly</div>
                <a
                  className="text-[#1868b7]"
                  href="https://google.in"
                >
                  hola-kanola
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
