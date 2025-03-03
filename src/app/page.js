"use client";
import React, { useEffect, useState } from "react";

import Canvas from "./components/Canvas";
import Features from "./components/Features";
import Header from "./components/header1";
import LazyShow from "./components/LazyShow";
import MainHero from "./components/MainHero";
import MainHeroImage from "./components/MainHeroImage";
import Product from "./components/Product";
import PreHeader from "./components/preHeader";
import TheHeader from "./components/Header";
import Catalogue from "./components/catalogue";
import HomeContent from "./components/homeContent";
import About from "./components/about";
import ContactUs from "./components/contactUs";
import TheFooter from "./components/footer";
import LoadingIndicator from "./components/infoView";
import ErrorIndicator from "./components/errorView";



const WebsPage = () => {
  const [websData, setWebsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const id = Number(process.env.NEXT_PUBLIC_WEB_ID);
  const [formData, setFormData] = useState(null);
  const [saving, setSaving] = useState(false);
  //const listaRef = useRef([]);

  useEffect(() => {
    const fetchWebsData = async () => {
      try {
        const res = await fetch(`/api/webs?id=${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setWebsData(data);

        document.documentElement.style.setProperty("--secondBackground", data?.color1);
        document.documentElement.style.setProperty("--shadowColor", data?.color2);
        document.documentElement.style.setProperty("--hoverColor", data?.color3);
      } catch (error) {
        console.error("Error fetching data:", error);
        //setWebsData(mockWebData); // Fallback to mock data
      } finally {
        setLoading(false);
      }
    };

    fetchWebsData();
  }, []);

  if (saving) return <LoadingIndicator message=" Guardando datos..." />;
  if (loading) return  <LoadingIndicator message=" Cargando datos..." />;
  if (!webData) return <ErrorIndicator message="Error al cargar datos" />;

  const structuredData = {
    ...websData,
    home: websData?.home?.[0] || {},
    about_us: websData?.about_us?.[0] || {},
    footer: websData?.footer?.[0] || {},
    header: websData?.header?.[0] || {},
    catalogo: websData?.catalogo?.[0] || {},
    members: websData?.members?.[0] || {},
    contact_us: websData?.contact_us?.[0] || {},
    webs: websData?.webs || {},
  };


  return (
    <div className="bg-background grid gap-y-16 overflow-hidden">
      <div className="relative bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <TheHeader webData={structuredData} />
            <MainHero webData={structuredData} />
          </div>
        </div>
        <MainHeroImage webData={structuredData}/>
      </div>
      <Canvas webData={structuredData}/>
      <LazyShow>
        <>
          <Product webData={structuredData} />
          <Canvas webData={structuredData}/>
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Catalogue webData={structuredData} />
          <Canvas webData={structuredData}/>
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features webData={structuredData} />
          <Canvas webData={structuredData}/>
        </>
      </LazyShow>

    </div>
  );
};

export default WebsPage;
