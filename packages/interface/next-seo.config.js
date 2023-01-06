/* eslint-disable import/no-anonymous-default-export */
export default {
  titleTemplate: '%s | サイト名',
  title: '',
  defaultTitle: 'タイトル',
  description: 'デフォルトの説明',
  noindex: false,
  nofollow: false,
  canonical: 'http://localhost:3000',
  additionalMetaTags: [
    {
      property: 'dc:creator',
      content: '運営者名',
    },
    {
      name: 'application-name',
      content: 'サイト名',
    },
  ],
  openGraph: {
    description: 'デフォルトの説明',
    url: 'https://hogehoge.com/',
    type: 'website',
    locale: 'ja_JP',
    site_name: 'サイト名',
    images: [
      {
        url: 'https://www.example.ie/og-image-01.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@hogehoge',
    site: '@fugafuga',
    cardType: 'summary_large_image',
  },
}
