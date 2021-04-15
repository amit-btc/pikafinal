import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import 'common/assets/css/flaticon.css';
import 'swiper/swiper-bundle.css';
import '../containers/CryptoModern/CountDown/timer.css';
import 'common/assets/css/icon-example-page.css';
import "./custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function CustomApp({ Component, pageProps }) {
  return (
    <Modal>
      <Component {...pageProps} />
    </Modal>
  );
}
