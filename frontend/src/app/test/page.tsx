import { headers } from 'next/headers';

import styles from './Test.module.css';

/** @param {NextRequest} req */
export default async function GET() {
  // const { ua } = userAgent(req);

  const headersList = headers();
  const ip = headersList.get('x-forwarded-for');

  // console.log(JSON.stringify(headersList));
  // const data = {
  //   ok: true,
  //   ip_address: ip,
  //   user_agent: ua,
  // };

  return (
    <div className={styles.info}>
      <div>headersList : </div>
      <div>{JSON.stringify(headersList)}</div>
      <div></div>
      <div>ip : </div>
      <div>{JSON.stringify(ip)}</div>
    </div>
  );
}