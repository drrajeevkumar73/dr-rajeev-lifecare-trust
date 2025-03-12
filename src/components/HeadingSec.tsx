import { cn } from "@/lib/utils";

interface HeadingSecProps {
  className?: string;
  children: React.ReactNode;
}

export default function HeadingSec({ children,className }: HeadingSecProps) {
  return (
    <h5
      className={cn(`text-3xl font-bold md:text-4xl text-center 
    `,className)}
    >
      {children}
    </h5>
  );
}
