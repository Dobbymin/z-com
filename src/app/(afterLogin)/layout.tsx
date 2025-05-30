import Image from 'next/image';
import Link from 'next/link';

import { ReactNode } from 'react';

import ZLogo from '../../../public/zlogo.png';

import style from './layout.module.scss';

type Props = {
  children: ReactNode;
};

export default function AfterLoginLayout({ children }: Props) {
  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link className={style.logo} href='/home'>
              <div className={style.logoPill}>
                <Image alt='z.com로고' height={40} src={ZLogo} width={40} />
              </div>
            </Link>
            <nav>
              <ul></ul>
              <Link className={style.postButton} href='/compose/tweet'>
                게시하기
              </Link>
            </nav>
          </div>
        </section>
      </header>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          <section className={style.rightSection}>
            <div style={{ marginBottom: 60, width: 'inherit' }}>
              <form className={style.search}>
                <svg aria-hidden='true' viewBox='0 0 24 24' width={20}>
                  <g>
                    <path d='M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z'></path>
                  </g>
                </svg>
                <input type='search' />
              </form>
            </div>
            <div className={style.followRecommend}>
              <h3>팔로우 추천</h3>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
