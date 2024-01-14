import MotionWrapper from "@/components/motionWrapper/motionWrapper";


export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
        <MotionWrapper>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="block w-full">
                    {children}
                </div>
            </section>
        </MotionWrapper>
	);
}
