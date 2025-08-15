import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import { azeretMono } from './layout';
import Navbar from './_components/Navbar';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <Navbar/>
      شسيشسيشيس
    </div>
  );
}