import { ReactNode } from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function OutButton(props: { children: ReactNode; to: string }) {
	return (
		<Link
			href={props.to}
			className="bold"
			style={{
				backgroundColor: "var(--color-cream)",
				padding: "0.5em 1em",
				color: "var(--color-dark-cream)",
				display: "flex",
				gap: "1em",
				alignItems: "center",
				borderRadius: "18px",
				verticalAlign: "center",
			}}>
			{props.children}
			<FaArrowRightLong />
		</Link>
	);
}
