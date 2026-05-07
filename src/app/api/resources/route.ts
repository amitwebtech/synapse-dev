import { NextResponse } from 'next/server'

// Mock database call
const mockResources = [
  {
    id: 'res_01',
    title: 'Next.js E-Commerce Boilerplate',
    description: 'A complete full-stack e-commerce solution with Stripe integration.',
    category: 'Source Code',
    techStack: ['Next.js', 'Tailwind', 'Stripe', 'Prisma'],
    isPremium: true,
    price: 49.99,
  },
  {
    id: 'res_02',
    title: 'Advanced React Patterns',
    description: 'Deep dive into HOCs, Render Props, and custom hooks.',
    category: 'Dev Library',
    techStack: ['React', 'TypeScript'],
    isPremium: false,
    price: 0,
  }
]

export async function GET() {
  // In production: await prisma.resource.findMany()
  return NextResponse.json({ data: mockResources }, { status: 200 })
}
