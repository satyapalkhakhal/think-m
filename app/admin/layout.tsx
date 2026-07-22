import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Admin | thinkscope.in',
    robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
    return <div className="min-h-screen bg-gray-50">{children}</div>;
}
