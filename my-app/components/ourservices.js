import { FaCircle } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

export const Ourservices = (props) => {
  console.log(props);

  return (
    <>
      <section
        class=" our-services sec-padding-5 section-light animate-in"
        data-anim-type="fade-in-right"
        data-anim-delay="400"
      >
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="sec-title-container text-center">
                <h2 class="font-weight-6 less-mar-1 line-height-5">
                  {props.data[2].fields.ourServices}
                </h2>
                <div class="ce-title-line"></div>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12 margin-bottom">
              <div class="clearfix"></div>
              <div class="tab-content-style-15">
                <div class="responsive-tabs-content">
                  <div class="sec-bpadding-5 clearfix">
                    <div class="responsive-tab-title ttitle"></div>

                    <div class="col-md-6">
                      <div class="ce-feature-box-65">
                        <div class="img-box" style={{ width: "514px" }}>
                          <img
                            src={props.data[2].fields.blog2img1.fields.file.url}
                            alt=""
                            class="img-responsive"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="col-md-6 padding-left-5"
                      style={{
                        marginTop: "-3rem",
                        marginBottom: "4rem",
                      }}
                    >
                      <div class="col-sm-12 nopadding">
                        <div class="sec-title-container less-padding-5 text-left img-move">
                          <h5 class="font-weight-4 less-mar-1 line-height-4 ce-title-top-text ">
                            {props.data[2].fields.blog2subtitle}
                          </h5>
                          <h2 class="font-weight-6 less-mar-1 line-height-5">
                            {props.data[2].fields.blog2title}
                          </h2>
                        </div>
                      </div>
                      <div class="clearfix"></div>

                      <div class="iconlist-2">
                        <div class="icon dark">
                          <i class="fa fa-check" aria-hidden="true"></i>
                        </div>
                        <div class="text">
                          {props.data[2].fields.listdesc.desc1}
                        </div>
                      </div>

                      <div class="iconlist-2">
                        <div class="icon dark">
                          <i class="fa fa-check" aria-hidden="true"></i>
                        </div>
                        <div class="text">
                          {props.data[2].fields.listdesc.desc2}
                        </div>
                      </div>

                      <div
                        class="iconlist-2"
                        style={{ marginBottom: "4rem", marginLeft: "1rem" }}
                      >
                        {props.data[2].fields.listdesc.Lists.map((item) => {
                          return (
                            <div class="icons-list-1 icon-tiny">
                              <div class="icon dark">
                                <FaCircle style={{ fontSize: "8px" }} />
                              </div>
                              <div
                                class="text"
                                style={{ marginBottom: "10px" }}
                              >
                                {item}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div class="clearfix"></div>
                      <br />
                      <br />
                      <a
                        class="btn btn-dark btn-round btn-medium uppercase"
                        href="javascript:void(0)"
                        style={{ marginLeft: "25px" }}
                      >
                        <FaPlayCircle className="play" />
                        {props.data[2].fields.blog2btn}
                      </a>
                    </div>
                  </div>
                  <div class="clearfix"></div>
                  <br />
                  <div className="divider-line solid light-2" />

                  <div class="sec-bpadding-5 clearfix">
                    <div
                      class="col-md-6 padding-right-3 text-justify"
                      style={{ width: "35.5rem" }}
                    >
                      <div class="col-sm-12 nopadding">
                        <div
                          class="sec-title-container less-padding-5 text-left img-mov1"
                          style={{ paddingLeft: "23px" }}
                        >
                          <h5 class="font-weight-4 less-mar-1 mt-0 line-height-4 ce-title-top-text">
                            {props.data[1].fields.blog2title}
                          </h5>
                          <h2 class="font-weight-6 less-mar-1 line-height-5">
                            {props.data[1].fields.blog2subtitle}
                          </h2>
                        </div>
                      </div>
                      <div class="clearfix"></div>

                      <div class="iconlist-2 il2">
                        <div class="icon dark">
                          <i class="fa fa-check" aria-hidden="true"></i>
                        </div>
                        {props.data[1].fields.listdesc[0].desc1}
                      </div>

                      <div
                        class="iconlist-2 il2 "
                        style={{ marginBottom: "4.5rem" }}
                      >
                        <div class="icon dark">
                          <i class="fa fa-check" aria-hidden="true"></i>
                        </div>
                        {props.data[1].fields.listdesc[0].desc2}
                      </div>

                      <div class="clearfix"></div>
                      <br />
                      <br />
                      <a
                        class="btn btn-dark btn-round btn-medium uppercase"
                        href="javascript:void(0)"
                        style={{ marginLeft: "0.7rem" }}
                      >
                        <FaPlayCircle className="play" />
                        {props.data[1].fields.blog2btn}
                      </a>
                    </div>

                    <div class="col-md-6">
                      <div class="ce-feature-box-65">
                        <div
                          class="img-box"
                          style={{
                            marginTop: "3.5rem",
                            width: "39rem",
                            marginBottom: "4rem",
                          }}
                        >
                          <img
                            src={props.data[1].fields.blog2img1.fields.file.url}
                            alt=""
                            class="img-responsive"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="clearfix"></div>
                  <br />
                  <div className="divider-line solid light-2" />
                  <div class="sec-bpadding-5 clearfix">
                    <div class="responsive-tab-title ttitle"></div>

                    <div class="col-md-6">
                      <div class="ce-feature-box-65">
                        <div class="img-box" style={{ marginTop: "4rem" }}>
                          <img
                            src={props.data[0].fields.blog2img1.fields.file.url}
                            alt=""
                            class="img-responsive"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="col-sm-12 nopadding">
                        <div class="sec-title-container less-padding-5 text-left img-mov2">
                          <h5 class="font-weight-4 less-mar-1 line-height-4 ce-title-top-text">
                            {props.data[0].fields.blog2title}
                          </h5>
                          <h2 class="font-weight-6 less-mar-1 line-height-5">
                            {props.data[0].fields.blog2subtitle}
                          </h2>
                        </div>
                      </div>
                      <div class="clearfix"></div>

                      <div class="iconlist-2 il2 marginle">
                        <div class="icon dark">
                          <i class="fa fa-check" aria-hidden="true"></i>
                        </div>
                        {props.data[0].fields.listdesc[0].desc1}
                      </div>

                      <div class="iconlist-2 il2 marginle">
                        <div class="icon dark">
                          <i class="fa fa-check" aria-hidden="true"></i>
                        </div>
                        {props.data[0].fields.listdesc[0].desc2}
                      </div>

                      <div class="iconlist-2    marginle1">
                        <div class="icon dark">
                          <i class="fa fa-check" aria-hidden="true"></i>
                        </div>
                        <div
                          class="text"
                          style={{ marginBottom: "3rem", marginLeft: "-1rem" }}
                        >
                          {props.data[0].fields.listdesc[0].desc3}
                        </div>
                      </div>

                      <div class="clearfix"></div>
                      <br />
                      <br />
                      <a
                        class="btn btn-dark btn-round btn-medium uppercase"
                        href="javascript:void(0)"
                      >
                        <FaPlayCircle className="play" />
                        {props.data[0].fields.blog2btn}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
