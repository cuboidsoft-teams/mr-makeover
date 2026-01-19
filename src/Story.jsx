function Story() {
    return (
        <>
            <section className="our-story-section d-flex align-items-center">
                <div className="container text-center text-white">
                    <h1 className="story-title">OUR STORY</h1>
                    <p className="story-text">
                        From a single studio to a premium grooming brand, Mr. Makeover’s
                        journey is driven by passion, creativity, and excellence.
                    </p>
                    <button className="btn story-btn">
                        HOW OUR STORY UNFOLDS
                    </button>
                </div>
            </section>
            <section className="about-us-section py-5">
  <div className="container text-center">

    <h2 className="about-title mb-4">ABOUT US</h2>

    <div className="about-video mb-4">
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Mr Makeover Story"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>

    <p className="about-text">
      Established with a vision to redefine men’s grooming, Mr. Makeover
      has grown into a trusted name known for precision, creativity, and
      world-class styling. Our experts blend modern trends with timeless
      techniques to deliver exceptional experiences.
    </p>

  </div>
</section>


        </>
    )
}

export default Story;