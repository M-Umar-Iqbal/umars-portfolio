import { NextRequest } from 'next/server';
import { ImageResponse } from 'next/og';
export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams, protocol, host } = new URL(req.url)
  const title = searchParams.get('title') || 'No title'
  const author = searchParams.get('author') || 'Anonymous'
  const date = searchParams.get('date') || '2024-11-08T12:00:00.000Z'
  const cover = searchParams.get('cover')

  const coverUrl =
    cover ?
    `${protocol}//${host}/_next/image?url=${encodeURIComponent(
      cover
    )}&w=1200&q=75` : 'url(https://umars-portfolio-smoky.vercel.app/og-bg.png)'

  return new ImageResponse(
    (
      <div tw="w-full h-full flex flex-col justify-end items-stretch justify-end bg-slate-200">
        {coverUrl && (
          <img
            src={coverUrl}
            alt=""
            tw="w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        )}
        <div tw="bg-white flex flex-col p-8">
          <div tw="text-5xl mb-2">{title}</div>
          <div tw="text-2xl">
            {author +
              ' – ' +
              new Date(date).toLocaleDateString('en-US', { dateStyle: 'long' })}
          </div>
        </div>
      </div>
    ),
    { width: 1920, height: 1080 }
  )
}