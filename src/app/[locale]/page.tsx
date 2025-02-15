"use client"
import {useTranslations} from 'next-intl';
import {Link} from '../../i18n/routing';
import ImagesSlider from './components/Sliders/ImagesSlider';
import Brand from './components/navbar/Brand';
import ContactUsButton from './components/buttons/ContactUsButton';
import OurProjectsButton from './components/buttons/OurProjectsButton';
import Card1 from './components/Cards/Card1';
import Card2 from './components/Cards/Card2';
import Card3 from './components/Cards/Card3';
import OurProjects from './components/our-projects/OurProjects';
import OurServices from './components/our-services/OurServices';
import About from './components/about/AboutUs';
import ContactUs from './components/contact-us/ContactUs';
import OurClients from './components/our-clients/OurClients';
import { MotionDiv } from './components/MotionDiv';

 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>

      {/* first section start  */}

      <div className='h-[90vh]'>
      <div className="absolute  -z-10 h-[90vh] w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      {/* <div className="absolute bottom-0 left-0  right-0 top-0 bg-[radial-gradient(circle_1000px_at_0%_100%,#133E87,transparent)]"> */}
        

      <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 h-full">
        {/* Left column (text content) */}
        <MotionDiv 
        className=" order-2 lg:order-1 flex flex-col justify-center items-center text-right h-full px-8 lg:px-20"
        initial={{ opacity: 0, y: 150 }} // Initial state
          whileInView={{ opacity: 1, y: 0 }} // Animation while in view
          viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% in view
          transition={{ duration: 0.8, ease: "easeOut" }} // Animation timing
        >

          <div>
            <h1 className="text-center md:text-start font-semibold leading-normal text-2xl md:text-3xl lg:text-4xl">{t('title')}</h1>
            <p className="mt-3 text-center md:text-start text-base lg:text-lg text-slate-800/80">{t("titleParagraph")}</p>
            <div className="flex flex-row justify-center lg:justify-start gap-5 mt-7 md:mt-14"> 
              {/* <OurProjectsButton /> */}
              <ContactUsButton />
            </div>
          </div>
        </MotionDiv>

        {/* Right column (image slider) */}
<MotionDiv
  className="relative order-1 lg:order-2 px-6 md:px-0"
  initial={{ opacity: 0, y: 150 }} // Initial state
  whileInView={{ opacity: 1, y: 0 }} // Animation while in view
  viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% in view
  transition={{ duration: 0.8, ease: "easeOut" }} // Animation timing
>
  {/* Top Gradient */}
  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/80 to-transparent z-10 pointer-events-none"></div>

  {/* Image Slider */}
  <ImagesSlider />

  {/* Bottom Gradient */}
  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/80 to-transparent z-10 pointer-events-none"></div>
</MotionDiv>


      </div>

           </div>
           </div>
        
        {/* </div> */}

        {/* first section End  */}

      {/* about us section */}
      <div id='about-us'>
        <About/>
      </div>

    {/* Our Projects section */}
       <div id='our-projects'>
          <OurProjects/>
       </div>
          
       
     {/* Our Services section */}
        <div id='our-services'>
          <OurServices/>
        </div>

        <div>
          <OurClients/>
        </div>

     {/* why you should choose us Start*/}
      {/* <div className='h-fit my-28 w-screen justify-center  items-center flex flex-col md:flex-row gap-4 md:flex-wrap'>
        <Card1/>
        <Card2/>
        <Card3/>

      </div> */}
    
      {/* why you should choose us End */}
      <div id='contact-us'>
        <ContactUs/>
      </div>

    </div>
  );
}