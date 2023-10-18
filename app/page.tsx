import TextBlock from '@/components/TextBlock';
import Image from 'next/image';
import {
  breadcrumpLinks,
  content1,
  content2,
  content3,
  content4,
  relatedQuestions,
} from '@/contants/data/blog';
import AppLink from '@/components/AppLink';
import Breadcrumbs from '@/components/Breadcrumbs';
import { MdKeyboardArrowRight } from 'react-icons/md';

import dogImage from '../assets/images/dog.svg';

export default function Home() {
  return (
    <main>
      <div className="container max-w-5xl mx-auto py-3 px-5 lg:px-0">
        <Breadcrumbs
          links={breadcrumpLinks}
          separator={
            <span>
              <MdKeyboardArrowRight className="text-green inline-block mx-1" />
            </span>
          }
        />
      </div>
      <div className="container max-w-2xl m-auto py-5 px-5 sm:px-0">
        <h1 className="text-h1 font-black mb-10 font-halloween">
          What colors do french Bulldogs com in?
        </h1>
        <Image
          alt="an image"
          src={dogImage}
          className="h-[25em] w-full bg rounded-lg mb-10"
          height={100}
          width={300}
        />

        <div className="">
          <TextBlock content={content1} />
          <TextBlock content={content2} />
          <TextBlock content={content3} />
          <TextBlock content={content4} title="Brindle Frenchie" />
          <TextBlock content={content4} title="Peid Frenchie" />
        </div>

        <div className="p-6 rounded-2xl bg-kin-white py-30 mt-60 mb-[4em]">
          <h1 className="font-bold text-h2 font-halloween mb-30 tracking-tightest">
            Related Questions
          </h1>
          <div>
            {relatedQuestions.map((link) => (
              <div className="mb-4">
                <AppLink className="text-base" href={link.href}>
                  {link.text}
                </AppLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
