import { FaAngleRight } from "react-icons/fa";

export const Quicklinks = (data) => {
  console.log(data);
  return (
    <div
      class="col-md-2 col-xs-12 clearfix margin-bottom"
      style={{ marginLeft: "1rem" }}
    >
      <h4 class="text-white less-mar3 font-weight-5">
        {data.data.data.quicklinks}
      </h4>
      <div class="clearfix"></div>
      <br />
      <ul class="footer-quick-links-4 white">
        <li>
          <a href="contact.html">
            <FaAngleRight /> {data.data.data.sublinks[0]}
          </a>
        </li>
        <li>
          <a href="privacy-policy.html">
            <FaAngleRight /> {data.data.data.sublinks[1]}
          </a>
        </li>
      </ul>
    </div>
  );
};
