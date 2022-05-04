export const Contactus = (data) => {
  console.log(data);
  return (
    <>
      <div class="col-md-5 col-xs-12 clearfix margin-bottom">
        <h4 class="text-white less-mar3 font-weight-5">
          {data.data.data.contactus}
        </h4>
        <div class="clearfix"></div>
        <br />
        <div class="row foot-address">
          <div
            class="col-md-6 col-xs-12 clearfix margin-bottom"
            style={{ marginLeft: "1rem" }}
          >
            <address class="text-light">
              <strong class="text-white">
                {data.data.data.contactdetails[0].codemtitle1}{" "}
              </strong>{" "}
              <br />
              {data.data.data.contactdetails[0].codemaddr1}
              ,
              <br />
              {data.data.data.contactdetails[0].codemcoun1}
            </address>
            <span class="text-light">
              <strong class="text-white">
                Phone:{data.data.data.contactdetails[0].phone1}
              </strong>
            </span>
            <br />
            <span class="text-light">
              <strong class="text-white">
                Email:{data.data.data.contactdetails[0].email}
              </strong>
            </span>
            <ul class="footer-social-icons white left-align icons-plain text-center">
              <li>
                <a
                  href="https://www.linkedin.com/company/codemtechnologies/"
                  target="_blank"
                >
                  <img
                    src={data.data.data.linkedinimg.fields.file.url}
                    className="linkedin"
                  />
                  {data.data.data.medianame}
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-6 col-xs-12 clearfix margin-bottom">
            <address class="text-light" style={{ marginTop: "-2rem" }}>
              <strong class="text-white">
                {data.data.data.contactdetails[0].codemtitle2}
                <br />
                {data.data.data.contactdetails[0].UEN}
              </strong>{" "}
              <br />
              {data.data.data.contactdetails[0].codemaddr2}
              <br />
              {data.data.data.contactdetails[0].codemcoun2}
            </address>
            <span class="text-light">
              <strong class="text-white">
                Phone:{data.data.data.contactdetails[0].Phone}
              </strong>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
