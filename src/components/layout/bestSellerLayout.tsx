import { ReactNode, useEffect } from 'react';
import ScrollToTopButton from '@/components/button/scrollToTopButton';
import useInfinite from '@/hooks/useInfinite';
import { useAtom } from 'jotai';
import { pointVisibleAtom } from '@/store/state';
import MainLayout from '@/components/layout/mainLayout';

interface BestSellerPageLayoutProps {
  sideBar?: ReactNode;
  main?: ReactNode;
}

function BestSellerPageLayout({ sideBar, main }: BestSellerPageLayoutProps) {
  const [ref, isIntersecting] = useInfinite();
  const [, setPointVisible] = useAtom(pointVisibleAtom);

  useEffect(() => {
    setPointVisible(isIntersecting);
  }, [isIntersecting, setPointVisible]);

  return (
    <MainLayout>
      <div
        role="container"
        className="basis-0pxr flex w-full shrink-0 grow flex-col">
        <div
          role="sidebar-container"
          className="relative m-auto flex pc:w-[1200px]">
          <section
            role="sidebar"
            className="flex h-full w-full flex-col items-start pl-245 pr-60 pt-40 mobile:px-15
              mobile:pt-0 tablet:pl-190 tablet:pr-40">
            <div className="w-full mobile:pt-20">
              <aside
                className="absolute left-40 top-40 h-[994px] w-[163px] mobile:static mobile:h-35
                  mobile:w-full tablet:w-[155px]">
                {sideBar}
              </aside>
            </div>
            <div
              role="contents"
              className="mobile:flex-center h-full w-full mobile:pt-30 ">
              <div className="h-1" ref={ref} />
              {main}
              <ScrollToTopButton />
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

export default BestSellerPageLayout;
