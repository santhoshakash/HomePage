export const Homeimg = (props) => {
  console.log(props);
  console.log(props.data.homeimage.fields.file.url);

  return (
    <>
      <div id="wrapper-boxed">
        <div className="site-wrapper">
          <div id="bannerVideo">
            <div class="container-fluid nopadding">
              <div class="video-overlay bg-opacity-6"></div>
              <div
                class="slider_text slider-caption"
                style={{
                  backgroundImage: `url(${props.data.homeimage.fields.file.url})`,
                  height: "100vh",
                }}
              >
                <div className="absolute">
                  <div className="inner">
                    <h2 className="solving">{props.data.homedesc[0].desc1}</h2>
                    <p className="tech">{props.data.homedesc[0].desc2} </p>
                    <a
                      class="btn btn-default contact-us us"
                      href="contact.html"
                    >
                      {props.data.homebtn}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
