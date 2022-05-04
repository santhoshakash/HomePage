import { Aboutus } from "./subfooters/aboutUs";
import { Contactus } from "./subfooters/contactus";
import { Quicklinks } from "./subfooters/quickLinks";

export const Footer = (props) => {
  console.log(props);
  return (
    <>
      <div class="section-dark sec-padding-5">
        <div class="container">
          <div class="footers">
            <div class="col-md-3  colmargin clearfix margin-bottom">
              <div class="fo-map">
                <div class="footer-logo">
                  <img src={props.data.footerlogo.fields.file.url} alt="" />
                  <span class="reg-icon"> &reg;</span>
                </div>
                <p class="text-light">{props.data.footerDesc[0].desc1}</p>
                <p class="text-light">{props.data.footerDesc[0].desc2}</p>
              </div>
            </div>
            <Aboutus data={props} />
            <Quicklinks data={props} />
            <Contactus data={props} />
          </div>
        </div>
        <div class="row">
          <div class="fo-copyright-holder text-center">
            {" "}
            {props.data.copyrights}
          </div>
        </div>
      </div>
    </>
  );
};
