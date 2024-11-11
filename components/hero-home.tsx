import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";

export default function HeroHome() {
	return (
		<section className="relative">
			<PageIllustration />
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				{/* Hero content */}
				<div className="pb-12 pt-32 md:pb-20 md:pt-40">
					{/* Section header */}
					<div className="pb-12 text-center md:pb-16">
						<h1
							className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
							data-aos="zoom-y-out"
							data-aos-delay={150}
						>
							CÔNG TY CỔ PHẦN TM DỊCH VỤ VẬN TẢI XUẤT NHẬP KHẨU ĐÔNG Á
						</h1>
						<div className="mx-auto max-w-3xl">
							<p
								className="mb-8 text-lg text-gray-700"
								data-aos="zoom-y-out"
								data-aos-delay={300}
							>
								​Sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi.
							</p>
							<div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
								<div
									className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
									data-aos="zoom-y-out"
									data-aos-delay={450}
								>
									<a
										className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
										href="mailto:contact@dongacorp.com.vn"
									>
										<span className="relative inline-flex items-center">
											Liên hệ
										</span>
									</a>
									<a
										className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
										href="#about"
									>
										Về chúng tôi
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* Hero image */}
					<div
						className="mx-auto max-w-4xl"
						data-aos="zoom-y-out"
						data-aos-delay={600}
					>
						<img
							className="relative aspect-video rounded-2xl px-5 py-3"
							src="/images/banner.webp"
							alt="banner"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
