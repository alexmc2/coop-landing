import Footer from '@/components/ui/footer';
import Cursor from '@/components/ui/cursor';
import AOSInit from '@/components/aos-init';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AOSInit />
      <main className="relative flex grow flex-col">{children}</main>
      <Cursor className="hidden lg:block" />
    </>
  );
}
