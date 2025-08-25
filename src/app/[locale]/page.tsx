import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';
import { AnimatedThemeToggler } from '@/components/magicui/animated-theme-toggler';

export default async function Home() {
  const t = await getTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
      <AnimatedThemeToggler />
    </div>
  );
}
