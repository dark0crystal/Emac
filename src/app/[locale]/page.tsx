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

 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>

      {/* first section start  */}

      <div className='h-screen'>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_1000px_at_0%_100%,#133E87,transparent)]">
        <div className='grid grid-cols-2 h-full'>
          

          {/* Right column */}
          <div className='flex flex-col justify-center items-center text-right h-full px-20'>
            <div className=''>
              <h1 className='font-semibold leading-normal text-4xl'>{t('title')}</h1>
              <p className='mt-3 text-lg text-slate-800'>{t("titleParagraph")}</p>

              <div className='flex flex-row justify-center gap-5 mt-7'> 
                  <OurProjectsButton/>
                  <ContactUsButton/>
              </div>
              
            </div>
          </div>

          {/* left column */}
          <div className='px-20'>
            <ImagesSlider/>
          </div>


             </div>
           </div>
           </div>
        
        </div>

        {/* first section End  */}


       <div>
          <OurProjects/>
       </div>
          
       

        <div>
          <OurServices/>
          {/* <h1 className='text-[#4335A7] text-3xl font-black'>إنطلق نحو السماء</h1>
          <h1 className='text-[#FF7F3E] text-3xl font-black'>إنطلق نحو السماء</h1>
          <h1 className='text-[#4335A7] text-3xl font-black'>إنطلق نحو السماء</h1>
          <h1 className='text-[#FF7F3E] text-3xl font-black'>إنطلق نحو السماء</h1>
          <h1 className='text-[#4335A7] text-3xl font-black'>إنطلق نحو السماء</h1>
          <h1 className='text-[#FF7F3E] text-3xl font-black'>إنطلق نحو السماء</h1>
          <h1 className='text-[#4335A7] text-3xl font-black'>إنطلق نحو السماء</h1>
          <h1 className='text-[#FF7F3E] text-3xl font-black'>إنطلق نحو السماء</h1> */}
        </div>

     {/* why you should choose us Start*/}
      <div className='h-fit my-28 w-screen justify-center  items-center flex flex-col md:flex-row gap-4 md:flex-wrap'>
        <Card1/>
        <Card2/>
        <Card3/>

      </div>
      {/* why you should choose us End */}

    </div>
  );
}