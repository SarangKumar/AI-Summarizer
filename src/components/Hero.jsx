import { logo } from "../assets";

const Hero = () => {
	return (
		<header className="w-full flex justify-center items-center flex-col">
			<nav className="pt-3 flex w-full justify-between items-center">
				<img
					src={logo}
					alt="summarizer logo"
					className="w-28 object-contain"
				/>
				<button
					type="button"
					className="black_btn"
					onClick={() =>
						window.open("https://github.com/SarangKumar")
					}
				>
					Github
				</button>
			</nav>

			<h1 className="head_text">
				Summarize Articile with <br className="max-md:hidden" />
				<span className="orange_gradient"> OpenAI GPT-3.5</span>
			</h1>
			<h2 className="desc">
				Simplify your reading with Summarizer, an open-source article
				summarizer that transforms lengthy articles into clear and
				concise summaries
			</h2>
		</header>
	);
};

export default Hero;
