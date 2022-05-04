import { FaAngleRight, FaLinkedin } from "react-icons/fa";

export const Aboutus = ({ data }) => {
  console.log(data);
  return (
    <>
      <div class="col-md-2 col-xs-12 clearfix margin-bottom margins">
        <h4 class="text-white less-mar3 font-weight-5">{data.data.aboutus}</h4>
        <div class="clearfix"></div>
        <br />
        <ul class="footer-quick-links-4 white">
          <li>
            <a href="ecommerce-tech.html">
              <FaAngleRight /> {data.data.subabout[0]}
            </a>
          </li>
          <li>
            <a href="ecommerce-services.html">
              <FaAngleRight /> {data.data.subabout[1]}
            </a>
          </li>
          <li>
            <a href="digital-market-entry.html">
              <FaAngleRight /> {data.data.subabout[2]}
            </a>
          </li>
          <li>
            <a href="customers.html">
              <FaAngleRight /> {data.data.subabout[3]}
            </a>
          </li>
          <li>
            <a href="about.html">
              <FaAngleRight /> {data.data.subabout[4]}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
