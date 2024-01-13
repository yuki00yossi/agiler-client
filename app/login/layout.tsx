export default function SignUpLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="block w-5/6 max-w-xl text-center">
				{children}
			</div>
		</section>
	);
}
