import { useEffect } from 'react';

const defaultTitle = 'Augwell Technologies | Custom Software, E-commerce & Business Apps';
const defaultDescription = 'Custom software, web and mobile apps, e-commerce platforms, and business intelligence tools from Augwell Technologies. Explore our work or book a discovery call.';

export default function PageMetadata({ title, description, path }: { title: string; description: string; path: string }) {
  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = meta?.content;
    const existingCanonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const previousCanonical = existingCanonical?.href;
    const canonical = existingCanonical ?? document.createElement('link');
    const url = `https://www.augwelltech.com${path}`;
    document.title = title;
    if (meta) meta.content = description;
    canonical.rel = 'canonical'; canonical.href = url;
    if (!existingCanonical) document.head.appendChild(canonical);
    return () => {
      document.title = previousTitle === title ? defaultTitle : previousTitle;
      if (meta && previousDescription !== undefined) meta.content = previousDescription === description ? defaultDescription : previousDescription;
      if (previousCanonical && previousCanonical !== url) canonical.href = previousCanonical;
      else canonical.remove();
    };
  }, [title, description, path]);
  return null;
}
