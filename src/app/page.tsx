import Image from 'next/image';
import Link from 'next/link';

import styles from '@/app/page.module.css';

import zLogo from '../../public/zlogo.png';

export default function Main() {
  return (
    <>
      <div className={styles.left}>
        <Image alt='logo' src={zLogo} />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link className={styles.signup} href='/i/flow/signup'>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link className={styles.login} href='/login'>
          로그인
        </Link>
      </div>
    </>
  );
}
