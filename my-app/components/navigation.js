export const Navigate = (props) => {
  console.log(props);

  return (
    <div className="col-md-12 nopadding">
      <div className="header-section style1 pin-style pin-start">
        <div className="container">
          <div className="mod-menu">
            <div className="row">
              <div className="col-sm-2 col-xs-5">
                <a href="/article" className="logo style-2 mar-4">
                  {" "}
                  <img src={props.data.logo.fields.file.url} alt="" />{" "}
                  <span className="reg-icon"> &reg;</span>
                </a>
              </div>
              <div className="col-sm-10 col-xs-7">
                <div className="main-nav">
                  <ul className="nav navbar-nav top-nav">
                    <li className="visible-xs menu-icon">
                      <a
                        href="javascript:void(0)"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#menu"
                        aria-expanded="false"
                      >
                        {" "}
                        <i aria-hidden="true" className="fa fa-bars"></i>{" "}
                      </a>
                    </li>
                  </ul>
                  <div
                    id="menu"
                    className="collapse"
                    style={{ marginTop: "0rem" }}
                  >
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="services.html">{props.data.navigation[0]}</a>
                      </li>
                      <li>
                        <a href="customers.html">{props.data.navigation[1]}</a>
                      </li>
                      <li>
                        <a href="about.html"> {props.data.navigation[2]}</a>
                      </li>
                      <li>
                        <a href="contact.html">{props.data.navigation[3]} </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
