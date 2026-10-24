import type { Metadata } from 'next'
import logo from '@/publish/images/logo/ben.png'

type OpenGraphImage = {
  url: string
  width: number
  height: number
  alt: string
}

// Favicon for blog routes only; the rest of the site keeps its own.
export const blogIcons: Metadata['icons'] = {
  icon: [{ url: logo.src, type: 'image/png', sizes: `${logo.width}x${logo.height}` }],
  apple: [{ url: logo.src, sizes: `${logo.width}x${logo.height}` }],
}

// Social preview image: the article/post image when there is one, otherwise
// the official logo at its real (square) size with a matching Twitter card.
export function getBlogShareImage(image: string | undefined, alt: string) {
  if (image) {
    return {
      card: 'summary_large_image' as const,
      image: { url: image, width: 1200, height: 630, alt } satisfies OpenGraphImage,
    }
  }

  return {
    card: 'summary' as const,
    image: {
      url: logo.src,
      width: logo.width,
      height: logo.height,
      alt: 'Anh Ben Insights',
    } satisfies OpenGraphImage,
  }
}
