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

export default function Home() {
  return (
    <main>
      <div className="container max-w-5xl mx-auto py-3 px-5 lg:px-0">
        <Breadcrumbs
          links={breadcrumpLinks}
          separator={
            <span>
              <MdKeyboardArrowRight className="text-blue-500 inline-block mx-1" />
            </span>
          }
        />
      </div>
      <div className="container max-w-2xl m-auto py-5 px-5 sm:px-0">
        <h1 className="text-4xl font-black mb-10">
          What colors do french dogs com in?
        </h1>
        <Image
          alt="an image"
          src={'/'}
          className="h-[25em] w-full bg-gray-100 rounded-lg mb-10"
          height={100}
          width={250}
        />

        <div className="">
          <TextBlock content={content1} />
          <TextBlock content={content2} />
          <TextBlock content={content3} />
          <TextBlock content={content4} title="Brindle Frenchie" />
          <TextBlock content={content4} title="Peid Frenchie" />
        </div>

        <div className="p-6 rounded-xl bg-gray-100 py-10 mt-5">
          <h1 className="font-bold text-3xl mb-8">Related Questions</h1>
          <div>
            {relatedQuestions.map((link) => (
              <div className="mb-4">
                <AppLink href={link.href}>{link.text}</AppLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
