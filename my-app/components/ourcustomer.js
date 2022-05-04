export const Ourcustomer = (props) => {
  console.log(props);
  const data = props.data.items[0].fields.curoselimages1;
  console.log(data);

  return (
    <>
      <section className="sec-padding-5 ">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="sec-padding-5 sec-title-container text-center">
                <h2 className="font-weight-6 less-mar-1 line-height-5">
                  {props.data.items[0].fields.title}
                </h2>
                <div className="ce-title-line"></div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="row" style={{ marginLeft: "2rem" }}>
            <div
              id="customers-logo"
              className="owl-carousel owl-theme customers-list"
            >
              <div className="our-customers">
                {data.map((e) => {
                  return (
                    <div className="item">
                      <img id="ourcustom" src={e.fields.file.url} alt="" />
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
