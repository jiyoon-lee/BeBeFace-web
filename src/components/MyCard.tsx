"use client";
type Props = {
  children: React.ReactNode;
};
export default function MyCard({ children }: Props) {
  return (
    <div className="w-fit p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {children}
    </div>
  );
}
