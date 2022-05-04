export const Ourpartners = (props) => {
  console.log(props);
  const data = props.data.items[1].fields.curoselimages1;
  console.log(data);

  return (
    <>
      <section
        class="section-side-image sec-padding-5 clearfix animate-in"
        data-anim-type="fade-in-right"
        data-anim-delay="300"
      >
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="sec-title-container text-center">
                <h2 class="font-weight-6 less-mar-1 line-height-5">
                  {props.data.items[1].fields.title}
                </h2>
                <div class="ce-title-line"></div>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div
                id="partners-logo"
                class="owl-carousel owl-theme customers-list"
                style={{ marginleft: "3rem" }}
              >
                {data.map((e) => {
                  return (
                    <div class="item">
                      <a
                        href="https://escentials.com/"
                        title="escentials"
                        target="_blank"
                      >
                        <img
                          className="partner"
                          src={e.fields.file.url}
                          alt=""
                        />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
