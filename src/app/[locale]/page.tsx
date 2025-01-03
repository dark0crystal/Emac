"use client"
import {useTranslations} from 'next-intl';
import {Link} from '../../i18n/routing';
import ImagesSlider from './components/Sliders/ImagesSlider';
import Brand from './components/navbar/Brand';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <div className='h-[100vh]'>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_1000px_at_0%_100%,#0F75D5,transparent)]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to top, #0F75D5_1px, transparent_1px)]">

        <div className='grid grid-cols-2 h-full'>
          {/* left column */}
          <div className='px-20'>
            <ImagesSlider/>
          </div>

          {/* Right column */}
          <div className='flex flex-col justify-center items-center text-right px-20'>
            <div className=''>
              <h1 className='font-semibold leading-normal text-4xl'>{t('title')}</h1>
              <Link href="/about">{t('about')}</Link>
            </div>
          </div>
        </div>
        
          </div>
          </div>
          </div>
          </div>
     
      <div className='h-[100vh]'></div>
    </div>
  );
}