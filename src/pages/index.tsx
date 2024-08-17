import BlurImage from "@/components/BlurImage";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <MaxWidthWrapper className="md:h-[calc(100vh-48px-50px)] mt-20 md:mt-0 flex items-center">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <BlurImage
              height={600}
              width={600}
              src="/images/me.jpg"
              className="aspect-square rotate-2 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-[2.7rem] leading-[1] dark:text-zinc-100 animate-slide-top">
            Hi 👋🏻 I’m Umar <br />
            Sr. Full Stack Software Developer
          </h1>
          <div className="animate-slide-top [animation-fill-mode:backwards] [animation-delay:300ms] mt-6 text-md space-y-7 text-zinc-600 dark:text-zinc-400">
            <p>
              Welcome to my site! I&apos;m a full-stack developer passionate about building robust and innovative solutions.
              Here, I share about what I&apos;ve been working on recently, and things that I have learned along the way.
            </p>
          </div>
          <div className="flex gap-4 mt-6 animate-slide-top [animation-fill-mode:backwards] [animation-delay:800ms]">
            <SocialLinks />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
