import { Fragment } from "react";
import { Homeimg } from "../../components/homeimage";
import { Companyreview } from "../../components/companyoverview";
import { Navigate } from "../../components/navigation";
import { Ourcustomer } from "../../components/ourcustomer";
import { Investment } from "../../components/companyinvestors";
import Head from "next/head";
import { client } from "../../components/client";
import { Ourservices } from "../../components/ourservices";
import { Ourpartners } from "../../components/ourpartners";
import { Magento } from "../../components/magento";
import { News } from "../../components/news";
import { Footer } from "../../components/footer";

function getAllContent(props) {
  console.log(props.header, props.homeImage);
  return (
    <>
      <Navigate data={props.header} />
      {/* <HeaderIndex data={props.homeImage}></HeaderIndex> */}
      <Homeimg data={props.homeImage} />
      <Ourcustomer data={props.curoselImages} />
      <Companyreview data={props.blog1} />
      <Investment data={props.blog1} />
      <Ourservices data={props.blog2} />
      <Ourpartners data={props.curoselImages} />
      <Magento data={props.blog1} />
      <News data={props.curosel2} />
      <Footer data={props.footer} />
    </>
  );
}

export const getStaticProps = async () => {
  const [header, homeImage, curoselImages, blog1, blog2, curosel2, footer] =
    await Promise.all([
      client.getEntries({ content_type: "header" }),
      client.getEntries({ content_type: "homeImage" }),
      client.getEntries({ content_type: "curoselImages" }),
      client.getEntries({ content_type: "blog1" }),
      client.getEntries({ content_type: "blog2" }),
      client.getEntries({ content_type: "curosel2" }),
      client.getEntries({ content_type: "footer" }),
    ]);

  return {
    props: {
      header: header.items[0].fields,
      homeImage: homeImage.items[0].fields,
      curoselImages: curoselImages,
      blog1: blog1.items,
      blog2: blog2.items,
      curosel2: curosel2.items[0].fields,
      footer: footer.items[0].fields,
    },
  };
};

export default getAllContent;
